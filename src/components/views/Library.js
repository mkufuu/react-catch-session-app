import { useLibrary } from "../../hooks";
import { Link, Outlet } from "react-router-dom";

const Library = (props) => {
    const languages = useLibrary();

    return <main>
        <div className="container">
            <Outlet/>

            <div className="row g-3">
                {
                    languages.map((language) => {
                        const {id, name = 'Unknown', yearCreated = 1970, fileExtension = '.text', frameworks = [] } = language;

                        return <div key={id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center justify-content-between">
                                        {name}

                                        <span className="m-1 badge bg-dark">
                                            {fileExtension}
                                        </span>
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{yearCreated}</h6>
                                    <p className="card-text">
                                        {
                                            (Array.isArray(frameworks) ? frameworks : []).map((framework) => {
                                                return <span key={framework} className="me-1 badge bg-dark">{framework}</span>
                                            })
                                        }
                                    </p>

                                    <Link to={`/library/modify/${id}`} className="btn btn-primary">EDIT DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </main>
}

export default Library;