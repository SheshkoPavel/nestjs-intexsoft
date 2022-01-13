import { IsWeekend } from '../isWeekend';

describe('isWeekend', () => {
  let isWeekend: IsWeekend;

  const mockData = {
    propertyValue: '2021-08-13',
  };

  beforeEach(() => {
    isWeekend = new IsWeekend();
  });

  it('should return true if time of start or time of end are not weekend ', async () => {
    const res = await isWeekend.validate(
        mockData.propertyValue,
    );
    expect(res).toBeTruthy();
  });
});
