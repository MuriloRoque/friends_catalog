import episodes from '../../reducers/episodes';

describe('episodes reducer', () => {
  const data = [{
    id: 40646,
    url: 'http://www.tvmaze.com/episodes/40646/friends-1x01-the-one-where-monica-gets-a-roommate',
    name: 'The One Where Monica Gets a Roommate',
    season: 1,
    number: 1,
    airdate: '1994-09-22',
    airtime: '20:00',
    airstamp: '1994-09-23T00:00:00+00:00',
    runtime: 30,
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/229/572688.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/229/572688.jpg',
    },
    summary: "<p>Monica's old friend Rachel moves in with her after leaving her fiancé.</p>",
    _links: { self: { href: 'http://api.tvmaze.com/episodes/40646' } },
  }];

  test('should return the initial state', () => {
    expect(episodes(undefined, {})).toEqual([]);
  });

  test('should handle GET EPISODES', () => {
    expect(
      episodes([], {
        type: 'GET EPISODES',
        data,
      }),
    ).toEqual(
      data,
    );

    expect(
      episodes(
        data,
        {
          type: 'GET EPISODES',
          data,
        },
      ),
    ).toEqual(
      [...data, ...data],
    );
  });
});
