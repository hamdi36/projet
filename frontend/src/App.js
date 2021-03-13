import './App.css';
import {Switch , Route} from "react-router-dom";
import AddDoctor from './Components/AddDoctor';
import DoctorList from './Components/DoctorList';

function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <Switch>
       <Route exact path="/" component = {DoctorList}/>
       <Route path={["/add" , "/edit/:id"]} component = {AddDoctor}/>
     </Switch>
    </div>
  );
}

export default App;
