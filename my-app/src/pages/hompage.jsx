//  halaman untuk homepage
import { useState } from "react";
import Article from "../components/kebenaran";
import Search from "../components/search";
import postData from "../favian.json";
function Homepage() {
  const [filtered, setFilter] = useState("");
  const takeSearchValue = (value) => {
    // untuk filter di bagian value dari searchnya itu sendiri
    const filteredJSON = postData.filter((elements) =>
      elements.tags.includes(value)
    );
    setFilter(filteredJSON);
  };
  return (
    <>
      <Search onSetSearch={takeSearchValue} />
      
    </>
  );
}

export default Homepage;
