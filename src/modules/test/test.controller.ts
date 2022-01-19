import {Get, Controller, Post, UseFilters, Body, Res, HttpStatus} from '@nestjs/common'
import {ApiBadRequestResponse, ApiBody, ApiOperation, ApiResponse} from '@nestjs/swagger'
import {TestService} from "./test.service";
import {TestEntity} from "../../entity/test-entity";
import {BookingDto} from "../booking/dto/booking.dto";
import {DatabaseExceptionFilter, WrongDatesExceptionFilter} from "../../common";

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

    @ApiOperation({ summary: 'Booking auto' })
    @ApiResponse({ status: 201, description: 'True response'})
    @ApiBadRequestResponse({description: 'Something wrong'})
    @ApiBody({ type: BookingDto })
    @Post('/book')
    @UseFilters(new WrongDatesExceptionFilter(), new DatabaseExceptionFilter())
    async bookCar(@Body() bookingDto: BookingDto, @Res() res) {
        await this.testService.getAll();
        res
            .status(HttpStatus.CREATED)
            .json('The auto has been successfully booked.');
    }
}
