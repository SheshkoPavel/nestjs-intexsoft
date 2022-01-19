import { Get, Controller } from '@nestjs/common'
import { ApiBadRequestResponse, ApiOperation, ApiResponse } from '@nestjs/swagger'
import {TestService} from "./test.service";
import {TestEntity} from "../../entity/test-entity";

@Controller('test')
export class TestController {
    constructor (private readonly testService: TestService) { }

    @ApiOperation({ summary: 'Get all' })
    @ApiResponse({ status: 200, description: 'Get all' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiBadRequestResponse({ description: 'Something wrong' })
    @Get('/all')
    async getAll (): Promise<TestEntity[]> {
        return await this.testService.getAll()
    }
}
