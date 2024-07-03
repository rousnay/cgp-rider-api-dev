import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { ConfigService } from 'src/config/config.service';
import { Riders } from 'src/modules/riders/entities/riders.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Riders)
    private riderRepository: Repository<Riders>,
    configService: ConfigService, // No need to declare it as private or readonly, Since configService is only needed in the constructor
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwtSecret,
    });
  }

  async validate(payload: any) {
    const user = await this.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validateUser(payload: any): Promise<any> {
    // Extract user id from the payload
    const rider_id = payload.sub;

    // Find the user in the database by userId
    const user = await this.riderRepository.findOne({
      where: { id: rider_id },
    });

    // get riders's overall review
    const given_to_id = user?.id;
    const result = await this.entityManager.query(
      'SELECT ROUND(AVG(rating), 1) as average_rating, COUNT(rating) as total_ratings FROM overall_reviews WHERE given_to_id = ?',
      [given_to_id],
    );

    const averageRating = result[0].average_rating || 0;
    const totalRatings = result[0].total_ratings || 0;

    const avg_rating = {
      average_rating: Number(averageRating),
      total_ratings: Number(totalRatings),
    };

    const addReview = { ...user, avg_rating };

    // If user is found, return the user, otherwise return null
    if (user) {
      return addReview;
    } else {
      return null;
    }
  }
}
