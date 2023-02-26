import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: 'Gibson Powell', salary: 3200, increase: false, id: '5245'},
    {name: 'Keaton Cox', salary: 2400, increase: false, id: '5346'},
    {name: 'Kaleb Carter', salary: 1600, increase: false, id: '6854'},
    {name: 'Warren Johnson', salary: 900, increase: true, id: '3456'},
    {name: 'Nicolas Miller', salary: 1100, increase: false, id: '0795'},
    {name: 'Kaleb Wood', salary: 3100, increase: true, id: '3910'},
    {name: 'Pace Powell', salary: 2800, increase: false, id: '7812'},
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
        
      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
