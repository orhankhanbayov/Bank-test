const Withdrawl = require('../withdrawl');
jest.useFakeTimers().setSystemTime(new Date('2023-02-21'));

describe('Deposit', () => {
  it('creates an instance of class', () => {
    let withdraw = new Withdrawl(500);
    expect(withdraw.date).toBe('21/02/2023');
    expect(withdraw.debit).toBe('500.00');
  });
});
