function AButton() {
    const enabled = true
    const text = 'A Button'
    const placeholder = 'input value ...'
    const size = 50

    return (
        <div>
            <button disabled={!enabled}>{text}</button>
            <input placeholder={placeholder} size={size}></input>
        </div>
    )
}
export default AButton