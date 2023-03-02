import "./app-info.css";

const AppInfo = ({ userData }) => {
  const allUsers = userData.length;
  const haveAward = userData.filter(user => user.increase === true).length;

  return (
    <div className="app-info">
      <h1>Accounting for employees in company</h1>
      <h2>Total number of employees: {allUsers}</h2>
      <h2>The award will be given to: {haveAward}</h2>
    </div>
  )
}

export default AppInfo;