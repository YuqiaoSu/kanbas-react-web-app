import React, {useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {FaEllipsisV, FaPlus, FaCheckCircle, FaGripVertical} from 'react-icons/fa';
import {useSelector, useDispatch} from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    return (
        <ul className="list-group">
            <li className="list-group-item d-flex flex-column  justify-content-start">
                <div className="d-flex flex-row gap-2 mb-2">

                    <input value={module.name}
                           onChange={(e) =>
                               dispatch(setModule({...module, name: e.target.value}))}
                    />
                    <button
                        className="float-end bg-success"
                        onClick={() => dispatch(addModule({...module, course: courseId}))}>

                        Add
                    </button>
                    <button
                        className="float-end bg-light"
                        onClick={() => dispatch(updateModule(module))}>

                        Update
                    </button>

                </div>
                <div>
                    <textarea value={module.description}
                              onChange={(e) =>
                                  dispatch(setModule({...module, description: e.target.value}))}
                    />
                </div>


            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item list-group-item-action list-group-item-secondary mb-5"
                            style={{borderRadius: '0'}}>

                            <h3>{module.name}</h3>

                            <button
                                className="float-end bg-success"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button
                                className="float-end bg-danger me-2 ms-1"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <FaGripVertical className="float-left me-3"/>
                            <span>{module.description}</span>
                            <FaEllipsisV className="float-end"/>
                            <FaPlus className="float-end pe-2"/>
                            <FaCheckCircle className="text-success float-end me-2"/>

                        </li>

                    ))
            }
        </ul>
    );
}

export default ModuleList;