import { useLibrary } from "../../hooks";

const Home = (props) => {
    const languages = useLibrary('_limit=2');

    return <main>
        <header className="container">

            <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit repellendus eius possimus. Placeat perferendis expedita exercitationem eum culpa autem eius odit, nam commodi recusandae qui amet neque rerum nostrum aperiam.
            </p>

        </header>
        
        <div className="container">
            <div className="row g-3">
                {
                    languages.map((language, index) => {
                        const { name = 'Unknown', yearCreated = 1970, fileExtension = '.text', frameworks = [] } = language;

                        return <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{fileExtension}</h6>
                                    <p className="card-text">{yearCreated}</p>

                                    {
                                        (Array.isArray(frameworks) ? frameworks : []).map((framework) => {
                                            return <span key={framework} className="m-1 badge bg-dark">{framework}</span>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </main>
}

export default Home;