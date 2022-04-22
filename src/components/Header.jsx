import { useState } from "react";
import Navbar from "./Navbar";

function Header() {
    const [dataVisible, setDataVisible] = useState(false);
    
    function toggleBg(prevBg) {
        setDataVisible(!prevBg);
    }
    return (
        <header class="header">
            <span class="header__bg" data-visible={dataVisible}>
                <img src="https://html.nkdev.info/snow/assets/images/bg-menu.jpg" alt="" />
            </span>
            <div class="container">
                <Navbar setVisible={() => toggleBg(dataVisible)} dataVisible={dataVisible} />
            </div>
        </header>
    );
}
export default Header