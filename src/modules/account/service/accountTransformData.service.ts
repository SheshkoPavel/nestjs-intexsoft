import { AccountResponseDto } from '../dto/accountResponse.dto';
import { IAccount } from '../../../common/interfaces/account.interface';
import { DayOfWeek } from '../enum/dayOfWeek.enum';

export class AccountTransformDataService {
  public transform(accountEntity: IAccount[]): AccountResponseDto[] {
    return accountEntity.map((account) => ({
      day: DayOfWeek[account.day_of_week],
      percent: account.percent,
    }));
  }
}
