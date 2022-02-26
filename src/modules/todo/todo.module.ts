import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TodoController} from './todo.controller';
import {TodoEntity} from '../../entity/todo-entity';
import {TodoRepository} from './todo.repository';
import {TodoService} from './todo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TodoEntity, TodoRepository])
    ],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}