function CustomMappings() {

    // datastructure 1
    const array = ['carrot', 'apple', 'orange', 'grape', 'cherry', 'tangerine', 'grapefruit']

    // datastructure 2
    const object = {
        red: 120, 
        blue: 55, 
        green: 90,
    }

    return (
        <div>
            <h1>Array</h1>
            <ul>
                {array.map(i => ( 
                    <li key={i}>{i}</li>
                ))}
            </ul>

            <h1>Object</h1>
            <ul>
                {Object.keys(object).map(i => (
                    <li key={i}>
                        <b>{i}:</b>
                        {object[i]}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CustomMappings