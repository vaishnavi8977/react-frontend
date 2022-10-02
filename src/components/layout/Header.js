import React from "react";

function Header() {
    return(
        <header style={headerStyle}>
        <h1> ToDO </h1>
        </header>
    );
}

 const headerStyle = {
    backgroundColor: 'gray',
    padding : '10px',
    textAlign: 'center'
}
export default Header;