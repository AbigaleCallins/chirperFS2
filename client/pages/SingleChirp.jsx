import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const SingleChirp = () => {
    const navigate = useNavigate();
    const [chirp, setChirp] = useState({});
    const [content, setContent] = useState("")
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/chirps/${id}`)
            .then(res => res.json())
            .then(chirp => {
                setContent(chirp[0].content);
                setChirp(chirp[0].revers());
            })
            .catch(err => console.log(err));
    }, []);

    const handleContentChange = e => setContent(e.target.value);

    const deleteChirp = id => {
        fetch(`http://localhost:3000/api/chirps/${id}`, { method: "DELETE" })
            .then(res => res.ok ? navigate("/") : null)
            .catch(err => console.log(err));
    };

    const editChirp = (id, content) => {
        const editChirpBody = {
            content: content
        };

        fetch(`http://localhost:3000/api/chirps/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editChirpBody)
        })
            .then(res => res.ok ? navigate("/") : null)
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="container text-body text-center">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav>

                            <h1>Ghibli Chirpr</h1>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group mb-2">
                        <textarea
                            className="form-control mb-2"
                            aria-label="With textarea"
                            placeholder="(500 characters max)"
                            value={content}
                            onChange={handleContentChange}
                            cols="30"
                            rows="10"
                        ></textarea>
                        <button className="btn btn-dark mx-2" onClick={() => editChirp(id, content)}>
                            Save
                        </button>
                        <button className="btn btn-dark mx-2" onClick={() => deleteChirp(id)}>
                            Delete Chirp
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SingleChirp;