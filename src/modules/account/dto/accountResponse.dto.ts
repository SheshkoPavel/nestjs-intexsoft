import { ApiProperty } from '@nestjs/swagger';

export class AccountResponseDto {
  @ApiProperty({
    description: 'Percent loud of car by day',
    example: '5.764'
  })
  percent: string;
  @ApiProperty({
    description: 'Percent loud of car by day',
    example: 'Monday'
  })
  day: string;
}
