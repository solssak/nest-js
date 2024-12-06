import { Test, TestingModule } from '@nestjs/testing';
import { ProudctController } from '../proudct.controller';
import { ProudctService } from '../proudct.service';

describe('ProudctController', () => {
  let controller: ProudctController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProudctController],
      providers: [ProudctService],
    }).compile();

    controller = module.get<ProudctController>(ProudctController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
