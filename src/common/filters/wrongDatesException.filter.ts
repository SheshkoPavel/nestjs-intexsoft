import { Catch } from '@nestjs/common';
import { WrongDatesException } from '../exceptions';
import { RootExceptionFilter } from "./rootException.filter";

@Catch(WrongDatesException)
export class WrongDatesExceptionFilter extends RootExceptionFilter<WrongDatesException> {}
