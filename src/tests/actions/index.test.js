import { filterEpisode, filterEpisodes } from '../../actions/index';

describe('actions', () => {
  test('should create an action to filter episodes', () => {
    const season = '1';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      season,
    };
    expect(filterEpisodes(season)).toEqual(expectedAction);
  });

  test('should create an action to filter one episode', () => {
    const id = '521';
    const expectedAction = {
      type: 'CHANGE_EPISODE',
      id,
    };
    expect(filterEpisode(id)).toEqual(expectedAction);
  });
});