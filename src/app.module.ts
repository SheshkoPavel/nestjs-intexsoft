import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import {typeOrmConfigAsync} from "./config/configuration";
import {TodoModule} from "./modules/todo/todo.module";
import {UserModule} from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TodoModule,
    UserModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
