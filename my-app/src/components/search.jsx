// untuk fungsi pencarian sederhana

import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const cetakInput = (event) => {
    // yang fungsi ini untuk meng set value pada search sehingga ketauan
    // apa yang dituliskan pada user pada tag html
    setSearch(event.target.value);
  };

  const cariReturnTombol = () => {
    // karena yang ini bagian untuk mengembalikan ke nilai pada tag html tersebut
    // maka yang tombol akan melakukan pengembalian pada props yang ada
    // pada tag html tersebut
    props.onSetSearch(search);
  };
  // coba menggunakan dia baru beraksi ketika tombolnya di klik
  // lalu dia baru melakukan aksinya
  return (
    <>
      Cari kata kunci : <input onChange={cetakInput}></input>
      <button onClick={cariReturnTombol}>Cari Kata Kunci</button>
      <p>
        Data yang Ditemukan : {props.countFindedData}, Kata yang anda cari
        adalah : {search}
      </p>
    </>
  );
}

export default Search;
