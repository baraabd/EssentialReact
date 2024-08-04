const TabButton = ({children, onSelect, isSelected}) =>{
    console.log('TabButton Component Rendering');

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}
export default TabButton;