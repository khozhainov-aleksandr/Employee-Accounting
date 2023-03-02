import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
  const usersList = data.map((user) => (
    <EmployeesListItem
      key={user.id}
      name={user.name}
      salary={user.salary}
      rise={user.rise}
      increase={user.increase}
      onDelete={() => onDelete(user.id)}
      onToggleProp={(e) => onToggleProp(user.id, e.currentTarget.getAttribute('data-toggle'))}
    />
  ))

  return (
    <ul className="app-list list-group">
      {usersList}
    </ul>
  )
}

export default EmployeesList;