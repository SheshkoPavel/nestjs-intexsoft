import {IsBeforeConstraint} from '../isbefore.constraint';

describe('isBeforeConstraint', () => {
  let isBeforeConstraint: IsBeforeConstraint;

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
    isBeforeConstraint = new IsBeforeConstraint();
  });

  it('should return true if start date of booking after last booking end date', async () => {
    const res = await isBeforeConstraint.validate(
        mockData.propertyValue,
        mockData.args,
    );
    expect(res).toBeTruthy();
  });
});
