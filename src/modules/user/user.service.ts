import { Injectable } from '@nestjs/common'
import {UserRepository} from './user.repository';
import {RegisterUserDto} from './dto/register-user.dto';

@Injectable()
export class UserService {
    constructor ( private readonly userRepository: UserRepository ) { }

    async register (registerUserDto: RegisterUserDto) {
        const user = await this.userRepository.findOne({login: registerUserDto.login})

        if(!user) {
            return this.userRepository.save(registerUserDto);
        }

        return 'User already created'
    }

}
