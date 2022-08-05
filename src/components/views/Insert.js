import { useState } from "react";

const Insert = () => {
    const [name, setName] = useState('');
    const [frameworks, setFrameworks] = useState('');
    const [yearCreated, setYearCreated] = useState('');
    const [fileExtension, setFileExtension] = useState('');

<<<<<<< HEAD
    const handleLanguageSubmission = (event) => {
        event.preventDefault();

        // write code to create a specific language
        fetch(`http://localhost:5000/languages`, { method: 'POST' });
    }

    // write to complete the onChange function on each input field
=======
    // method two below

    // const [lan, setLan] = useState({
    //     name: '',
    //     frameworks: '',
    //     yearCreated: '',
    //     fileExtension: ''
    // })

    const handleLanguageSubmission = (event) => {
        event.preventDefault();
        
        // write code to create a specific language
        fetch(`http://localhost:5000/languages`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                frameworks: frameworks.split(', '),
                yearCreated: yearCreated,
                fileExtension: fileExtension
            })
            // body: JSON.stringify({...lan, 
            //     frameworks: lan.frameworks.split(', ')
            // })
        })
        .then(resp=>resp.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
    }
    // handleChange for method two below

    // function handleChange(e){
    //     setLan({...lan, [e.target.name]: e.target.value})        
    // }

    // write to complete the onChange function on each input field

    function handleChange(e){
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'fileExtension'){
            setFileExtension(e.target.value)
        }else if(e.target.name === 'yearCreated'){
            setYearCreated(e.target.value)
        }else if(e.target.name === 'frameworks'){
            setFrameworks(e.target.value)
        }
    }

>>>>>>> 6efac71 (added post request and handleChange)
    return <div className="mt-2 mb-5">
        <form onSubmit={handleLanguageSubmission}>
            <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-4">
<<<<<<< HEAD
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
=======
                    <input type="text" name="name" value={name} onChange={handleChange} className="form-control" placeholder="Name" />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" name="fileExtension" value={fileExtension} onChange={handleChange} className="form-control" placeholder="Extension" />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" name="yearCreated" value={yearCreated} onChange={handleChange} className="form-control" placeholder="Year created" />
                </div>

                <div className="col-12 col-md-6 col-lg-8">
                    <input type="text" name="frameworks" value={frameworks} onChange={handleChange} className="form-control" placeholder="Frameworks" />
>>>>>>> 6efac71 (added post request and handleChange)
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