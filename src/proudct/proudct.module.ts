import { Module } from '@nestjs/common';
import { ProudctService } from './proudct.service';
import { ProudctController } from './proudct.controller';

@Module({
  controllers: [ProudctController],
  providers: [ProudctService],
})
export class ProudctModule {}
