import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 16 Pro' })
  name: string;

  @ApiProperty({ example: 'so good' })
  desc: string;

  @ApiProperty({ example: 1000000 })
  price: number;

  @ApiProperty({ example: 'http://example.com/1' })
  productImg: string;
}
