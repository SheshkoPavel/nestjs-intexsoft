import {Test} from '@nestjs/testing';
import {BookingController} from "../booking.controller";
import {BookingService} from "../booking.service";
import {BookingRepository} from "../booking.repository";
import {AvailableToBookService} from "../service/availableToBook.service";
import {DbClientServicesModule} from "../../../common";
import {
  HttpStatus,
  Res
} from '@nestjs/common';

describe('Parts Controller', () => {
  let bookingController: BookingController;
  let bookingService: BookingService;
  let bookingRepository: BookingRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        DbClientServicesModule
      ],
      controllers: [
        BookingController
      ],
      providers: [
        BookingService,
        BookingRepository,
        AvailableToBookService
      ]
    }).compile();

    bookingService = module.get<BookingService>(BookingService);
    bookingController = module.get<BookingController>(BookingController);
    bookingRepository = module.get<BookingRepository>(BookingRepository);
  });

  it('should be defined', () => {
    expect(bookingController).toBeDefined();
    expect(bookingService).toBeDefined();
    expect(bookingRepository).toBeDefined();
  });

  it('should return true', async () => {

    const bookingServiceMock = jest.spyOn(bookingService, 'bookCar').mockImplementation(async () => {
    });

    const response = {
      "startDate": "2021-08-16",
      "endDate": "2021-08-17",
      "rateId": 1,
      "autoId": 1
    };
    const res = {
      status: () => ({
        json: (message) => {
          expect(message).toEqual('The auto has been successfully booked.')
        }
      }),
    };
    await bookingController.bookCar(response, res)

    expect(bookingServiceMock).toHaveBeenCalledTimes(1);
  });
});