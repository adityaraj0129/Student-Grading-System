import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditGrade = () => {
  const location = useLocation();
  let student = location.state;
  const navigate = useNavigate();
  const [grade, setGrade] = useState(student.grade);
  console.log(student);

  const handleUpdate = async (e) => {
    e.preventDefault();
    let payload = {
      grade: grade,
      student_id: student.Roll_no,
      subject_id: student.id,
    };
    await axios.put("http://localhost:3000/grades/update", payload);
    alert("grade updated successfully");
    navigate("/");
  };
  return (
    <>
      <div className="h-[80vh] flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleUpdate}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h1 className="text-xl font-semibold mb-4">Updating Grade</h1>

          <label className="block text-gray-700 mb-4">
            Updating grade of{" "}
            <span className="font-medium">{student.Name}</span> in subject{" "}
            <span className="font-medium">{student.subject}</span>
          </label>

          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditGrade;
