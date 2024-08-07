import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Not, Repository } from 'typeorm';
// import { CreateUserPaymentHistoryDto } from './dtos/create-user-payment-history.dto';
import { REQUEST } from '@nestjs/core';
import { Model } from 'mongoose';
import { UserPaymentHistory } from './user-payment-history.entity';
import { DeliveryRequest } from '@modules/delivery/schemas/delivery-request.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserPaymentHistoryDto } from './dtos/create-user-payment-history.dto';
import { UpdateUserPaymentHistoryDto } from './dtos/update-user-payment-history.dto';
import { CreateUserPaymentHistoryForDeliveryDto } from './dtos/create-user-payment-history-for-delivery.dto';

@Injectable()
export class UserPaymentHistoryService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @InjectRepository(UserPaymentHistory)
    private readonly userPaymentHistoryRepository: Repository<UserPaymentHistory>,
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  async findAll(): Promise<UserPaymentHistory[]> {
    const rider_id = this.request['user'].id;
    const payment_history = this.userPaymentHistoryRepository.find({
      where: { rider_id: rider_id },
    });

    return payment_history;
  }

  async findTodaysEarning(): Promise<any> {
    const rider_id = this.request['user'].id;
    const result = await this.entityManager.query(
      `SELECT * from deliveries WHERE shipping_status='delivered' AND rider_id = ?`,
      [rider_id],
    );

    const total_trips = result.length > 0 ? result.length : 0;
    let total_distance = 0;
    let total_earnings = 0;
    let total_trip_time = 0;

    result.filter((item) => {
      total_distance += item.init_distance;
      total_earnings += item.delivery_charge;
      total_trip_time += item.init_duration;
    });

    return {
      total_trips: total_trips,
      total_distance: total_distance,
      total_earnings: total_earnings,
      total_trip_time: total_trip_time,
    };
  }

  async create(
    createUserPaymentHistoryDto: CreateUserPaymentHistoryDto,
  ): Promise<UserPaymentHistory> {
    const userPaymentHistory = this.userPaymentHistoryRepository.create(
      createUserPaymentHistoryDto,
    );
    return await this.userPaymentHistoryRepository.save(userPaymentHistory);
  }

  async update(
    id: number,
    updateUserPaymentHistoryDto: UpdateUserPaymentHistoryDto,
  ): Promise<UserPaymentHistory> {
    const userPaymentHistory = await this.userPaymentHistoryRepository.findOne({
      where: { id },
    });
    if (!userPaymentHistory) {
      throw new NotFoundException(`UserPaymentHistory with ID ${id} not found`);
    }
    // Object.assign(userPaymentHistory, updateUserPaymentHistoryDto);
    return await this.userPaymentHistoryRepository.save(
      updateUserPaymentHistoryDto,
    );
  }

  async createPaymentHistoryForDelivery(
    createUserPaymentHistoryForDeliveryDto: CreateUserPaymentHistoryForDeliveryDto,
  ): Promise<UserPaymentHistory> {
    const userPaymentHistory = this.userPaymentHistoryRepository.create(
      createUserPaymentHistoryForDeliveryDto,
    );
    return await this.userPaymentHistoryRepository.save(userPaymentHistory);
  }
}
