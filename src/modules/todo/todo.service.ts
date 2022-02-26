import { Injectable } from '@nestjs/common'
import {TodoRepository} from './todo.repository';
import {AddTodoDto} from './dto/add-todo.dto';
import {DeleteTodoDto} from './dto/delete-todo.dto';
import {TodoEntity} from '../../entity/todo-entity';
import {EditTodoDto} from './dto/edit-todo.dto';
import {TodoDto} from "./dto/todo.dto";

@Injectable()
export class TodoService {
    constructor ( private readonly todoRepository: TodoRepository ) { }

    async getAll () {
        return await this.todoRepository.find() as unknown as TodoDto[]
    }

    async save (addTodoDto: AddTodoDto) {
        return await this.todoRepository.save(addTodoDto)
    }

    async delete(id: number) {
        return await this.todoRepository.delete(id)
    }

    async edit(editTodoDto: EditTodoDto) {
        return await this.todoRepository.update(editTodoDto.id, {name: editTodoDto.name})
    }
}
