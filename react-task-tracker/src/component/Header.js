import Button from "./Button"
const Header = ({onAdd,showAddTask }) => {
    return (
        <header className = 'header'>
        <h1>Task Tracker</h1>
        <Button
        color= {showAddTask ? "red": "green"}
        onAdd={onAdd}
        text={showAddTask ? "Close" : "Add"}
        />
        </header>

    )
}

export default Header
