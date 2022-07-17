import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import "./App.css";
import logo from "./statics/logo.svg";
import { useEffect, useState } from "react";
import { getPokemon } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      console.log(pokemonRes);
      setPokemons(pokemonRes);
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
