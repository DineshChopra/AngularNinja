import { NumberToArrayPipe } from './number-to-array.pipe';

describe('NumberToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToArrayPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(2, [])).toEqual([1, 2]);
    expect(pipe.transform(5, [])).toEqual([1, 2, 3, 4, 5]);
  });
});
