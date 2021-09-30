import { useState, useEffect } from "react";
import axios from "axios";
import Container from "./components/Container";
import Card from "./components/Card";
import List from "./components/List";

import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        console.log(res.data);
        setCoins(res.data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  const inputChangeHandler = (e) => {
    setSearch(e.target.value);
  }

  const filterCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <h1>
            Search Coins
          </h1>
          <input onChange={inputChangeHandler} type="text" placeholder="Search your coins..." />
        </Card>
        {filterCoins.map(coin => {
          return (
            <List key={coin.id} image={coin.image} name={coin.id} price={coin.current_price} />
          )
        })}
      </Container>
    </>
  );
}

export default App;
