const Deposit = require('../deposit');
jest.useFakeTimers().setSystemTime(new Date('2023-02-21'));

describe('Deposit', () => {
  it('creates an instance of class', () => {
    let deposit = new Deposit(500);
    expect(deposit.date).toBe('21/02/2023');
    expect(deposit.credit).toBe('500.00');
  });
});
