import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Viewstudent() {
  const params = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchData(params.rollnumber);
  }, [params.rollnumber]);

  const fetchData = async (rollnumber) => {
    try {
      const response = await axios.get(
        `https://634d24d5f5d2cc648e9da680.mockapi.io/admin/student/${rollnumber}`
      );
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  if (!student) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <div className="row">
        <table className="table table-bordered" role="dataTable" width="100%" cellSpacing="0">
          <thead>
            <HeaderRow />
          </thead>
          <tfoot>
            <HeaderRow />
          </tfoot>
          <tbody>
            <tr>
              <td>{student.rollnumber}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td>{student.phone}</td>
              <td>{student.country}</td>
              <td>{student.state}</td>
              <td>{student.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <tr>
      <th>Roll Number</th>
      <th>Student Name</th>
      <th>Department</th>
      <th>DOB</th>
      <th>Gender</th>
      <th>Phone</th>
      <th>Country</th>
      <th>State</th>
      <th>City</th>
    </tr>
  );
}

export default Viewstudent;
