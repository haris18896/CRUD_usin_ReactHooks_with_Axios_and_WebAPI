import React,{useState, useEffect} from 'react';
import TutorialDataServices from '../services/TutorialServices';
import { Link } from "react-router-dom";

function TutorialList() {

    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState([null]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState('');


    useEffect(()=>{
        retrieveTutorials();
    },[]);

    const onChangeSearchTitle = e => {
        const searchTitle=e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveTutorials = () => {
        TutorialDataServices.getAll()
        .then(response => {
            setTutorials(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        })
    }

    const refreshList = () => {
        retrieveTutorials();
        setCurrentTutorial(null);
        setCurrentIndex(-1);
    };

    const activeTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
    }

    const removeAllTutorials = () => {
        TutorialDataServices.removeAll()
        .then(response => {
            console.log(response.data);
            refreshList();
        })
        .catch(e => {
            console.log(e);
        })
    }

    const findByTitle = () => {
        TutorialDataServices.findByTitle(searchTitle)
        .then(response => {
            setTutorials(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="list-row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                     type="text"
                     className="form-control"
                     placeholder="Search..."
                    onChange={onChangeSearchTitle}
                    value={searchTitle}
                    />
                    <div className="input-group-append">
                        <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Tutorials</h4>
                <ul className="list-group">
                    {tutorials && tutorials.map((tutorial, index) => (
                        <li
                        className={"list-group-item" + (index === currentIndex ? "active" : "")}
                        onClick={() => activeTutorial(tutorial, index)}
                        key={index}>{tutorial.title}</li>
                    ))}
                </ul>

                <button
                className="btn btn-sm btn-danger m-3"
                onClick={removeAllTutorials}
                >
                    Remove all
                </button>
            </div>
            <div className="col-md-6">
                {currentTutorial ? (
                    <div>
                        <h4>Tutorial</h4>
                        <div>
                            <label><strong>Title: </strong></label>{" "}
                             {currentTutorial.title}
                        </div>
                        <div>
                            <label><strong>Description: </strong></label>{" "}
                             {currentTutorial.description}
                        </div>
                        <div>
                            <label><strong>Status: </strong></label>{" "}
                             {currentTutorial.published ? "Published" : "Pending"}
                        </div>

                        <Link
                        to={"/tutorial/" + currentTutorial.id}
                        className="badge badge-warning"
                        >Edit</Link>
                    </div>
                    ):  (
                    <div>
                        <br/>
                        <p>Please click on a Tutorial...</p>
                    </div>
                    )}
                    </div>
            </div>
    );
};

export default TutorialList
