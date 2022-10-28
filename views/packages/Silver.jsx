const React = require('react');
const Default = require('../layouts/Default.jsx')

class Silver extends React.Component {
   
    render(){
        const { imageOne, imageTwo } = this.props
    // console.log(props)
        return(
        <Default title="Silver Membership">

        
            <p> With your monthly $1 you get unlimited access to your local Get-Swole Gym</p>
            <p> Unlimited access to weight area and showers</p>
            <p> Free health drinks at the nutrition bar</p>
            <p> Free protien bar post workout</p>
            <p> Bring anyone and as many guests as you would like</p>
            

            <img src={`${imageOne}`}></img>
            <img src={`${imageTwo}`}></img>

        </Default>
        )
   } 
}

module.exports = Silver