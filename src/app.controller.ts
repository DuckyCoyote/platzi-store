import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo! :)';
  }

  @Get('nuevo')
  newEndPoint(): string {
    return 'Yo soy un nuevo EndPoint!';
  }

  @Get('/nuevito/')
  nuevito(): string {
    return 'Yo soy un nuevito EndPoint!';
  }
  
  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `Product ${params.id}`;
  }
}
