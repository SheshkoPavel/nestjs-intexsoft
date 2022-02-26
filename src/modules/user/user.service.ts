import { Injectable } from '@nestjs/common'
import {UserRepository} from './user.repository';
import {RegisterUserDto} from './dto/register-user.dto';
import {UpdateUserDto} from "./dto/update-user.dto";
var createHash = require('hash-generator');

@Injectable()
export class UserService {
    constructor ( private readonly userRepository: UserRepository ) { }

    async register (registerUserDto: RegisterUserDto) {
        const user = await this.userRepository.findOne({login: registerUserDto.login})

        if(!user) {
            registerUserDto.pass = createHash(registerUserDto.pass);
            return this.userRepository.save(registerUserDto);
        }

        return 'User already created'
    }


    async delete(id: number) {
        const res = await this.userRepository.delete(id)
        if (res.affected > 0) {
            return 'User have been deleted'
        }
        return 'User missed'
    }

    async patch(userDto: UpdateUserDto) {
        const res = await this.userRepository.update(userDto.id, {login: userDto.login})
        if (res.affected > 0) {
            return 'User have been update'
        }
        return 'User missed'
    }
}
