import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import {typeOrmConfigAsync} from "./config/configuration";
import {TodoModule} from "./modules/todo/todo.module";
import {UserModule} from './modules/user/user.module';
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "./lib";
import {JwtStrategy} from "./jwt.strategy";
import {LocalStrategy} from "./local.strategy";
import {AppService} from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TodoModule,
    UserModule,
    JwtModule.register({
      secret: 's3cr3t'
    }),
    PassportModule.register({})
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtStrategy]
})
export class AppModule {}
