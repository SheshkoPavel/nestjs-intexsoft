import {Get, Controller, Post, Body, Query, Delete, Patch, Param} from '@nestjs/common'
import {AddTodoDto} from './dto/add-todo.dto';
import {DeleteTodoDto} from './dto/delete-todo.dto';
import {Todo} from './model/todo.model';
import {EditTodoDto} from './dto/edit-todo.dto';
import {TodoService} from './todo.service';
import {TodoDto} from "./dto/todo.dto";

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {
    }

    @Post('/add')
    async add (@Body() body: AddTodoDto) {
        this.todoService.save(body);
    }

    @Delete(':id')
    async delete (@Param('id') id: number) {
       this.todoService.delete(id);
    }

    @Patch('/edit')
    async edit (@Body() body: EditTodoDto) {
      this.todoService.edit(body)
    }

    @Get("/getAll")
    async getAll (): Promise<TodoDto[]> {
        return this.todoService.getAll()
    }

}
