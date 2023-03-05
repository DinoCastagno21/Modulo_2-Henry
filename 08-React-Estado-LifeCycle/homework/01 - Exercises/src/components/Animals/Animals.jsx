import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)
    // console.log(animales);
  } 
  render () {
    const animales = this.props.animals;
    return (
      <div>
        {
          animales.map((animal) => 
          <div key={animal.name}>
          <h5>{animal.name}</h5>
          <img src={animal.image} alt={animal.name} width="300px"/>
          <br/>
          <span>{animal.specie}</span>
          </div> 
          )
        }
      </div>
  )}
}
