import episodesFilter from '../../reducers/season';

describe('episodes reducer', () => {
  test('should return the initial state', () => {
    expect(episodesFilter(undefined, {})).toEqual('All');
  });

  test('should handle CHANGE_FILTER', () => {
    expect(
      episodesFilter('All', {
        type: 'CHANGE_FILTER',
        season: '2',
      }),
    ).toEqual(
      '2',
    );

    expect(
      episodesFilter(
        '3',
        {
          type: 'CHANGE_FILTER',
          season: '6',
        },
      ),
    ).toEqual(
      '6',
    );
  });
});