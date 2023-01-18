import React from "react";

const students = [
    {
        id: 1,
        name: "Apple",
    },
    {
        id: 2,
        name: "Banana",
    },
    {
        id: 3,
        name: "Orange",
    },
    {
        id: 4,
        name: "Grape",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key= {student.id}> {student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;