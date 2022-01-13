import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingRepository } from './booking.repository';
import { DbClientServicesModule } from '../../common';
import { AvailableToBookService } from './service/availableToBook.service';

@Module({
  imports: [DbClientServicesModule],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository, AvailableToBookService],
})
export class BookingModule {}
