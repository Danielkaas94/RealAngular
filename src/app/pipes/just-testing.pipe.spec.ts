import { JustTestingPipe } from './just-testing.pipe';

describe('JustTestingPipe', () => {
  it('create an instance', () => {
    const pipe = new JustTestingPipe();
    expect(pipe).toBeTruthy();
  });
});
