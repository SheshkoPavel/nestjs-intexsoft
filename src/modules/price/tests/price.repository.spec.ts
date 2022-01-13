import {PriceRepository} from "../price.repository";
import {IDiscount} from "../../../common";

describe('priceRepository', () => {
  let priceRepository: PriceRepository;

  const mockPriceFromDb = [{
    id: 2,
    rate: 10,
    from_days: 6,
    to_days: 14
  }];

  const mockPriceResponse: IDiscount[] =[{
    id: 2,
    rate: 10,
    fromDays: 6,
    toDays: 14
  }]

  const result = {
    rows: mockPriceFromDb,
  };

  const dbClient = {
    getClient: () => ({
      query: () => result,
    }),
  } as any;

  beforeEach(() => {
    priceRepository = new PriceRepository(dbClient);
  });

  it('should query account for all cars', async () => {
    const res = await priceRepository.getDiscountByDays(14);

    expect(res).toEqual(mockPriceResponse[0]);
  });


});

// export class MockCarRepository extends CarRepository {
//   constructor() {
//     super({} as any);
//   }
//
//   async getAccountById(autoId: number): Promise<IAccount[]> {
//     return [mockAccount];
//   }
//
//   async getAccountAllCars(): Promise<IAccount[]> {
//     return [mockAccount];
//   }
// }
