import { AccountRepository } from '../account.repository';
import {DbClientService, IAccount} from '../../../common';
import { mockAccount } from './account-mock.constant';
import {Client} from "pg";

describe('AccountRepository', () => {
  let accountRepository: AccountRepository;

  const mockAccount: IAccount = {
    percent: '34',
    day_of_week: 2,
  };

  const result = {
    rows: mockAccount,
  };

  const dbClient = {
    getClient: () => ({
      query: () => result,
    }),
  } as any;

  beforeEach(() => {
    accountRepository = new AccountRepository(dbClient);
  });

  it('should query account for all cars', async () => {
    const res = await accountRepository.getAccountAllCars();
    expect(res).toBe(mockAccount);
  });

  it('should query account for car by id', async () => {
    const res = await accountRepository.getAccountById(2);
    expect(res).toBe(mockAccount);
  });
});

export class MockAccountRepository extends AccountRepository {
  client: Client;

  constructor() {
    super({} as any);
    this.client = this.dbService.getClient();
  }

  async getAccountById(autoId: number): Promise<IAccount[]> {
    return [mockAccount];
  }

  async getAccountAllCars(): Promise<IAccount[]> {
    return [mockAccount];
  }

}
