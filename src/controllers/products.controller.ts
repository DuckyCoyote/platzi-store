import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(/*@Query('limit') limit = 100, @Query('offset') offset = 0*/) {
    // return {
    //   message: `Products ${limit}, Offset: ${offset}`,
    // };
    return this.productsService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(
    /*@Res() response: Response,*/ @Param('productId', ParseIntPipe)
    productId: number,
  ) {
    // response.status(200).send({ message: `Product ${productId}` });
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
