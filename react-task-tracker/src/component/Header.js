import Button from './Button'

const Header = (props) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className = "header">
            <h1 >{props.title}</h1>
            <Button color = "green" text = "Add" onClick={onClick}/>
        </header>
    )
}



export default Header
