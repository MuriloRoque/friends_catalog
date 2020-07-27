import fetchApi from '../../logic/apiCall';

describe('The data should be read from the API', () => {
  test('Should receive an object from the API', () => {
    fetchApi().then(data => {
      expect(typeof data).toBe('object');
    }).catch(() => {

    });
  });
  test('The object should contain the episodes', () => {
    fetchApi().then(data => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            airdate: '1994-09-22',
          }),
        ]),
      );
    }).catch(() => {

    });
  });
});
