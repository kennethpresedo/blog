const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {

    render() {
        const { membership, price, _id, imageOne, imageTwo, p1, p2, p3, p4, p5 } = this.props.gym
        const capitalized = membership[0].toUpperCase() + membership.substring(1)
        return (
            <Default title={`${capitalized} Package`} gym={this.props.gym}>

                <p>
                    {p1}<br />
                    {p2}<br />
                    {p3}<br />
                    {p4}<br />
                    {p5}<br />
                </p>
                <img src={`${imageOne}`}></img>
                <img src={`${imageTwo}`}></img>

            </Default>
        )
    }
}

module.exports = Show