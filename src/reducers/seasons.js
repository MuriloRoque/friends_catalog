const seasons = (state = [], action) => {
  switch (action.type) {
    case 'GET SEASONS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default seasons;
