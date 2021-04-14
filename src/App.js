import React from "react";

import GlobalStyles from "./Components/GlobalStyles";
import NavBar from "./Components/Navbar";

function App() {
    const links = ["home", "about", "project", "contact", "profile"];
    return (
        <>
            <GlobalStyles />
            <NavBar links={links} />
        </>
    );
}

export default App;
