import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';
import { CarResponseDto } from './dto/car.dto';

@Injectable()
export class CarService {
  constructor(private carRepository: CarRepository) {
  }

  async getCarById(carId: number): Promise<CarResponseDto> {
    return  await this.carRepository.getCarById(carId);
  }

  async getAll(): Promise<CarResponseDto[]> {
    return  await this.carRepository.getAll();
  }

}
