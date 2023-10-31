import { DateTransformPipe } from './date-transform.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DateTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
