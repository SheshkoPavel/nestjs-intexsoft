import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import {typeOrmConfigAsync} from "./config/configuration";
import {TestModule} from "./modules/test/test.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TestModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
