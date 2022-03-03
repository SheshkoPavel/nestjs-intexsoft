import { Injectable } from '@nestjs/common'
import {UserRepository} from "./user.repository";
import {RegisterUserDto} from "../common/dto/user/register-user.dto";
import {UpdateUserDto} from "../common/dto/user/update-user.dto";
import {JwtService} from "@nestjs/jwt";
var createHash = require('hash-generator');

@Injectable()
export class UserService {
    constructor ( private readonly userRepository: UserRepository,
                  private readonly jwtService: JwtService ) { }

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

    getToken({ username, id }: { username: string; id: string }): {
        token: string;
    } {
        return { token: this.jwtService.sign({ username, id }) };
    }

    async findUser({ username, password }: { username: string; password: string }): Promise<{
        id: string;
        username: string;
    }> {
        const user = await this.userRepository.findOne({login: username});
        if (!user || user.pass !== password) {
            return null;
        }
        return {id: user.id.toString(), username: user.login};
    }
}
