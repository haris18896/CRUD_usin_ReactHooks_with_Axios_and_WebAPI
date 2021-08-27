/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import TutorialDataService from '../services/TutorialServices'


function AddTutorial() {

    const initialTutorialState = {
        id: null,
        title: '',
        description: '',
        published: false
    };

    const [tutorial, setTutorial] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setTutorial({ ...tutorial, [name]: value });
    };

    const saveTutorial = () => {
        var data = {
            title: tutorial.title,
            description: tutorial.description,
        };

        TutorialDataService.create(data).then(response => {
            setTutorial({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                published: response.data.published
            });
            setSubmitted(true);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    const newTutorial = () => {
        setTutorial(initialTutorialState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>Add new Tutorial</button>
                </div>
            ) : (
            <div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter Title"
                    required
                    id="title"
                    value={tutorial.title}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Enter Title"
                    required
                    id="description"
                    value={tutorial.description}
                    onChange={handleInputChange}
                    />
                </div>

                <button
                 onClick={saveTutorial}
                className="btn btn-success"
                >
                    submit
                </button>
            </div>
            )}
        </div>
    );
};

export default AddTutorial
