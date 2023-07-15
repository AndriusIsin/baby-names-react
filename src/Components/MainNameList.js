import SortAscending from "./Sort";
const MainNameList = ({ babyNamesData, keyword, addToFavorite }) => {
  return (
    <div className="names">
      {babyNamesData
        .filter((baby) => {
          if (keyword === "") {
            return baby;
          } else if (baby.name.toLowerCase().includes(keyword.toLowerCase())) {
            return baby;
          }
        })
        .sort(SortAscending)
        .map((babyName) => {
          return (
            <span
              onClick={() => {
                addToFavorite(babyName);
              }}
              className={babyName.sex === "f" ? "f-name" : "m-name"}
            >
              {babyName.name}
            </span>
          );
        })}
    </div>
  );
};
export default MainNameList;
