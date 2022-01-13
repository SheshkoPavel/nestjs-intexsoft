import { ApiProperty } from '@nestjs/swagger';

export class CarResponseDto {
  @ApiProperty({
    description: 'Id from db',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: 'Mark of car',
    example: 'ford'
  })
  brand: string;

  @ApiProperty({
    description: 'Model of car',
    example: 'mustang'
  })
  model: string;

  @ApiProperty({
    description: 'License on car',
    example: 'WAUDF78E86A074839'
  })
  license_plate: string;

  @ApiProperty({
    description: 'ID number of car',
    example: 'WAUDF78E86A074839'
  })
  vin: string;

  @ApiProperty({
    description: 'Register date of car',
    example: '2021-02-23T00:00:00.000Z'
  })
  register_date: string;
}
