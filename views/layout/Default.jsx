const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <Default title={`${props.fruits.title}`}>
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
            </Default>
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
