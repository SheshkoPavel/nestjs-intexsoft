import { IsLowerMonthConstraint } from '../isLowerMonth.constraint';

describe('isLowerMonthConstraint', () => {
  let isLowerMonthConstraint: IsLowerMonthConstraint;

  const mockData = {
    propertyValue: '2021-08-16',
    args: {
      targetName: 'BookingDto',
      property: 'startDate',
      object: {
        startDate: '2021-08-16',
        endDate: '2021-08-17',
        rateId: 1,
        autoId: 1
      },
      value: '2021-08-16',
      constraints: ['endDate']
    },
  };

  beforeEach(() => {
    isLowerMonthConstraint = new IsLowerMonthConstraint();
  });

  it('should return true if booking time less then 30 days', async () => {
    const res = await isLowerMonthConstraint.validate(
        mockData.propertyValue,
        mockData.args,
    );
    expect(res).toBeTruthy();
  });
});
