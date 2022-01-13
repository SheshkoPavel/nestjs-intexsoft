import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PriceModule } from './modules/price/price.module';
import { BookingModule } from './modules/booking/booking.module';
import { AccountModule } from './modules/account/account.module';
import { CarModule } from './modules/cars/car.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PriceModule,
    BookingModule,
    AccountModule,
    CarModule,
  ],
})
export class AppModule {}
