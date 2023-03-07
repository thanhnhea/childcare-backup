import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ClassDetails = ({ match }) => {

  const { id } = useParams();
  console.log(id);

  const [classInfo, setClassInfo] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classData = await axios.get('http://localhost:8080/account/class?id=' + id);
        setClassInfo(classData.data);

        // const studentData = await axios.get('http://localhost:8080/students');
        // setStudents(studentData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold">{classInfo.className}</h1>
      <p className="text-lg">{classInfo.description}</p>

      <table className="table-auto my-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.age}</td>
              <td className="border px-4 py-2">{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClassDetails;
