const React = require('react')
const Default = require('../layout/Default.jsx')

function New (props) {
    return(
        <Default title={`${props.fruit.title}`}>
            <div>
                <h1>New Fruit Page</h1>
                <a href='/fruits'>Go back to Index Page</a>
                <form action="/fruits" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Color: <input type="text" name="color" /><br/>
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                    <input type="submit" value="Create Fruit" />
                </form>
            </div>
        </Default>
    )
}

module.exports = New
