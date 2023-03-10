import ClassNames from 'classnames';

import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, increase, rise, onDelete, onToggleProp }) => {
  return (
    <li className={
      ClassNames(
        'list-group-item d-flex justify-content-between', {
          'increase': increase,
          'like': rise,
        }
      )
    }>
      <span className="list-group-item-label" data-toggle="rise" onClick={onToggleProp}>
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn-cookie btn-sm" data-toggle="increase" onClick={onToggleProp}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem;