import episodeFilter from '../../reducers/episode';

describe('episode reducer', () => {
  test('should return the initial state', () => {
    expect(episodeFilter(undefined, {})).toEqual('');
  });

  test('should handle CHANGE_EPISODE', () => {
    expect(
      episodeFilter('', {
        type: 'CHANGE_EPISODE',
        id: '25',
      }),
    ).toEqual(
      '25',
    );
  });
});