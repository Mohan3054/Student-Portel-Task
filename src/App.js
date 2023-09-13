import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./student/Student";
import Viewstudent from "./student/Viewstudent";
import Editstudent from "./student/Editstudent";
import Createstudent from "./student/Createstudent";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Routes>
              <Route path="/" element={<Student />}></Route>
              <Route
                path="/student/Student/:rollnumber"
                element={<Viewstudent />}
              ></Route>
              <Route
                path="/student/edit/:rollnumber"
                element={<Editstudent />}
              ></Route>
              <Route
                path="/student/create_student"
                element={<Createstudent />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
