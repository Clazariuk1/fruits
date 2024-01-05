const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

// const redDivStyle = {
//     backgroundColor: 'red'
// }

// class Page extends React.Component {
//     render(){
//         return(
//             <div style={redDivStyle}>Red Div</div>
//         )
//     }
// }

// <div className='classNameHere'>You Have To say className instead of class </div>


module.exports = DefaultLayout
