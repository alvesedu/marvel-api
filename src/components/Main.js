import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "./styles.css"
import axios from "axios";
import Bg from "./Image/bg.jpg"
import Logo from "./Image/logo.png"

function Main() {

  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=27a3f3616e3c1b8ee20eafab41799f9b&hash=24f6f70e203a0bace09dd5b2876f3b1e"
  );
  const [myItem, setMyItem] = useState([])
  const [search, setSearch] = useState("");

  async function getApiMarvel() {
    const response = await axios.get(url)
    setMyItem(response.data.data.results);
    console.log(response.data.data.results);
  }

  useEffect(() => {
    getApiMarvel()
  }, [url]);

  const searchMarvel = () => {
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=27a3f3616e3c1b8ee20eafab41799f9b&hash=24f6f70e203a0bace09dd5b2876f3b1e`)
  }


  return (
    <div>
      <>
        <div className="header">
          <div className="bg">
            <img src={Bg} alt="" />
          </div>
          <div className="search-bar">
            <img src={Logo} alt="logo" />
            <input type="search" placeholder='Pesquise aqui'
              className='search'
              onChange={e => setSearch(e.target.value)}
              onKeyPress={searchMarvel}
            />
          </div>
        </div>
        <div className="content">

          {
            (!myItem) ? <p>Nenhum resultado encontrado</p> : <Card data={myItem} />
          }
        </div>
      </>
    </div>
  );
}

export default Main;