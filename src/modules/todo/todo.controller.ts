import {Get, Controller, Post, Body, Query, Delete, Patch} from '@nestjs/common'
import {AddTodoDto} from './dto/add-todo.dto';
import {DeleteTodoDto} from './dto/delete-todo.dto';
import {Todo} from './model/todo.model';
import {EditTodoDto} from './dto/edit-todo.dto';
import {TodoService} from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {
    }

    @Post('/add')
    async add (@Body() body: AddTodoDto) {
        this.todoService.save(body);
    }

    @Delete('/delete')
    async delete (@Body() body: DeleteTodoDto) {
       this.todoService.delete(body);
    }

    @Patch('/edit')
    async edit (@Body() body: EditTodoDto) {
      this.todoService.edit(body)
    }

    @Get("/getAll")
    async getAll () {
        return this.todoService.getAll()
    }

}
