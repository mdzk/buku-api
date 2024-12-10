import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './login.dto';
import { CreateBookDto } from './create-book.dto';
import { TokenDto } from './token.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): { status: boolean; message: string; code: number } {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(@Query('id') id: string): { status: boolean; message: string; code: number; user?: any } {
    return this.appService.getUser(id);
  }

  @Post('store-buku')
  storeBuku(@Body() createBookDto: CreateBookDto): {
      status: boolean;
      message: string;
      code: number;
      data?: any
  } {
    const { title, author } = createBookDto;
    return this.appService.storeBuku(title, author);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto): { status: boolean; message: string; code: number; username?: string } {
    const { username, password } = loginDto;
    return this.appService.login(username, password);
  }

  @Post('process-token')
  processToken(@Body() tokenDto: TokenDto): { status: boolean; message: string; code: number; data?: any } {
    const { token } = tokenDto;
    return this.appService.processToken(token);
  }
}
