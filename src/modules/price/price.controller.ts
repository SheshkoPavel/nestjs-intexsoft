import { Body, Controller, Post } from '@nestjs/common';
import { PriceDto } from './dto/price.dto';
import { PriceService } from './price.service';
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
    ApiBody
} from '@nestjs/swagger';
import {PriceResponseDto} from "./dto/priceResponse.dto";

@ApiTags('price')
@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @ApiOperation({ summary: 'Calculate price for rental' })
  @ApiResponse({
    status: 201,
    description: 'Get json of calculation of rental auto',
    type: PriceResponseDto
  })
  @ApiBadRequestResponse({description: 'Something wrong'})
  @ApiBody({ type: PriceDto })
  @Post()
  public async calculatePrice(@Body() priceDto: PriceDto): Promise<PriceResponseDto> {
    return await this.priceService.calculatePrice(priceDto);
  }
}
