const SortAscending = (babyName1, babyName2) => {
  if (babyName1.name < babyName2.name) {
    return -1;
  } else if (babyName1.name > babyName2.name) {
    return 1;
  } else {
    return 0;
  }
};
export default SortAscending;
