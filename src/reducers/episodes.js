const episodes = (state = [], action) => {
  switch (action.type) {
    case 'GET EPISODES':
      return [...action.data];
    default:
      return state;
  }
};

export default episodes;
