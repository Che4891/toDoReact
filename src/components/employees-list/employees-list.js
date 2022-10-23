import Employeeslistitem from '../employees-list-item/employees-list-item';
import './empployees-list.css'


const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <Employeeslistitem/>
            <Employeeslistitem/>
            <Employeeslistitem/>
        </ul>
    )
}
export default EmployeesList