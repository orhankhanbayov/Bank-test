const Transaction = require('../transaction');

describe('Transaction', () => {
  it('creates an instance of class', () => {
    let deposit = new Transaction('20/02/2023', 500, '');
    expect(deposit.date).toBe('20/02/2023');
    expect(deposit.credit).toBe(500);
    expect(deposit.debit).toBe('');
  });
});
