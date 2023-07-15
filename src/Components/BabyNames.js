import { useState } from "react";
import babyNamesData from "./BabyNamesData.json";
import FavoriteList from "./FavoriteList";
import MainNameList from "./MainNameList";
import InputNames from "./InputNames";

const BabyNames = () => {
  const [keyword, setKeyword] = useState("");
  const [isGender, setIsGender] = useState(false);
  const [favoriteBabyList, setFavoriteBabyList] = useState([]);
  const [mainBabyList, setMainBabyList] = useState(babyNamesData);
  const [filterGender, setFilterGender] = useState(babyNamesData);
  const addToFavorite = (babyName) => {
    setFavoriteBabyList([...favoriteBabyList, babyName]);
    setMainBabyList(mainBabyList.filter((baby) => baby.name !== babyName.name));
  };
  const deleteFromFavorite = (babyName) => {
    setMainBabyList([...mainBabyList, babyName]);
    setFavoriteBabyList(
      favoriteBabyList.filter((baby) => baby.name !== babyName.name)
    );
  };
  const genderChange = (gender) => {
    setIsGender(true);
    {
      setFilterGender(
        mainBabyList.filter((babyName) => babyName.sex === gender)
      );
    }
  };
  return (
    <>
      <InputNames setKeyword={setKeyword} />
      <span>
        <button
          onClick={() => {
            setIsGender(false);
          }}
        >
          All genders
        </button>
        <button
          onClick={() => {
            genderChange("m");
          }}
        >
          Male
        </button>
        <button
          onClick={() => {
            genderChange("f");
          }}
        >
          Female
        </button>
      </span>
      <FavoriteList
        favoriteBabyList={favoriteBabyList}
        deleteFromFavorite={deleteFromFavorite}
      />
      <MainNameList
        babyNamesData={!isGender ? mainBabyList : filterGender}
        keyword={keyword}
        addToFavorite={addToFavorite}
      />
    </>
  );
};
export default BabyNames;
