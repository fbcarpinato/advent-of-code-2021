import solve from './day-1';

describe('day 1', () => {
  it('test case 1', () => {
    expect(solve('./test-cases/test-case-1.txt')).toBe(4);
  });

  it('test case 2', () => {
    expect(solve('./test-cases/test-case-2.txt')).toBe(1);
  });
});
