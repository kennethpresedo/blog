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
                        <a href="/gym">Go to Home Page For Packages</a><br />
                        <a href="/gym/new">Select New Package</a><br />
                        { gym? <a href={`/gym/${gym._id}/edit`}> {gym.membership} Edit Page </a> : ''}<br />
                        { gym? <a href={`/gym/${gym._id}`}>{gym.membership} Show Page</a> : ''}<br />
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