import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Modify = () => {
    const params = useParams();
    const [name, setName] = useState('');
    const [frameworks, setFrameworks] = useState('');
    const [yearCreated, setYearCreated] = useState('');
    const [fileExtension, setFileExtension] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:5000/languages/${params.id}`, {method: 'GET'})
            .then((resp) => resp.json())
            .then((json) => {
                setName(json?.name);
                setYearCreated(json?.yearCreated);
                setFileExtension(json?.fileExtension);
                setFrameworks(json?.frameworks.join(', '));
            })
            .catch((error) => {

            });
    }, [params.id]);

    const handleLanguageSubmission = (event) => {
        event.preventDefault();

        // write code to update the specific language
        fetch(`http://localhost:5000/languages/${params.id}`, { 
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:name,
                yearCreated:yearCreated,
                frameworks:[frameworks],
                fileExtension:fileExtension
            })
        })
        .then(data => 
            setFileExtension(''),
            setFrameworks(''),
            setName(''),
            setYearCreated('')
            )
    }

    // write to complete the onChange function on each input field
    return <div className="mt-2 mb-5">
        <form onSubmit={handleLanguageSubmission}>
            <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-4">
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}}
                        className="form-control" placeholder="Name" />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input 
                        type="text" 
                        value={fileExtension} 
                        onChange={(e) => {setFileExtension(e.target.value)}}
                        className="form-control" placeholder="Extension" />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input 
                        type="text" 
                        value={yearCreated} 
                        onChange={(e) => {setYearCreated(e.target.value)}}
                        className="form-control" placeholder="Year created" />
                </div>

                <div className="col-12 col-md-6 col-lg-8">
                    <input 
                        type="text" 
                        value={frameworks} 
                        onChange={(e) => {setFrameworks(e.target.value)}} 
                        className="form-control" placeholder="Frameworks" />
                </div>

                <div className="col-12 col-md-6 col-lg-4 text-end">
                    <button type="submit" className="btn btn-primary">
                        EDIT DETAILS
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default Modify;