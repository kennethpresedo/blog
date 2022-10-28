const React = require('react');
const Default = require('../layouts/Default.jsx')

class Silver extends React.Component {

    render() {
        const { qrCode } = this.props.pump
        return (
            <Default title={pump}>

                <img src={`${qr}`}></img>
            
            </Default>
        )
    }
}

module.exports = Silver