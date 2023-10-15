import {Link} from "react-router-dom";
import {
    FaUserCircle,
    FaTachometerAlt,
    FaBook,
    FaCalendarAlt,
    FaInbox,
    FaClock,
    FaTv,
    FaShareAlt,
    FaQuestionCircle, FaTimes
} from 'react-icons/fa';

import "./index.css"
function closeKanbasSideBar() {
    document.getElementById("HiddenKanbasSidebar").style.display = "none";
}
function HiddenKanbas() {
    const menuItems = [
        {icon: <FaUserCircle/>, text: 'Account'},
        {icon: <FaTachometerAlt/>, text: 'Dashboard'},
        {icon: <FaBook/>, text: 'Courses'},
        {icon: <FaCalendarAlt/>, text: 'Calendar'},
        {icon: <FaInbox/>, text: 'Inbox'},
        {icon: <FaClock/>, text: 'History'},
        {icon: <FaTv/>, text: 'Studio'},
        {icon: <FaShareAlt/>, text: 'Commons'},
        {icon: <FaQuestionCircle/>, text: 'Help'}
    ];
    return (
        <div className="hidden-kanbas" id="HiddenKanbasSidebar">
            <button type="button" className="btn btn-lg  float-end mb-3" onClick={closeKanbasSideBar}>
                <FaTimes className="text-black" /></button>
            <ul style={{"listStyle": 'none'}}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={`/Kanbas/${item.text}`} className={"hidden-kanbas-nav"}>
                            <p className={`${item.text.includes("Account") && "text-black"}`}>{item.icon}</p>
                            <span>{item.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HiddenKanbas;