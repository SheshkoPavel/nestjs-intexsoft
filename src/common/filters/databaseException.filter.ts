import { Catch } from '@nestjs/common';
import { DatabaseException } from '../exceptions';
import { RootExceptionFilter } from "./rootException.filter";

@Catch(DatabaseException)
export class DatabaseExceptionFilter extends RootExceptionFilter<DatabaseException> {}
