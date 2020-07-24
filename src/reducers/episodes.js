const episodes = (state = [], action) => {
  switch (action.type) {
    case 'GET EPISODES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default episodes;
