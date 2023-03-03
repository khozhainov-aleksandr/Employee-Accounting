import './search-panel.css';

const SearchPanel = ({findUser, setFindUser}) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      value={findUser}
      onChange={(event) => {
        setFindUser(event.target.value);
      }}
    />
  )
}

export default SearchPanel;