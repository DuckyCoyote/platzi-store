import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: this.counterId,
      name: 'Licuadora',
      description: 'Es una licuadora',
      price: 123,
      stock: 10,
      image: 'http://image.img',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    if (product) {
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    }
  }
}
