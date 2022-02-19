import {Get, Controller, Post, Body, Query, Delete, Patch} from '@nestjs/common'
import {UserService} from './user.service';
import {RegisterUserDto} from './dto/register-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('/register')
    async add (@Body() body: RegisterUserDto) {
        this.userService.register(body);
    }
}
