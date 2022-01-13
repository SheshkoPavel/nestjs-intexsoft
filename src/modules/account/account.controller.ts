import {Controller, Get, Query, UseFilters} from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResponseDto } from './dto/accountResponse.dto';
import { DatabaseExceptionFilter } from '../../common/filters';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from "@nestjs/swagger";

@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({ summary: 'Get load information by auto id' })
  @ApiResponse({
    status: 200,
    description: 'Get load information auto',
    type: AccountResponseDto,
    isArray: true
  })
  @ApiBadRequestResponse({description: 'Something wrong'})
  @ApiQuery({name: 'id', description: 'Auto id. *For example `1`*'})
  @Get('/:id')
  @UseFilters(new DatabaseExceptionFilter())
  async getAccountById(
    @Query('id') autoId: number,
  ): Promise<AccountResponseDto[]> {
    return this.accountService.getAccountById(autoId);
  }

  @ApiOperation({ summary: 'Get load information by auto id' })
  @ApiResponse({
    status: 201,
    description: 'Get load information all autos',
    type: AccountResponseDto,
    isArray: true
  })
  @ApiBadRequestResponse({description: 'Something wrong'})
  @Get()
  @UseFilters(new DatabaseExceptionFilter())
  async getAccountAllCars(): Promise<AccountResponseDto[]> {
    return this.accountService.getAccountAllCars();
  }
}
