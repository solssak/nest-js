import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProudctService } from './proudct.service';
import { CreateProudctDto } from './dto/create-proudct.dto';
import { UpdateProudctDto } from './dto/update-proudct.dto';

@Controller('proudct')
export class ProudctController {
  constructor(private readonly proudctService: ProudctService) {}

  @Post()
  create(@Body() createProudctDto: CreateProudctDto) {
    return this.proudctService.create(createProudctDto);
  }

  @Get()
  findAll() {
    return this.proudctService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proudctService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProudctDto: UpdateProudctDto) {
    return this.proudctService.update(+id, updateProudctDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proudctService.remove(+id);
  }
}
