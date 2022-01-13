import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';
import { DbClientServicesModule } from '../../common';
import { AccountTransformDataService } from './service/accountTransformData.service';

@Module({
  imports: [DbClientServicesModule],
  controllers: [AccountController],
  providers: [AccountService, AccountTransformDataService, AccountRepository],
})
export class AccountModule {}
