const seasons = (state = [], action) => {
  switch (action.type) {
    case 'GET SEASONS':
      return [...state, ...action.payload];
    default:
      console.log(state)
      return state;
  }
};

export default seasons;