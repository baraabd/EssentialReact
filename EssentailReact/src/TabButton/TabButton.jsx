const TabButton = ({children, onSelect}) =>{
    console.log('TabButton Component Rendering');

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}
export default TabButton;