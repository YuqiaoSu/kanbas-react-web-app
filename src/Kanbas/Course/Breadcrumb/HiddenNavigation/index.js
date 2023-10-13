import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css"
import {
    FaHome, FaPuzzlePiece, FaCommentDots, FaVideo, FaFileAlt,
    FaQuestionCircle, FaGraduationCap, FaUsers, FaVideoSlash,
    FaComments, FaBullhorn, FaCopy, FaClipboardCheck, FaChartLine,
    FaHandshake, FaBookOpen, FaCog
} from 'react-icons/fa';

function HiddenNavigation() {
    const courseItems = [
        {text: 'Home', icon: <FaHome />},
        {text: 'Modules', icon: <FaPuzzlePiece />},
        {text: 'Piazza', icon: <FaCommentDots />},
        {text: 'Zoom Meetings', icon: <FaVideo />},
        {text: 'Assignments', icon: <FaFileAlt />},
        {text: 'Quizzes', icon: <FaQuestionCircle />},
        {text: 'Grades', icon: <FaGraduationCap />},
        {text: 'People', icon: <FaUsers />},
        {text: 'Panopto Video', icon: <FaVideoSlash />},
        {text: 'Discussions', icon: <FaComments />},
        {text: 'Announcements', icon: <FaBullhorn />},
        {text: 'Pages Files', icon: <FaCopy />},
        {text: 'Rubrics', icon: <FaClipboardCheck />},
        {text: 'Outcomes', icon: <FaChartLine />},
        {text: 'Collaborations', icon: <FaHandshake />},
        {text: 'Syllabus', icon: <FaBookOpen />},
        {text: 'Settings', icon: <FaCog />}
    ];
    const { courseId } = useParams();
    return (
        <div className="hidden-navigation" id={"HiddenCourseNavigation"}>
            <ul>
                {courseItems.map((item, index) => (
                    <li key={index} >
                        <Link to={`/Kanbas/Courses/${courseId}/${item.text}`}
                              className={`hidden-navigation-nav`}>
                            {item.icon}
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HiddenNavigation;