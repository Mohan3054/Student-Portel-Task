import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Editstudent() {
  const { rollnumber } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `https://634d24d5f5d2cc648e9da680.mockapi.io/admin/student/${rollnumber}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudentData();
  }, [rollnumber]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://634d24d5f5d2cc648e9da680.mockapi.io/admin/student/${rollnumber}`,
        student
      );
      alert("Data updated successfully") 
      console.log("Data updated successfully");
    } catch (error) {
      console.error("Error updating student data:", error);
    }
  };

  if (!student) {
    return <div>Loading...</div>;
  }
//   console.log(student);

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Student Name</label>
              <input
                type={"text"}
                value={student.name}
                onChange={handleInputChange}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Roll Number</label>
              <input
                type={"number"}
                value={student.rollnumber}
                onChange={handleInputChange}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>Department</label>
              <select
                value={student.department}
                onChange={handleInputChange}
                className="form-control"
              >
                <option>Web Developer</option>
                <option>Java Developer</option>
                <option>React Developer</option>
                <option>Python Developer</option>
                <option>Mern Stack Developer</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>Country</label>
              <select
                value={student.country}
                onChange={handleInputChange}
                className="form-control"
              >
                <option>India</option>
                <option>China</option>
                <option>America</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>State</label>
              <select
                value={student.state}
                onChange={handleInputChange}
                className="form-control"
              >
                <option>India</option>
                <option>China</option>
                <option>America</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>City</label>
              <select
                value={student.city}
                onChange={handleInputChange}
                className="form-control"
              >
                <option>India</option>
                <option>China</option>
                <option>America</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                type={"number"}
                value={student.phone}
                onChange={handleInputChange}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date Of Birth</label>
              <input
                type={"date"}
                value={student.dob}
                onChange={handleInputChange}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                value={student.gender}
                onChange={handleInputChange}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Update </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Editstudent;
