import { AvailableToBookService } from '../service/availableToBook.service';

describe('availableToBookService', () => {
  let availableToBookService: AvailableToBookService;

  const mockData = {
    start: new Date(1627678800000),
    lastBooking: '',
  };

  beforeEach(() => {
    availableToBookService = new AvailableToBookService();
  });

  it('should return true to booking', async () => {
    const res = await availableToBookService.isAutoAvailableToBook(
      mockData.start,
      mockData.lastBooking,
    );
    expect(res).toBeTruthy();
  });
});
