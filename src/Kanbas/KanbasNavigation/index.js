import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaClock, FaTv, FaShareAlt, FaQuestionCircle } from 'react-icons/fa';

import "./index.css"
function KanbasNavigation() {
    const menuItems = [
        {img: '../images/northeastern.jpg', class: 'card-img-top'},
        {icon: <FaUserCircle />, text: 'Account'},
        {icon: <FaTachometerAlt />, text: 'Dashboard'},
        {icon: <FaBook />, text: 'Courses'},
        {icon: <FaCalendarAlt />, text: 'Calendar'},
        {icon: <FaInbox />, text: 'Inbox'},
        {icon: <FaClock />, text: 'History'},
        {icon: <FaTv />, text: 'Studio'},
        {icon: <FaShareAlt />, text: 'Commons'},
        {icon: <FaQuestionCircle />, text: 'Help'}
    ];
        const { pathname } = useLocation();
        return (
            <div className="sidebar  d-none d-lg-block">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.img ? (
                                <img src={item.img}  className={item.class} />
                            ) : (
                                <Link to={item.text}
                                      className={`sidebar-nav ${pathname.includes(item.text) && "selected"}`}>
                                    <p className={`sidebar-nav-icon ${item.text.includes("Account") && "sidebar-nav-account-image"}`}>{item.icon}</p>
                                    <p className={'sidebar-nav-text'}>{item.text}</p>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
}
export default KanbasNavigation;