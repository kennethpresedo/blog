const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render() {
        const { gym } = this.props
        return(
            <Default title="Welcome">
                <nav>
                    <a href="/gym/new">Sign up!</a>
                </nav>
                <ul>
                    {
                        gym.map((gym) => {
                            const { membership, price, image } = gym
                            return (
                                <li key={gym._id}>
                                    <a href={`/gym/${gym._id}`}>
                                         {membership}</a><br /><br /> is {price}

                                    <br />
                                    
                                    <img src={`${image}`}></img>
                                    

                                    <br />
                                    <form method="POST" action={`/gym/${gym._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${price} ${membership}`} />
                                    </form>
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