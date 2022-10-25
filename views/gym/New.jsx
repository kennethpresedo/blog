const React = require('react');
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="New Membership">
            <form method="POST" action="/gym">
                membership: <input type="text" name="membership" placeholder='Name of Package'></input><br/>
                price: <input type="text" name="price" placeholder='Price of Package'></input><br/>
                image: <input type="text" name="image" placeholder='Image'></input><br/><br />
                <input type="submit" value="Continue"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New