import React from 'react';
import {Component} from 'react';
import "./App.css"
import Header from './components/Header'
import PokeCard from './components/PokeCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
      offset: 0,
      loadNumber: 24,
      defaultSelectText: [{ id: 1, name: 'Primeira Geração'}],
      generationList : [
        { id: 1, name: 'Primeira Geração'},
        { id: 152, name: 'Segunda Geração'},
        { id: 252, name: 'Terceira Geração'},
        { id: 387, name: 'Quarta Geração'},
        { id: 494, name: 'Quinta Geração'},
        { id: 650, name: 'Sexta Geração'},
        { id: 722, name: 'Setima Geração'},
        { id: 810, name: 'Oitava Geração'}        
      ],
      generationNumber: 0
    }
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  getNextOffset() {
    return this.state.offset + this.state.loadNumber;
  }

  getGeneration() {
    return this.state.generationNumber;
  }


  handleMoreClick(event) {
    const newOffset = this.getNextOffset();
    this.setState({offset: newOffset}, () => {
      console.log("Offset: " + this.state.offset)
      this.getMorePokemon();
    });    
  }

  selectGeneration(event) {
    let aux = document.getElementById("selectGeneration");
    console.log(aux.value);
    const newGeneration = aux.value;
    this.setState({offset: newGeneration}, () => {
      console.log("Offset: " + this.state.offset)
      this.getMorePokemon();
    });    
  }
  
  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?" + 
              "&offset=" + this.state.offset + 
              "&limit=" + this.state.loadNumber;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results})

        this.state.pokemons.map(pokemon => {
          fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            if (data) {
              var temp = this.state.pokemonDetails
              temp.push(data)
              this.setState({pokemonDetails: temp})
            }            
          })
          .catch(console.log)
        })
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemonDetails,  generationList} = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      console.log(pokemon)
      return (<PokeCard pokemon={pokemon} />);
    });

    return (
      <div>
        <Header />
        <div class="container">
          <div class="row justify-content-md-center">     
            <div class="input-group">
              <select class="custom-select" id="selectGeneration" aria-label="Example select with button addon">                
                  {generationList.map(generation => {
                    return (
                      <option 
                        value={generation.id}>
                              {generation.name}
                      </option>                    
                    );
                  })}
              </select>
              <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" onClick={this.selectGeneration}>Buscar</button>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
            <div className="card-columns">            
              {renderedPokemonList}
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2">
            <button type="button" className="btn btn-danger btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More Pokemon</button> 
            </div>            
          </div>          
        </div>    
        <br/>
        <footer class="footer">
          <div class="container">
            <span class="text-muted">Gabriel Jaques Couto</span>
          </div>
        </footer>    
      </div>
      
    );
  }
}

export default App;
