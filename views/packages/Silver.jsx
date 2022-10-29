const React = require('react');
const Default = require('../layouts/Default.jsx')

class Silver extends React.Component {

    render() {
        const { pump } = this.props
        // const { image } = this.props.pump
    
        return (
            <Default title="Silver">

                {/* <img src={`${image}`}></img> */}
            
            </Default>
        )
    }

}

module.exports = Silver