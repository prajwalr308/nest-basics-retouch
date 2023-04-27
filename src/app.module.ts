import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicModule } from './basic/basic.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BasicModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
