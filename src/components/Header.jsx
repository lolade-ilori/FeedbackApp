function Header( {bgColor, textColor} ) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }


    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>Feedback UI</h2> 
            </div>
        </header>
    )
}

export default Header
