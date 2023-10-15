import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {FaEllipsisV, FaPlus, FaCheckCircle, FaGripVertical} from 'react-icons/fa';


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="list-group">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item list-group-item-action list-group-item-secondary mb-5"  style={{borderRadius: '0'}} >


                            <h3>{module.name}</h3>
                            <FaGripVertical className="float-left me-3" />
                            <span>{module.description}</span>
                            <FaEllipsisV className="float-end" />
                            <FaPlus className="float-end pe-2" />
                            <FaCheckCircle className="text-success float-end me-2" />

                        </li>

                    ))
            }
        </ul>
    );
}
export default ModuleList;