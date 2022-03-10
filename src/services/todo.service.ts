import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {TodoRepository} from './todo.repository';
import {TodoDto} from "../common/dto/todo/todo.dto";
import {AddTodoDto} from "../common/dto/todo/add-todo.dto";
import {EditTodoDto} from "../common/dto/todo/edit-todo.dto";
import {TodoEntity} from "../entity/todo-entity";

@Injectable()
export class TodoService {
    constructor(private readonly todoRepository: TodoRepository) {
    }

    async get(userId: number) {
        return await this.todoRepository.find({user: {id: userId}}) as unknown as TodoDto[]
    }

    async save(addTodoDto: AddTodoDto, userId: number) {
        return await this.todoRepository.save({...addTodoDto, user: {id: userId}})
    }

    async delete(id: number, userId: number) {
        await this.checkTodoBeforeApply(id, userId)
        return await this.todoRepository.delete(id)
    }

    async edit(editTodoDto: EditTodoDto, userId: number) {
        await this.checkTodoBeforeApply(editTodoDto.id, userId)
        await this.todoRepository.update({id: editTodoDto.id, user: {id: userId}}, {name: editTodoDto.name})
    }

    private async checkTodoBeforeApply(todoId: number, userId: number) {
        const todo = await this.todoRepository.findById(todoId)
        if (!todo) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Todo not found'
            }, HttpStatus.NOT_FOUND)
        }

        if (todo.userId !== userId) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'User not owner of todo'
            }, HttpStatus.FORBIDDEN)
        }
    }

    async search(searchText: string, userId: number, page: string, itemsPerPage: string) {
        return this.todoRepository.search(searchText, userId, Number(page), Number(itemsPerPage))
    }

    async getAmountPagesByCriteria(searchText: string, userId: number, itemsPerPage: string) {
        const amount = await this.todoRepository.getAmountItemsByCriteria(searchText, userId)
        return Math.ceil(amount[0].count / Number(itemsPerPage));
    }
}
