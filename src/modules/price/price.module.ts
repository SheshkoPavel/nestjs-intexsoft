import { Module } from '@nestjs/common';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { RateRepository } from './rate.repository';
import { PriceRepository } from './price.repository';
import { DbClientServicesModule } from '../../common';

@Module({
  imports: [DbClientServicesModule],
  controllers: [PriceController],
  providers: [PriceService, RateRepository, PriceRepository],
})
export class PriceModule {}
