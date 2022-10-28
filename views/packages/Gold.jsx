const React = require('react');
const Default = require('../layouts/Default.jsx')

class Gold extends React.Component {
   
    render(){
        // const { imageOne, imageTwo } = this.props
    // console.log(props)
        return(
        <Default title="Gold Membership">

        
            <p> With your monthly $2 you get unlimited access to your local Get-Swole Gym</p>
            <p> All perks included in the Silver memberships</p>
            <p> Unlimited access to pilates studio </p>
            <p> 15 personal training sessions with our staff</p>
           
            

            {/* <img src={`${imageOne}`}></img>
            <img src={`${imageTwo}`}></img> */}

        </Default>
        )
   } 
}

module.exports = Gold