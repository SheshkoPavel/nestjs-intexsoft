import { AccountTransformDataService } from './accountTransformData.service';

describe('accountTranformDataService', () => {
  let accountTransformDataService: AccountTransformDataService;

  const mockData = [
    {
      percent: '45',
      day_of_week: 2,
    },
    {
      percent: '23',
      day_of_week: 4,
    },
  ];

  const mockTransformData = [
    {
      percent: '45',
      day: 'Tuesday',
    },
    {
      percent: '23',
      day: 'Thursday',
    },
  ];

  beforeEach(() => {
    accountTransformDataService = new AccountTransformDataService();
  });

  it('should transform to valid data', async () => {
    const res = await  accountTransformDataService.transform(mockData);
    expect(res).toStrictEqual(mockTransformData);
  });
});
