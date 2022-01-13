import { CarController } from '../car.controller';

describe('CarController', () => {
  let carController: CarController;

  const mockCarForGetAll = [
    {
      "id": 1,
      "brand": "rollsRoyce",
      "model": "ghost",
      "license_plate": "GXZ1834",
      "vin": "19UUA8F57AA067885",
      "register_date": "2020-05-07T00:00:00.000Z"
    },
    {
      "id": 2,
      "brand": "ford",
      "model": "mustang",
      "license_plate": "6MIT583",
      "vin": "1FDKF37G1VEB36767",
      "register_date": "2021-05-11T00:00:00.000Z"
    },
    {
      "id": 3,
      "brand": "chevrolet",
      "model": "camaro",
      "license_plate": "8DWL987",
      "vin": "1N4BU31D2TC133660",
      "register_date": "2021-01-15T00:00:00.000Z"
    },
    {
      "id": 4,
      "brand": "plymouth",
      "model": "barracuda",
      "license_plate": "AX25780",
      "vin": "2G1FP22G922147195",
      "register_date": "2021-06-06T00:00:00.000Z"
    },
    {
      "id": 5,
      "brand": "nissan",
      "model": "skyline",
      "license_plate": "DJY5518",
      "vin": "WAUDF78E86A074839",
      "register_date": "2021-02-23T00:00:00.000Z"
    }
  ];

  const carService = {
    getCarById: () => mockCarForGetAll[1],
    getAll: () => mockCarForGetAll,
  } as any;

  beforeEach(() => {
    carController = new CarController(carService);
  });

  it('should return car by id 2', async () => {
    const res = await carController.getCarById(2);

    expect(res).toBe(mockCarForGetAll[1]);
  });

  it('should return all cars', async () => {
    const res = await carController.getAll();

    expect(res).toBe(mockCarForGetAll);
  });
});
