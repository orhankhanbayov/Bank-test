const Withdrawl = require('../withdrawl');

describe('Deposit', () => {
  it('creates an instance of class', () => {
    let withdraw = new Withdrawl('20/02/2023', 500);
    expect(withdraw.date).toBe('20/02/2023');
    expect(withdraw.debit).toBe(500);
  });
});
