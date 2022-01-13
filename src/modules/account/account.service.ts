import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { AccountResponseDto } from './dto/accountResponse.dto';
import { AccountTransformDataService } from './service/accountTransformData.service';

@Injectable()
export class AccountService {
  constructor(
    private accountRepository: AccountRepository,
    private accountTransformDataService: AccountTransformDataService,
  ) {}

  async getAccountById(autoId: number): Promise<AccountResponseDto[]> {
    const accountById = await this.accountRepository.getAccountById(autoId);
    return this.accountTransformDataService.transform(accountById);
  }

  async getAccountAllCars(): Promise<AccountResponseDto[]> {
    const account = await this.accountRepository.getAccountAllCars();
    return this.accountTransformDataService.transform(account);
  }
}
