const episodes = (state = [], action) => {
  switch (action.type) {
    case 'GET EPISODES':
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default episodes;
