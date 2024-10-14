//  halaman untuk homepage
import { useState } from "react";
import Kebenaran from "../components/kebenaran";
import Search from "../components/search";
import postData from "../favian.json";
function Homepage() {
  const [filtered, setFilter] = useState(postData);
  // menghitung berapa banyak data yang ditemukan
  const [countData, setCountData] = useState(0);
  const takeSearchValue = (value) => {
    // untuk filter di bagian value dari searchnya itu sendiri
    const filteredJSON = postData.filter((e) => e.tags.includes(value));
    setFilter(filteredJSON);
    setCountData(filteredJSON.length);
  };
  return (
    <>
      <Search onSetSearch={takeSearchValue} countFindedData={countData} />
      {filtered.map((elements) => {
        // jangan lupa untuk me return valuenya agar terlihat ke dalam monitoring
        // layarnya itu sendiri
        return (
          <>
            <Kebenaran
              nama={elements.nama}
              hobby={elements.hobby}
              kasus={elements.kasus}
              tags={elements.tags}
            />
          </>
        );
      })}
    </>
  );
}

export default Homepage;
