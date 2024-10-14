// untuk fungsi pencarian sederhana

import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const cetakInput = (event) => {
    setSearch(event.target.value);
    props.onSetSearch(search);
  };
  return (
    <>
      <label htmlFor="">Cari Kata Kunci</label>
      <input onChange={cetakInput}></input>
      <p>Kata yang anda cari adalah : {search}</p>
    </>
  );
}

export default Search;
