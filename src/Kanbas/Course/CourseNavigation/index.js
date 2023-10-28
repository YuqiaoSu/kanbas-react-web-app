import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css"
import db from "../../Database";

function CourseNavigation({ course }) {
    const courseItems = [
        {text: 'Home'},
        {text: 'Modules'},
        {text: 'Piazza'},
        {text: 'Zoom Meetings'},
        {text: 'Assignments'},
        {text: 'Quizzes'},
        {text: 'Grades'},
        {text: 'People'},
        {text: 'Panopto Video'},
        {text: 'Discussions'},
        {text: 'Announcements'},
        {text: 'Pages Files'},
        {text: 'Rubrics'},
        {text: 'Outcomes'},
        {text: 'Collaborations'},
        {text: 'Syllabus'},
        {text: 'Settings'}
    ];
    const { courseId } = useParams();
    const {pathname} = useLocation();
    return (
        <div className="sticky-links  d-none d-lg-block me-3">
            <span className="ellipsis">{course.startDate}_{course.name}_{course.number}</span>
            <ul>
                {courseItems.map((item, index) => (
                    <li key={index} className={`${pathname.includes(item.text) && "selected"}`}>
                        <Link to={`/Kanbas/Courses/${courseId}/${item.text}`}
                              className={`sticky-links-nav`}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;