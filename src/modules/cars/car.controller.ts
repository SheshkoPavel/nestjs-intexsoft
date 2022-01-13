import { Controller, Get, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResponseDto } from './dto/car.dto';
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse, ApiQuery,
} from '@nestjs/swagger';

@ApiTags('cars')
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: 'Get car by id' })
  @ApiResponse({
    status: 200,
    description: 'Get information about car',
    type: CarResponseDto,
  })
  @ApiBadRequestResponse({description: 'Something wrong'})
  @ApiQuery({name: 'carId', description: 'car id. *For example `1`*'})
  @Get('/:carId')
  public async getCarById(@Query('carId') carId: number): Promise<CarResponseDto> {
    return this.carService.getCarById(carId);
  }

  @ApiOperation({ summary: 'Get all car' })
  @ApiResponse({
    status: 200,
    description: 'Get information about all cars',
    type: CarResponseDto,
    isArray: true
  })
  @ApiBadRequestResponse({description: 'Something wrong'})
  @Get()
  public async getAll(): Promise<CarResponseDto[]> {
    return this.carService.getAll();
  }
}
