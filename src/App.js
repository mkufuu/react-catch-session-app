import Home from './components/views/Home';
import About from './components/views/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insert from './components/views/Insert';
import Modify from './components/views/Modify';
import Library from './components/views/Library';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import { useLibrary } from './hooks';

const App = () => {
    const [languages, setLanguages, fetchData] = useLibrary()
    return <BrowserRouter>
      <Navigation/>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />} />

            <Route path="library" element={<Library languages={languages}/>}>
                <Route path="insert" element={<Insert fetchData={fetchData}/>} />
                <Route path="modify/:id" element={<Modify fetchData={fetchData}/>} />
            </Route>
        </Routes>
    </BrowserRouter>;
}

export default App;