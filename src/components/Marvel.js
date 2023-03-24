import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';

function Marvel() {
  const { id } = useParams();
  const [item, setItem] = useState()

  const fetch = async () => {
    const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=27a3f3616e3c1b8ee20eafab41799f9b&hash=24f6f70e203a0bace09dd5b2876f3b1e`)
    setItem(res.data.data.results[0])
    console.log(res.data.data.results[0])
  }
  fetch();

  return (
    <>
      {
        (!item) ? "" : (
          <div className="box-content">
            <div className="right-box">
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            </div>
            <div className="left-box">
              <h1>{item.name}</h1>
              <h4>{item.description}</h4>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Marvel