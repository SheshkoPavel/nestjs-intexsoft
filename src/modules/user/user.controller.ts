import {Get, Controller, Post, Body, Query, Delete, Patch, Param} from '@nestjs/common'
import {UserService} from './user.service';
import {RegisterUserDto} from './dto/register-user.dto';
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('/register')
    async add (@Body() body: RegisterUserDto) {
        this.userService.register(body);
    }

    @Delete(':id')
    async delete (@Param('id') id: number) {
        return this.userService.delete(id);
    }

    @Patch('/patch')
    async patch(@Body() body: UpdateUserDto ) {
        return this.userService.patch(body);
    }
}
