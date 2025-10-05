import axios from "axios";
import React, { useEffect, useState } from "react";
import SetSubNGrade from "./SetSubNGrade";

const AddGrade = () => {
  const [studentList, setStudentList] = useState([]);
  const [updatingStudent, setUpdateingStudent] = useState();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/students");
        console.log(data);
        setStudentList(data.rows);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };
    fetchStudents();
  }, []);

  const handleUpdatingStudent = (student) => {
    setUpdateingStudent(student);
  };

  return (
    <div className="flex p-6 gap-6 h-[80vh] ">
      {/* Left Panel - Student List */}
      <div className="w-1/3 bg-gray-100 p-4 rounded shadow overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Students List</h1>
        <ul className="space-y-2">
          {studentList.map((student) => (
            <li
              onClick={() => handleUpdatingStudent(student)}
              key={student.Roll_no}
              className="p-3 border rounded-md hover:bg-white transition"
            >
              {student.Name} (Roll No: {student.Roll_no})
            </li>
          ))}
        </ul>
      </div>
      {/*Right panel-------------------------------------------------------- */}
      <div className="w-2/3 bg-gray-50 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Set Grade</h2>
        <SetSubNGrade student={updatingStudent}></SetSubNGrade>
      </div>
    </div>
  );
};

export default AddGrade;
