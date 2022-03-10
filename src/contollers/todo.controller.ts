import {Get, Controller, Post, Body, Query, Delete, Patch, Param, UseGuards, Req} from '@nestjs/common'
import {TodoService} from "../services/todo.service";
import {AddTodoDto} from "../common/dto/todo/add-todo.dto";
import {EditTodoDto} from "../common/dto/todo/edit-todo.dto";
import {TodoDto} from "../common/dto/todo/todo.dto";
import {AuthGuard} from "../lib";
import { Request } from 'express'
import {getUserId} from "./util/jwt.util";

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('/add')
    async add (@Body() body: AddTodoDto, @Req() req: Request) {
        await this.todoService.save(body, getUserId(req));
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete (@Param('id') id: number, @Req() req: Request) {
        await this.todoService.delete(id, getUserId(req));
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/edit')
    async edit (@Body() body: EditTodoDto, @Req() req: Request) {
      await this.todoService.edit(body, getUserId(req))
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("/get")
    async get (@Req() req: Request): Promise<TodoDto[]> {
        return this.todoService.get(getUserId(req))
    }

}
