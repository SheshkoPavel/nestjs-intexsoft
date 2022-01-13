import { Module } from '@nestjs/common';
import { CarController } from 'src/modules/cars/car.controller';
import { CarService } from './car.service';
import { CarRepository } from './car.repository';
import { DbClientServicesModule } from '../../common';

@Module({
  imports: [DbClientServicesModule],
  controllers: [CarController],
  providers: [CarService, CarRepository],
})
export class CarModule {}
