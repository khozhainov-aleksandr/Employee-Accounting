import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
  const usersList = data.map((user) => (
    <EmployeesListItem
      key={user.id}
      name={user.name}
      salary={user.salary}
      increase={user.increase}
      onDelete={() => console.log('✅', 'On Delete !')}
    />
  ))

  return (
    <ul className="app-list list-group">
      {usersList}
    </ul>
  )
}

export default EmployeesList;