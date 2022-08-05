import { useState } from "react";

const Insert = () => {
    const [name, setName] = useState('');
    const [frameworks, setFrameworks] = useState('');
    const [yearCreated, setYearCreated] = useState('');
    const [fileExtension, setFileExtension] = useState('');

    const handleLanguageSubmission = (event) => {
        event.preventDefault();

        // write code to create a specific language
        fetch(`http://localhost:5000/languages`, 
        { method: 'POST',
        headers: {
            "Content-Type":"application/json"
          }, 
        body: JSON.stringify({
            name:name,
            yearCreated:yearCreated,
            frameworks:[frameworks],
            fileExtension:fileExtension
        })})
        .then(r => r.json())
        .then(data => 
            setFileExtension(''),
            setFrameworks(''),
            setName(''),
            setYearCreated('')
            )
    }
    // console.log(name)

    // write to complete the onChange function on each input field
    return <div className="mt-2 mb-5">
        <form onSubmit={handleLanguageSubmission}>
            <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" value={name} className="form-control" placeholder="Name"
                    onChange={(e) => {setName(e.target.value)}}
                     />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" value={fileExtension} className="form-control" placeholder="Extension"
                    onChange={(e) => {setFileExtension(e.target.value)}} 
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <input type="text" value={yearCreated} className="form-control" placeholder="Year created"
                    onChange={(e) => {setYearCreated(e.target.value)}} 
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-8">
                    <input type="text" value={frameworks} className="form-control" placeholder="Frameworks"
                    onChange={(e) => {setFrameworks(e.target.value)}} 
                    />
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