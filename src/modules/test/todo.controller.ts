import {Get, Controller, Post, Body, Query, Delete, Patch} from '@nestjs/common'
import {AddTodoDto} from './dto/add-todo.dto';
import {DeleteTodoDto} from './dto/delete-todo.dto';
import {Todo} from './model/todo.model';
import {EditTodoDto} from './dto/edit-todo.dto';

let todoList: Todo[] = [];


let i = 0;
const generateId = () => {
    i = i + 1;
    return i;
}


@Controller('todo')
export class TodoController {
    @Get("/getAll")
    async testEndpoint () {
        return todoList
    }

    @Post('/add')
    async add (@Body() body: AddTodoDto) {
        const todo: Todo = {
            name: body.name,
            id: generateId()
        }

        todoList.push(todo)
    }

    @Delete('/delete')
    async delete (@Body() body: DeleteTodoDto) {
        todoList = todoList.filter(todo => todo.id !== body.id )
    }

    @Patch('/edit')
    async edit (@Body() body: EditTodoDto) {
        todoList = todoList
          .map(todo => {
              if(todo.id === body.id) {
                  return {
                      id: todo.id,
                      name: body.name
                  }
              }
              return todo
          })
    }

    @Get('/getEaxmpleWithQuery')
    async getEaxmpleWithQuery (@Query('id') id: number, @Query('name') name: string) {
        return 'getEaxmpleWithQuery' + id
    }

}
