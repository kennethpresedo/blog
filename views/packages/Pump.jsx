const React = require('react');
const Default = require('../layouts/Default.jsx')
const random = Math.floor(Math.random() * 5000) + 1000;

class Pump extends React.Component {

    render() {
        // const { image } = this.props.pump
        return (
            <Default title="Thanks for your purchase">

                <p> Come in today!<br />
                    Your Swole ID is {random}<br />

                </p>
                {/* <img src={`${image}`}></img> */}
                <div>

                </div>
            </Default>
        )
    }
}

module.exports = Pump