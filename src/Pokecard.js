import React, { Component } from 'react'
const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        const imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div>
                <img src={imgSrc} alt={this.props.name}/>
                <h1>{this.props.name}</h1>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard