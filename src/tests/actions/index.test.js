import { filterEpisodes } from '../../actions/index';

describe('actions', () => {
  test('should create an action to filter episodes', () => {
    const season = '1';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      season,
    };
    expect(filterEpisodes(season)).toEqual(expectedAction);
  });
});
