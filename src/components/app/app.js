import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-fillter";
import EmployeesList from "../employees-list/employees-list";
import EmployersAddForm from "../employees-add-form/employees-add-form";

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployersAddForm />
    </div>
  );
}

export default App;
