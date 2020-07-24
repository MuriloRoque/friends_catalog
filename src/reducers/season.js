const episodesFilter = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.season;
    default:
      return state;
  }
};

export default episodesFilter;
