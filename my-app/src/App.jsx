import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./components/kebenaran";
import Homepage from "./pages/hompage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Membuat Artikel Sederhana</h1>
      {/* taro artikelnya dibagian sini */}

      <Homepage />
    </>
  );
}

export default App;
