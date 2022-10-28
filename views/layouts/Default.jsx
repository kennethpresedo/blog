const React = require('react');

class Default extends React.Component {
    render(){
        const {gym, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"></link>   
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/gym">   Memberships   </a>  | 
                        <a href="/user/login">   Log In   </a>  | 
                        <a href="/user/signup">   Sign Up   </a>
                        {/* <a href="/user/logout"><button>Logout</button></a> */}
                        {/* <a href="/gym/new">Select New Package</a><br /> */}
                        {/* { gym ? <a href={`/gym/${gym._id}/edit`}> {gym.membership} Edit Page </a> : ''} */}
                        {/* { gym ? <a href={`/gym/${gym._id}`}>{gym.membership} Show Page</a> : ''} */}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default