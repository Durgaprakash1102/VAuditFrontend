import React, { useEffect } from 'react';
import  {useState} from 'react';

export default function Prac() {
    const[students ,setStudents]=useState([]);



const Base_url = "http://localhost:8080/students/getall"; // Corrected URL


useEffect(()=>{
    const fetchStudents = async () => {

    try{
        const response=await fetch(Base_url);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);


        }
        const data= await response.json();
        setStudents(data);
    }
        catch(error){
            console.error("error saving data");
        }
    }
        fetchStudents(); // Triggering the fetch function on component mount
    }, []); // Empty dependency array to run effect only once on mount







return (
    <div>
        <h1>Student List</h1>
        {students.length > 0 ? (
            students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Email: {student.email}</p>
                </div>
            ))
        ) : (
            <p>No students found.</p>
        )}
    </div>
);
}