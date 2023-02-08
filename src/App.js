import './App.scss';
import BookAppoinment from './components/pages/BookAppoinment';
import YourInformation from './components/pages/YourInformation';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<BookAppoinment/>}/>
        <Route path="/user-details" element={<YourInformation/>}/>
  </Routes>
 </Router>
  );
}

export default App;
