import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ActiveUSerId } from 'src/shared/decorators/ActiveUserId';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  findAll(@ActiveUSerId() userId: string) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
