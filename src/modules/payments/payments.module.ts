import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@config/config.module';
import { PaymentService } from './services/payments.service'; // src
import { PaymentController } from './controllers/payments.controller';
import { DeliveryService } from '@modules/delivery/delivery.service';
import { FirebaseAdminModule } from '@services/firebase-admin.module';
import { NotificationsModule } from '@modules/notification/notification.module';
import { LocationModule } from '@modules/location/location.module';
import { DeliveryModule } from '@modules/delivery/delivery.module';
import { PaymentMethodService } from './services/payment-method.service';
import { PaymentMethodController } from './controllers/payment-method.controller';

@Module({
  imports: [
    ConfigModule,
    FirebaseAdminModule,
    NotificationsModule,
    LocationModule,
    DeliveryModule,
  ],
  exports: [PaymentService],
  providers: [PaymentService, DeliveryService, PaymentMethodService],
  controllers: [PaymentController, PaymentMethodController],
})
export class PaymentModule {}
