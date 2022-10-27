const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const { membership, price, _id, imageOne, imageTwo } = this.props.gym
        const capitalized = membership[0].toUpperCase() + membership.substring(1)
        return(
        <Default title={`${capitalized} Package`} gym={this.props.gym}>

            {/* <p>{capitalized} is {price}</p> */}
            <p> With your monthly $1 you get unlimited access to this club, </p>
            <img src={`${imageOne}`}></img>
            <img src={`${imageTwo}`}></img>
        </Default>
        )
   } 
}

module.exports = Show