import { useState } from 'react';
import nextId from "react-id-generator";

import './employees-add-form.css';

const EmployeesAddForm = ({ newUser }) => {
  const newUserID = nextId('User_ID_');

  const [userName, setUserName] = useState('');
  const [userSalary, setUserSalary] = useState('');

  const addButtonToForm = (e) => {
    e.preventDefault();

    newUser({
      id: newUserID,
      name: userName || 'No Name',
      salary: userSalary || 0,
      increase: false,
    });

    setUserName('');
    setUserSalary('');
  }

  return (
    <div className="app-add-form">
      <h3>Add a new Employee</h3>
      <form
        className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What's his name?"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary in $?"
          value={userSalary}
          onChange={(event) => {
            setUserSalary(event.target.value);
          }}
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={addButtonToForm}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default EmployeesAddForm;