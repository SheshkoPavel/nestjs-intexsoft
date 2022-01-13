import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import  { MILLISECONDS_IN_DAY }  from '../index';

@ValidatorConstraint({ name: 'isLessThanMonth', async: false })
export class IsLowerMonthConstraint implements ValidatorConstraintInterface {
  validate(propertyValue: string, args: ValidationArguments) {
    const first = new Date(propertyValue);
    const second = new Date(args.object[args.constraints[0]]);
    const days =
      (second.getTime() - first.getTime()) / MILLISECONDS_IN_DAY;
    return days <= 30;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Booking must be no more than 30 days';
  }
}
