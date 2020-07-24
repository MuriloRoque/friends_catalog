const episodeFilter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_EPISODE':
      return action.id;
    default:
      return state;
  }
};

export default episodeFilter;
