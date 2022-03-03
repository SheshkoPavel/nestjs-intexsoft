import { Module } from '@nestjs/common';
import {TodoController} from './todo.controller';
import {UserController} from "./user.controller";
import {ServicesModule} from "../services/services.module";
import {PassportModule} from "../lib";
import {LocalStrategy} from "./auth/local.strategy";
import {JwtStrategy} from "./auth/jwt.strategy";

@Module({
    imports: [
        ServicesModule,
        PassportModule.register({})
    ],
    controllers: [TodoController, UserController],
    providers: [LocalStrategy, JwtStrategy]
})
export class ControllerModule {}
