import React, { useState } from "react";
import styles from "./StudentRegistration.module.css";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submittedStudent, setSubmittedStudent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedStudent(formData);

    setFormData({
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1>Student Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Data Science">Data Science</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {submittedStudent && (
          <div className={styles.details}>
            <h2>Student Details</h2>

            <p>
              <strong>Name:</strong> {submittedStudent.name}
            </p>

            <p>
              <strong>Email:</strong> {submittedStudent.email}
            </p>

            <p>
              <strong>Course:</strong> {submittedStudent.course}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentRegistration;