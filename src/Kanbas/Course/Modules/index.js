import ModuleList from "./ModuleList";
import { FaCheckCircle, FaPlus, FaEllipsisV } from 'react-icons/fa';
import "./index.css"
import {Link} from "react-router-dom";
function Modules() {
    return (
        <div className="flex-grow-1 me-3">
            <div className="header-bar">
                <button type="button" className="btn btn-secondary btn-sm me-2">Collapse All</button>
                <button type="button" className="btn btn-secondary btn-sm me-2">View Progress</button>

                <div className="dropdown me-2">
                    <button className="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        <FaCheckCircle className="text-success me-2" />
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#" data-value="PUBLISHALL">Publish All</Link></li>
                        <li><Link className="dropdown-item" href="#" data-value="HOLDER">holder</Link></li>
                    </ul>
                </div>

                <button type="button" className="btn btn-danger btn-sm">
                    <FaPlus />
                    Module
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                    <FaEllipsisV />
                </button>
            </div>
            <hr/>

            <ModuleList />
        </div>
    );
}
export default Modules;