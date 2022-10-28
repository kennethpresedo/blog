const React = require('react');
const Default = require('../layouts/Default.jsx')

class Gold extends React.Component {
    render(){
        return (
            <Default title="New Membership">
            <form method="POST" action="/gym/silver">
                qrCode: <input type="text" name="qrCode" placeholder='code'></input><br/>
                <input type="submit" value="Continue"></input>
            </form>
            </Default>
        )
    }
}

module.exports = Gold