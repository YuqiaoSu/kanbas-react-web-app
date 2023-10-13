import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css";
import 'bootstrap';
import {FaBars, FaChevronCircleDown, FaGlasses, FaTimes} from "react-icons/fa";
import HiddenNavigation from "./HiddenNavigation";
function openCourseNavigation() {
    document.getElementById("HiddenCourseNavigation").style.display = "block";
    document.getElementById("HiddenXButton").style.display = "inline-block";
    document.getElementById("ChevronButton").style.display = "none";

}

function closeCourseNavigation() {
    document.getElementById("HiddenCourseNavigation").style.display = "none";
    document.getElementById("HiddenXButton").style.display = "none";
    document.getElementById("ChevronButton").style.display = "inline-block";}
function Breadcrumb() {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    return (
        <>
            <div className="d-none d-lg-block ">
                <div className="breadcrumb d-flex  align-items-center  mt-0 ms-2 border-bottom mb-2  "
                     style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
                    <button type="button" className="btn breadcrumb-button">
                        <FaBars className="m-0 p-0" /></button>
                    <ol className="breadcrumb flex-grow-1 mb-0">
                        <Link to={`/Kanbas/Dashboard`}
                              className={`breadcrumb-item ms-3 color`}>
                            {courseId}
                        </Link>
                        <li className="breadcrumb-item active" aria-current="page">{pathname.split('/').pop()}</li>
                    </ol>
                    <button type="button" className="btn btn-light btn-sm float-end">
                        <FaGlasses />Student View
                    </button>
                </div>
            </div>
            <div className="mt-0 border-bottom mb-2 bg-black d-none d-sm-block d-md-block d-lg-none">
                <div className="d-flex justify-content-between align-items-center ">
                    <button type="button" className="btn " onClick="openKanbasSideBar()">
                        <FaBars className="m-0 p-0" /></button>
                    <Link to={`/Kanbas/Dashboard`}
                          className={`breadcrumb-item ms-3 color`}>
                        {courseId}
                    </Link>
                    <div className="float-end d-flex">
                        <button type="button" className="btn btn-sm">
                            <FaGlasses className="text-white"/>
                        </button>
                        <button type="button" className="btn btn-sm chevron-button" id="ChevronButton"
                                onClick={openCourseNavigation} >
                            <FaChevronCircleDown className="text-white" id={"ChevronButton"}/>
                        </button>
                        <button type="button" className="btn btn-sm float-end hidden-x-button" id="HiddenXButton"
                                onClick={closeCourseNavigation}>
                            <FaTimes className="text-white" /></button>
                    </div>
                </div>
                <HiddenNavigation/>
            </div>

        </>
    );
}

export default Breadcrumb;