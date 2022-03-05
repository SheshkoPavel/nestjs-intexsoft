import {Get, Controller, Post, Body, Query, Delete, Patch, Param, UseGuards} from '@nestjs/common'
import {TodoService} from "../services/todo.service";
import {AddTodoDto} from "../common/dto/todo/add-todo.dto";
import {EditTodoDto} from "../common/dto/todo/edit-todo.dto";
import {TodoDto} from "../common/dto/todo/todo.dto";
import {AuthGuard} from "../lib";

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('/add')
    async add (@Body() body: AddTodoDto) {
        this.todoService.save(body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete (@Param('id') id: number) {
       this.todoService.delete(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/edit')
    async edit (@Body() body: EditTodoDto) {
      this.todoService.edit(body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("/getAll")
    async getAll (): Promise<TodoDto[]> {
        return this.todoService.getAll()
    }

}
