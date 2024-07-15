import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@config/config.module';
import { PaymentController } from './payments.controller';
import { DeliveryService } from '@modules/delivery/delivery.service';
import { FirebaseAdminModule } from '@services/firebase-admin.module';
import { NotificationsModule } from '@modules/notification/notification.module';
import { LocationModule } from '@modules/location/location.module';
import { DeliveryModule } from '@modules/delivery/delivery.module';
import { PaymentService } from './payments.service';

@Module({
  imports: [
    ConfigModule,
    FirebaseAdminModule,
    NotificationsModule,
    LocationModule,
    DeliveryModule,
  ],
  exports: [PaymentService],
  providers: [PaymentService, DeliveryService],
  controllers: [PaymentController],
})
export class PaymentModule {}
