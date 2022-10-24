const React = require('react');
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render() {
        const { membership, _id, price, image } = this.props.gym
        return (
            <Default title={`${membership} Edit Page`} gym={this.props.gym}>
                <form method="POST" action={`/gym/${_id}?_method=PUT`}>
                    Membership : <input type="text" name="membership" defaultValue={membership}></input><br />
                    Price: <input type="text" name="type" defaultValue={price}></input><br />
                    image: <input type="text" name="image" placeholder={image}></input><br /><br />
                    <input type="submit" value="Edit membership
    " />
                </form>
            </Default>
        )
    }
}

module.exports = Edit