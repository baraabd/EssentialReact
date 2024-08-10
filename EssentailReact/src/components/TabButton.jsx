const TabButton = ({children, isSelected, ...props}) =>{
    console.log('TabButton Component Rendering');

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}
export default TabButton;