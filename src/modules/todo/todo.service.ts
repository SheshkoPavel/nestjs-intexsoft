import { Injectable } from '@nestjs/common'
import {TodoRepository} from './todo.repository';
import {AddTodoDto} from './dto/add-todo.dto';
import {DeleteTodoDto} from './dto/delete-todo.dto';
import {TodoEntity} from '../../entity/todo-entity';
import {EditTodoDto} from './dto/edit-todo.dto';

@Injectable()
export class TodoService {
    constructor ( private readonly todoRepository: TodoRepository ) { }

    async getAll (): Promise<TodoEntity[]> {
        return await this.todoRepository.find()
    }

    async save (addTodoDto: AddTodoDto) {
        return await this.todoRepository.save(addTodoDto)
    }

    async delete(deleteTodoDto: DeleteTodoDto) {
        return await this.todoRepository.delete(deleteTodoDto.id)
    }

    async edit(editTodoDto: EditTodoDto) {
        return await this.todoRepository.update(editTodoDto.id, {name: editTodoDto.name})
    }
}
