import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import { BookingDto } from './dto/booking.dto';
import { BookingService } from './booking.service';
import {
  DatabaseExceptionFilter,
  WrongDatesExceptionFilter,
} from '../../common';
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse, ApiBody,
} from '@nestjs/swagger';

@ApiTags('booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Booking auto' })
  @ApiResponse({ status: 201, description: 'True response'})
  @ApiBadRequestResponse({description: 'Something wrong'})
  @ApiBody({ type: BookingDto })
  @Post()
  @UseFilters(new WrongDatesExceptionFilter(), new DatabaseExceptionFilter())
  async bookCar(@Body() bookingDto: BookingDto, @Res() res) {
    await this.bookingService.bookCar(bookingDto);
    res
      .status(HttpStatus.CREATED)
      .json('The auto has been successfully booked.');
  }
}
