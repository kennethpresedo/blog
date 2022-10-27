const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render() {
        const { gym } = this.props
        return(
            <Default title="Get-Swole Gym">
                <nav>
                    {/* <a href="/gym/new">Sign up!</a> */}
                </nav>
                <ul>
                    {
                        gym.map((gym) => {
                            const { membership, price, imageOne, imageTwo } = gym
                            return (
                                <li key={gym._id}>
                                    <a href={`/gym/${gym._id}`}>
                                         {membership}</a><br /><br /> {price}

                                    <br />
                                    
                                    <img src={`${imageOne}`}></img>
                                    {/* <img src={`${imageTwo}`}></img> */}
                                    
                                    <br />
                                    {/* <form method="POST" action={`/gym/${gym._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${price} ${membership}`} />
                                    </form> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index