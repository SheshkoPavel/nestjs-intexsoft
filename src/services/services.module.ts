import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TodoService} from "./todo.service";
import {TodoEntity} from "../entity/todo-entity";
import {TodoRepository} from "./todo.repository";
import {UserEntity} from "../entity/user-entity";
import {UserRepository} from "./user.repository";
import {UserService} from "./user.service";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, UserRepository, TodoEntity, TodoRepository]),
        JwtModule.register({
            secret: 's3cr3t'
        }),
    ],
    providers: [UserService, TodoService],
    exports: [UserService, TodoService]
})
export class ServicesModule {}
