import babyNamesData from "./BabyNamesData.json";
import SortAscending from "./Sort";

const babyNames = () => {
  const filteredNames = babyNamesData.sort(SortAscending);
  return (
    <div className="names">
      {filteredNames.map((babyName) => {
        if (babyName.sex === "f") {
          return <span className="f-name"> {babyName.name}</span>;
        } else {
          return <span className="m-name"> {babyName.name}</span>;
        }
      })}
    </div>
  );
};
export default babyNames;
