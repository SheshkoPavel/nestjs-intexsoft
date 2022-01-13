import { MILLISECONDS_IN_DAY } from '../../../common';

export class AvailableToBookService {
  public isAutoAvailableToBook(start: Date, lastBooking: string): boolean {
    if (!lastBooking) return true;

    const lastEndDate = new Date(lastBooking);
    const days =
      (start.getTime() - lastEndDate.getTime()) / MILLISECONDS_IN_DAY;

    return days >= 3;
  }
}
