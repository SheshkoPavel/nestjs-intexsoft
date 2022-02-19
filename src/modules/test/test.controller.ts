import {Get, Controller, Post, Body, Query, Res, HttpStatus} from '@nestjs/common'
import {TestService} from "./test.service";
import {TestEntity} from "../../entity/test-entity";

@Controller('test')
export class TestController {
    constructor (private readonly testService: TestService) { }

    @Get('/all')
    async getAll (): Promise<TestEntity[]> {
        return await this.testService.getAll()
    }


    @Get('/helloWorld')
    async helloWorld () {
        return 'helloWorld'
    }

    @Get('/testEndpoint')
    async testEndpoint () {
        return 'testEndpoint'
    }

    @Post('/postExample')
    async postExample (@Body() body: any) {
        return 'postExample' + body.text
    }

    @Get('/getEaxmpleWithQuery')
    async getEaxmpleWithQuery (@Query('id') id: number, @Query('name') name: string) {
        return 'getEaxmpleWithQuery' + id
    }

}
