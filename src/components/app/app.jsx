import { useEffect, useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {id: '5245', name: 'Gibson Powell', salary: 3200, rise: true, increase: false},
  {id: '5346', name: 'Keaton Cox', salary: 2400, rise: false, increase: false},
  {id: '6854', name: 'Kaleb Carter', salary: 1600, rise: false, increase: false},
  {id: '3456', name: 'Warren Johnson', salary: 900, rise: true, increase: true},
  {id: '0795', name: 'Nicolas Miller', salary: 1100, rise: false, increase: false},
  {id: '3910', name: 'Kaleb Wood', salary: 3100, rise: false, increase: true},
  {id: '7812', name: 'Pace Powell', salary: 2800, rise: false, increase: false},
];

function App() {
  const [userData, setUserData] = useState([]);
  const [findUser, setFindUser] = useState('');

  useEffect(() => {
    setUserData(data);
  }, []);

  const getNewUser = (newUser) => {
    setUserData((arrUsers) => [...arrUsers, newUser]);
  }

  const deleteItem = (id) => {
    setUserData(allUsers => allUsers.filter(user => user.id !== id));
  }

  const onToggleProp = (id, prop) => {
    setUserData(userData.map(element => element.id === id ? {...element, [prop]: !element[prop]} : element));
  }

  const searchInUsers = (items, term) => {
    return (term.length === 0) ? items : items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  const visibleData = searchInUsers(userData, findUser);

  return (
    <div className="app">
      <AppInfo userData={userData} />

      <div className="search-panel">
        <SearchPanel findUser={findUser} setFindUser={setFindUser} />
        <AppFilter/>
      </div>
        
      <EmployeesList
        data={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />

      <EmployeesAddForm
        newUser={getNewUser}
      />
    </div>
  );
}

export default App;
