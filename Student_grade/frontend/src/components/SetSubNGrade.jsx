import axios from "axios";
import React, { useEffect, useState } from "react";
import Grade from "./Grade";

const SetSubNGrade = ({ student }) => {
  const [subjectList, setSubjectList] = useState([]);
  const [updatingSubject, setUpdatingSubject] = useState();
  useEffect(() => {
    const fetchSubject = async () => {
      let { data } = await axios.get("http://localhost:3000/subjects");
      setSubjectList(data.rows);
    };
    fetchSubject();
  }, []);
  return (
    <div>
      {!student && <h1>No student is selected, Please select the student</h1>}

      {student && (
        <>
          {" "}
          <h1 className="text-3xl">
            Updating report of{" "}
            <span className="font-bold"> {student.Name}</span>{" "}
          </h1>
          <section className="flex p-6 gap-6 h-[50vh]">
            {/* Left Side: 1/3 */}
            <div className="w-1/3 bg-white p-4 rounded shadow">
              <h1 className="text-xl font-bold mb-4">Subject List</h1>
              <ul className="space-y-2">
                {subjectList.map((subject) => (
                  <li
                    onClick={() => {
                      setUpdatingSubject(subject);
                    }}
                    key={subject.id}
                    className="p-2 border rounded"
                  >
                    {subject.subject}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: 2/3 */}
            <div className="w-2/3 bg-gray-50 p-4 rounded shadow">
              {/*-----------------------------------------------------------------------------*/}
              {/* Place your other component or content here */}
              <h2 className="text-lg font-semibold">Set Grade</h2>
              {!updatingSubject && <h1>Choose the subject</h1>}
              {updatingSubject && (
                <Grade student={student} subject={updatingSubject}></Grade>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default SetSubNGrade;
