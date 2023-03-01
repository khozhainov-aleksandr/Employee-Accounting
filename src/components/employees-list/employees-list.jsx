import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
  const usersList = data.map((user) => (
    <EmployeesListItem
      key={user.id}
      name={user.name}
      salary={user.salary}
      increase={user.increase}
      onDelete={() => onDelete(user.id)}
    />
  ))

  return (
    <ul className="app-list list-group">
      {usersList}
    </ul>
  )
}

export default EmployeesList;