import React from 'react';

const students = [
  { name: 'Rahul', rank: 1, marks: 88 },
  { name: 'Rajeev', rank: 2, marks: 51 },
  { name: 'Rudra', rank: 3, marks: 80 },
  { name: 'Chapri', rank: 4, marks: 60 },
  { name: 'Dhana', rank: 5, marks: 50 },
];

const StudentRankingList = () => (
  <div>
    <h1>Student Rankings</h1>
    <ul>
      {students.map(student => (
        <li key={student.name}>
          {student.name} - Rank: {student.rank} - Marks: {student.marks}{" "}
          {student.marks > 85
            ? <span style={{ color: 'gold' }}>Topper</span>
            : student.marks >= 60 && student.marks < 100
              ? <span style={{ color: 'green' }}>•Average</span>
              : <span style={{ color: 'red' }}>Needs Improvement</span>
          }
        </li>
      ))}
    </ul>
  </div>
);

export default StudentRankingList;