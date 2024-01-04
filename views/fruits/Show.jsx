// Practice destructuring by adjusting this page to be like the Edit.jsx page
// You MUST locate the layout folder within the VIEWS folder

const React = require('react')
const Default = require('../layout/Default.jsx')

function Show(props) {
    return(
        <Default title={`${props.fruit.title}`}>
            <div>
                <h1>{props.fruit.name}</h1>
                <a href='/fruits'>Go back to Index Page</a>
                <p>
                    The {props.fruit.name} is {props.fruit.color} and {props.fruit.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
                </p>
                <form action={`/fruits/${props.fruit._id}?_method=DELETE`} method="POST">
                    <input type="submit" value={`Delete this ${props.fruit.name}`} />
                </form>
                <div>
                    <a href={`/fruits/${props.fruit._id}/edit`}><button>{`Edit this ${props.fruit.name}`}</button></a>
                </div>
            </div>
        </Default>
    )
}

module.exports = Show
