import axios from "axios";
import React, { useState } from "react";

const Grade = ({ student, subject }) => {
  const [grade, setGrade] = useState("");
  const handleInput = (e) => {
    setGrade(e.target.value);
  };

  const handleAddGrade = async (e) => {
    e.preventDefault();
    let payload = {
      grade: grade,
      student_id: student.Roll_no,
      subject_id: subject.id,
    };
    try {
      let res = await axios.post("http://localhost:3000/grades", payload);
      console.log(res);
      alert("Grade added");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <form className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg w-full max-w-sm bg-white shadow">
        <label className="text-gray-700 font-medium">
          The grade scored by {student.Name} in the {subject.subject}
        </label>
        <input
          onChange={handleInput}
          type="text"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="button"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAddGrade}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Grade;
