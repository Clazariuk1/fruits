const React = require('react')
const Default = require('../layout/Default.jsx')

function Index (props) {
    return (
        <Default>
            <div>
                <h1>Fruits Index Page</h1>
                <a href="/fruits/new">Create a new Fruit Here</a>
                <ul>
                    {
                        props.fruits.map((fruit) => {
                            return (
                                <li key={fruit._id}>
                                    <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Default>
   )
}

module.exports = Index
