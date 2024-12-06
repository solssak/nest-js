import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'iPhone 16 Pro' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'so good' })
  desc: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1000000 })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'http://example.com/1' })
  productImg: string;
}
