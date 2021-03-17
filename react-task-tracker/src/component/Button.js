import PropType from 'prop-types'
const Button = ({color,text,onAdd}) => {

    return (
        <button onClick={onAdd}
        style={{backgroundColor:color}}
        className="btn">{text}</button>
    )
}

Button.propType = {
    text:PropType.string,
    color:PropType.string,
}

export default Button
