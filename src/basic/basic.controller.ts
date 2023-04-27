import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateBasicDto } from './dto/create-basic.dto';
import { BasicService } from './basic.service';

@Controller('basic')
export class BasicController {
  constructor(private readonly basicService: BasicService) {}
  @Get()
  getHello(@Query('type') type?: 'type1' | 'type2') {
    return this.basicService.getBooks(type);
  }
  @Get(':id')
  getHelloWithId(@Param('id') id: string): string {
    return 'Hello ' + id;
  }
  @Post()
  getHelloWithPost(@Body() createBasicDto: CreateBasicDto) {
    return {
      name: createBasicDto.name,
    };
  }
}
