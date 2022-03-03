import { Injectable } from '@nestjs/common'
import {TodoRepository} from './todo.repository';
import {TodoDto} from "../common/dto/todo/todo.dto";
import {AddTodoDto} from "../common/dto/todo/add-todo.dto";
import {EditTodoDto} from "../common/dto/todo/edit-todo.dto";

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
