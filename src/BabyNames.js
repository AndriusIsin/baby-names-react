import { useState } from "react";
import babyNamesData from "./BabyNamesData.json";
import SortAscending from "./Sort";

const babyNames = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <input
        type="text"
        id="baby-search"
        key="search-bar"
        className="form-control"
        placeholder="Baby name..."
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <div className="names">
        {babyNamesData
          .filter((baby) => {
            if (keyword === "") {
              return baby;
            } else if (
              baby.name.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return baby;
            }
          })
          .sort(SortAscending)
          .map((babyName) => {
            if (babyName.sex === "f") {
              return <span className="f-name"> {babyName.name}</span>;
            } else {
              return <span className="m-name"> {babyName.name}</span>;
            }
          })}
      </div>
    </>
  );
};
export default babyNames;
