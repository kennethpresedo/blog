const React = require('react');
const Default = require('../layouts/Default.jsx')

class Elite extends React.Component {
   
    render(){

    
        return(
            <Default title="Elite Membership">
    
            
                <p> With your monthly $3 you get unlimited access to any Get-Swole Gym in the world</p>
                <p> All perks included in the Silver and Gold memberships</p>
                <p> Unlimted acess to the cycling room with the huge screen</p>
                <p> Unlimted access to the pool</p>
                <p> 30 personal training sessions by any member of the staff</p>
                
    
                {/* <img src={`${imageOne}`}></img>
                <img src={`${imageTwo}`}></img> */}
    
            </Default>
            )
   } 
}

module.exports = Elite