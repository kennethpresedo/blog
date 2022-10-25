const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const { membership, price, _id, image } = this.props.gym
        const capitalized = membership[0].toUpperCase() + membership.substring(1)
        return(
        <Default title={`${capitalized} Show Page`} gym={this.props.gym}>

            <p>{price} is {capitalized}</p>
            <img src={`${image}`}></img>
        </Default>
        )
   } 
}

module.exports = Show