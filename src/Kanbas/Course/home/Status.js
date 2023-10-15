import ModuleList from "../Modules/ModuleList";
import {
    FaBan, FaCheckCircle, FaFileImport, FaCloudDownloadAlt,
    FaHome, FaStream, FaBell, FaChartLine, FaCalendarAlt
} from 'react-icons/fa';
import "./Status.css"
function Status() {
    return (
        <div className="course-status d-none d-xl-block me-3">
            <h2>Course Status</h2>
            <button type="button" className="btn btn-danger">
                <FaBan /> Unpublished
            </button>
            <button type="button" className="btn btn-success">
                <FaCheckCircle className="text-white" /> Published
            </button>
            <div className="list-group">
                {[
                    {icon: <FaFileImport />, text: 'Import Existing Content'},
                    {icon: <FaCloudDownloadAlt />, text: 'Import From Commons'},
                    {icon: <FaHome />, text: 'Choose Home Page'},
                    {icon: <FaStream />, text: 'View Course Stream'},
                    {icon: <FaBell />, text: 'New Announcement'},
                    {icon: <FaChartLine />, text: 'New Analytics'},
                    {icon: <FaBell />, text: 'View Course Notifications'},
                ].map((item, index) => (
                    <button key={index} type="button" className="list-group-item list-group-action">
                        {item.icon} {item.text}
                    </button>
                ))}
            </div>
            <strong> TO DO</strong>
            <hr/>
            <div className="d-flex flex-wrap">
                <strong>Coming Up </strong>
                <a href="#" className="view-calendar">
                    <FaCalendarAlt className="me-2" />View Calendar
                </a>
            </div>
            <hr/>
            <div className="coming-up">
                {[
                    {date: 'Sep 7 at 11:45am', lecture: 'CS4550.12631.202410'},
                    {date: 'Sep 11 at 11:45am', lecture: 'CS4550.12631.202410'},
                    {date: 'Sep 11 at 6pm', lecture: 'CS5610 06 SP23'},
                ].map((item, index) => (
                    <a key={index} href="#">
                        <FaCalendarAlt className="me-2 text-danger" />
                        <span>Lecture</span>
                        <p className="ellipsis">{item.lecture} {item.date}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default Status;