import {ApiProperty} from "@nestjs/swagger";

export class PriceResponseDto {
  @ApiProperty({
    description: 'Count of day',
    example: 5
  })
  days: number;
  @ApiProperty({
    description: 'Price for rent',
    example: 105
  })
  price: number;
  @ApiProperty({
    description: 'Rate id',
    example: 1
  })
  rate: number;
  @ApiProperty({
    description: 'Discount',
    example: 0
  })
  discount: number;
}