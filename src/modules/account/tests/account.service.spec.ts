import { AccountService } from '../account.service';
import { AccountTransformDataService } from '../service/accountTransformData.service';
import { MockAccountRepository } from './account.repository.spec';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService(
      new MockAccountRepository(),
      new AccountTransformDataService(),
    );
  });

  it('should return account for all auto ', async () => {
    const mockData = [
      {
        percent: '45',
        day: 'Tuesday',
      },
      {
        percent: '23',
        day: 'Thursday',
      },
    ];
    const res = await accountService.getAccountAllCars();
    expect(res).toStrictEqual(mockData);
  });
});
