const React = require('react');
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="New Membership">
            <form method="POST" action="/gym">
                membership: <input type="text" name="membership" placeholder='Name of Package'></input><br/>
                price: <input type="text" name="price" placeholder='Price of Package'></input><br/>
                imageOne: <input type="text" name="imageOne" placeholder='ImageOne'></input><br/>
                imageTwo: <input type="text" name="imageTwo" placeholder='ImageTwo'></input><br/><br />
                perkOne: <input type="text" name="p1" placeholder='Perk'></input><br/>
                perkTwo: <input type="text" name="p2" placeholder='Perk'></input><br/>
                perkThree: <input type="text" name="p3" placeholder='Perk'></input><br/>
                perkFour: <input type="text" name="p4" placeholder='Perk'></input><br/>
                perkFive: <input type="text" name="p5" placeholder='Perk'></input><br/>
                <input type="submit" value="Continue"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New