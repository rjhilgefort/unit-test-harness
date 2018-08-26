import format from './format';

it('fills in curlies on string', () => {
  expect(format('foo_{}_baz', 'bar')).toEqual('foo_bar_baz');
});

it('fills in values from object keys', () => {
  expect(format('foo_{bar}_{baz}', { bar: 'bar', baz: 'baz' })).toEqual(
    'foo_bar_baz',
  );
});
