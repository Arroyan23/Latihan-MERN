// ini untuk melakukan pemanggilan terhadap favian.json

import postData from "../favian.json";

// cek kebenarannya

function Kebenaran(props) {
  // panggil ke dalam functionnya
  return (
    <>
      <p>Ini adalah bagian menunjukan favian</p>
      {/* sudah terhubung ke bagian app.jsx */}
      {/* gunakan propsnya untuk */}
      <h3>
        Nama : {props.nama} ({})
      </h3>
      <p> Hobby : {props.hobby}</p>
      <small>Kasus : {props.kasus.join(", ")}</small>
      <p>Tags : {props.tags}</p>
    </>
  );
}

export default Kebenaran;
