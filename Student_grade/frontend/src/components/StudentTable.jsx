import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentTable = () => {
  //   const navigate = useNavigate();
  //!----------------------------------------------------------------
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [flag, setFlag] = useState(0);
  console.log(searchQuery);

  //!Fetching All Students----------------------------------------------
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const allStudents = await axios.get(
          "http://localhost:3000/students/alldetails"
        );
        setStudents(allStudents.data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, [flag]);

  let filteredStudents = [...students];

  //! Apply search filter
  if (searchQuery) {
    filteredStudents = filteredStudents.filter((student) =>
      student.Name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
  }

  //! Apply subject filter
  if (subject && subject !== "All subjects") {
    filteredStudents = filteredStudents.filter(
      (student) => student.subject === subject
    );
  }

  //! Apply sorting
  if (sortBy && sortBy !== "Default") {
    if (sortBy === "Name") {
      filteredStudents.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (sortBy === "Grades") {
      filteredStudents.sort((a, b) => b.grade - a.grade);
    } else if (sortBy === "RollNo") {
      filteredStudents.sort((a, b) => a.Roll_no - b.Roll_no);
    }
  }

  const handleDelete = async (student) => {
    let payload = {
      student_id: student.Roll_no,
      subject_id: student.id,
    };
    console.log(payload);
    await axios.delete(
      `http://localhost:3000/grades/${payload.student_id}/${payload.subject_id}`
    );
    setFlag(flag + 1);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="border p-3 rounded-md w-full md:w-1/3"
        />

        <select
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            console.log(subject);
          }}
          className="border p-3 rounded-md w-full md:w-1/3"
        >
          <option value="All subjects">All subjects</option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-3 rounded-md w-full md:w-1/3"
        >
          {" "}
          <option value="Default">Default</option>
          <option value="Name">Sort by Name</option>
          <option value="Grades">Sort by Grades</option>
          <option value="RollNo">Sort by Roll no</option>
        </select>uioi[-]
      </div>
      <div className="px-20">
        <table className="min-w-full border border-gray-300 text-sm text-left ">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Student Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Student Roll no.
              </th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Grade</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {student.Name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Roll_no}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.subject}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.grade}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to="/editgrade"
                    state={student}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(student)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;
