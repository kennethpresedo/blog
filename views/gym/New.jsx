const React = require('react');
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="New Membership">
            <form method="POST" action="/gym">
                Membership: <input type="text" name="name" placeholder='Name of Package'></input><br/>
                Price: <input type="text" name="type" placeholder='Price of Package'></input><br/>
                image: <input type="text" name="image" placeholder='Image'></input><br/><br />
                <input type="submit" value="Create a Package"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New