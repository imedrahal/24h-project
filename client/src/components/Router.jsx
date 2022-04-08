import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export function Router() {
    return (
      <Router>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path ="/" element={<App />} />
          <Route exact path ="/addContact" element={<Add/>} />
        </Routes>
      </div>
      </Router>
    );
  }