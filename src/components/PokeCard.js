import React from 'react'
import BugLogo from '../assets/types/bug.svg'
import DarkLogo from '../assets/types/dark.svg'
import DragonLogo from '../assets/types/dragon.svg'
import ElectricLogo from '../assets/types/electric.svg'
import FairyLogo from '../assets/types/fairy.svg'
import FightingLogo from '../assets/types/fighting.svg'
import FireyLogo from '../assets/types/fire.svg'
import FlyingLogo from '../assets/types/flying.svg'
import GhostLogo from '../assets/types/ghost.svg'
import GrassLogo from '../assets/types/grass.svg'
import GroundLogo from '../assets/types/ground.svg'
import IceLogo from '../assets/types/ice.svg'
import NormalLogo from '../assets/types/normal.svg'
import PoisonLogo from '../assets/types/poison.svg'
import PsychicLogo from '../assets/types/psychic.svg'
import RockLogo from '../assets/types/rock.svg'
import SteelLogo from '../assets/types/steel.svg'
import WaterLogo from '../assets/types/water.svg'


const PokeCard = ({pokemon}) => {
    return (
      <div className="card text-center mx-auto rounded" style={{"maxWidth" : "18rem"}} key={pokemon.id}>        
        <div className="card-body">          
            <div class="row">
                <div class="col-4">
                    <h1 className="card-subtitle mb-2 text-muted">
                        {pokemon.id}
                    </h1>
                </div>
                <div class="col-8">                    
                    <img src={pokemon.sprites['front_default']} />
                    
                </div>
            </div>  
            <div class="row">
                <div class="col">
                    <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>
                </div>                      
                <div class="col">
                    <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>
                </div>
            </div>        
            <br/>
            <div class="row">
                <div class="col">
                    <h6 className="card-subtitle mb-2 text-muted">Abilities:</h6>
                </div>
            </div>                       
                {
                    pokemon.abilities.map((abilities) => {
                        return<div class="row"> <div class="col"><h6 className="card-subtitle mb-2 text-muted">{abilities.ability.name}</h6></div></div>                       
                    })
                }
        </div>        
        <div className="card-footer card-name">
            <div class="row">
                <div class="col-6">
                    <b>{pokemon.name}</b>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col">
                            {
                                pokemon.types.map((type) => {
                                switch (type['type']['name']) {
                                    case 'bug':
                                    return <img src={BugLogo} alt="Bug" />
                                    case 'dark':
                                        return <img src={DarkLogo}/>
                                    case 'dragon':
                                        return <img src={DragonLogo}/>
                                    case 'electric':
                                        return <img src={ElectricLogo}/>
                                    case 'fairy':
                                        return <img src={FairyLogo}/>
                                    case 'fighting':
                                        return <img src={FightingLogo}/>
                                    case 'fire':
                                        return <img src={FireyLogo}/>
                                    case 'flying':
                                        return <img src={FlyingLogo}/>
                                    case 'ghost':
                                        return <img src={GhostLogo}/>
                                    case 'grass':
                                        return <img src={GrassLogo}/>
                                    case 'ground':
                                        return <img src={GroundLogo}/>
                                    case 'ice':
                                        return <img src={IceLogo}/>
                                    case 'normal':
                                        return <img src={NormalLogo}/>
                                    case 'poison':
                                        return <img src={PoisonLogo}/>
                                    case 'psychic':
                                        return <img src={PsychicLogo}/>
                                    case 'rock':
                                        return <img src={RockLogo}/>
                                    case 'steel':
                                        return <img src={SteelLogo}/>
                                    case 'water':
                                        return <img src={WaterLogo}/>
                                    
                                    default:
                                    console.log(`type not found ${type}.`);
                                }
                                })
                            }  
                        </div>
                    </div>
                </div>
            </div>   
        </div>
      </div>
    )
};



export default PokeCard