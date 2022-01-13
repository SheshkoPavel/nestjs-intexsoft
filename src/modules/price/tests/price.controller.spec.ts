import { PriceController } from '../price.controller';

describe('CarController', () => {
  let priceController: PriceController;
  const mockRequestForGetPrice = {
    "startDate": "2021-08-16",
    "endDate": "2021-08-17",
    "rateId": 1
  }

  const mockForGetPrice = {
    "days": 5,
    "price": 105,
    "rate": 1,
    "discount": 0
  };

  const priceService = {
    calculatePrice: () => mockForGetPrice,
  } as any;

  beforeEach(() => {
    priceController = new PriceController(priceService);
  });

  it('should return price', async () => {
    const res = await priceController.calculatePrice(mockRequestForGetPrice);

    expect(res).toBe(mockForGetPrice);
  });
});
