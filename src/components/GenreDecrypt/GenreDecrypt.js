import { getGenreNames } from "../../services/util/popmovies";
import GenreFilterBar from "./GenreFilterBar";
import { useState, useEffect } from "react";

const GenreDecrypt = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSet, setDataSet] = useState([]);

  async function getGenreHandler() {
    setIsLoading(true);

    try {
      const data = await getGenreNames();
      setDataSet(data);
    } catch {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getGenreHandler();
  }, []);

  const selectHandler = (selectedGenreFromGenreFilter) => {
    props.onSelect(selectedGenreFromGenreFilter);
    console.log("calistimm !:) " + selectedGenreFromGenreFilter);
  };
  const genreListForDropDown = [];
  dataSet.forEach((element) => {
    let dummyid = element.id;
    let dummyname = element.name;
    genreListForDropDown.push({ value: dummyid, label: dummyname });
  });

  return (
    <GenreFilterBar onSelect={selectHandler} genres={genreListForDropDown} />
  );
};

export default GenreDecrypt;
