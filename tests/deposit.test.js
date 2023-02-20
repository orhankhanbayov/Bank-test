const Deposit = require('../deposit');

describe('Deposit', () => {
  it('creates an instance of class', () => {
    let deposit = new Deposit('20/02/2023', 500, '');
    expect(deposit.date).toBe('20/02/2023');
    expect(deposit.credit).toBe('500.00');
  });
});
