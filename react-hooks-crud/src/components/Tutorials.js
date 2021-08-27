import React, {useState, useEffect} from 'react';
import TutorialDataServices from '../services/TutorialServices';

function Tutorials() {

    const initialTutorialState = {
        id: null,
        title: '',
        description: '',
        published: false
    };

    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState('');

    const getTutorial = (id) => {}

    useEffect(()=>{

    },[]);

    const handleInputChange = event => {};

    const updatePublished = status => {};

    const updateTutorial = () => {};

    const deleteTutorial = () => {};

    return (
        <div>
            {currentTutorial? (
                <div className="edit-form">
                    <h4>Tutorial</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title"><strong>Title: </strong></label>
                            <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={currentTutorial.title}
                            onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><strong>Description: </strong></label>
                            <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={currentTutorial.description}
                            onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="published"><strong>Status: </strong></label>
                            {currentTutorial.published ? "published" : "pending"}
                        </div>
                    </form>
                    {currentTutorial.published ? (
                        <button
                        className="btn btn-primary"
                        onClick={() => updatePublished(false)}
                        >Unpublished</button>
                    ) : (
                        <button
                        className="btn btn-primary"
                        onClick={() => updatePublished(true)}
                        >Publish</button>
                        )}
                    <button
                    type="submit"
                    className="btn btn-success"
                    onClick={updateTutorial}
                    >Update</button>
                    <p>{message}</p>
                    </div>
            ):(
                <div>
                    <br />
                    <p>Please click on a Tutorial</p>
                </div>
            )}
        </div>
    )
}

export default Tutorials
