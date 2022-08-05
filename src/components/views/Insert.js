import { useState } from "react";

const Insert = () => {
    const [name, setName] = useState('');
    const [frameworks, setFrameworks] = useState('');
    const [yearCreated, setYearCreated] = useState('');
    const [fileExtension, setFileExtension] = useState('');

    const handleLanguageSubmission = (event) => {
        event.preventDefault();

        // write code to create a specific language
        fetch(`http://localhost:5000/languages`, { method: 'POST' });
    }

    // write to complete the onChange function on each input field
    return <div className="mt-2 mb-5">
        <form onSubmit={handleLanguageSubmission}>
            <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" value={name} className="form-control" placeholder="Name" />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" value={fileExtension} className="form-control" placeholder="Extension" />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" value={yearCreated} className="form-control" placeholder="Year created" />
                </div>

                <div className="col-12 col-md-6 col-lg-8">
                    <input type="text" value={frameworks} className="form-control" placeholder="Frameworks" />
                </div>

                <div className="col-12 col-md-6 col-lg-4 text-end">
                    <button type="submit" className="btn btn-primary">
                        SAVE DETAILS
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default Insert;