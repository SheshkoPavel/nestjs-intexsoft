import { Injectable } from '@nestjs/common';
import { PriceDto } from './dto/price.dto';
import { PriceResponseDto } from './dto/priceResponse.dto';
import { RateRepository } from './rate.repository';
import { PriceRepository } from './price.repository';
import { MILLISECONDS_IN_DAY } from '../../common';

@Injectable()
export class PriceService {
  constructor(
    private readonly rateRepository: RateRepository,
    private readonly discountRepository: PriceRepository,
  ) {}

  public async calculatePrice(PriceDto: PriceDto): Promise<PriceResponseDto> {
    const start = new Date(PriceDto.startDate);
    const end = new Date(PriceDto.endDate);

    const days =
      (end.getTime() - start.getTime()) / MILLISECONDS_IN_DAY;
    const discount = await this.discountRepository.getDiscountByDays(days);
    const discountCoefficient = 1 - discount.rate / 100;
    const rate = await this.rateRepository.getRateById(PriceDto.rateId);

    return {
      days: ( Number(end) - Number(start) ) / MILLISECONDS_IN_DAY,
      price: days * rate.price * discountCoefficient,
      rate: rate.price,
      discount: discount.rate,
    };
  }
}
