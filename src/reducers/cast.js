const cast = (state = [], action) => {
  switch (action.type) {
    case 'GET CAST':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default cast;
