// logger test is used to id console log output
// filename changed to remove from tests 
// updated during in-class review

const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  test('working as expected', async () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(`Logging request with logger middleware: ${req.method}, ${req.originalUrl}`);
  });
});
