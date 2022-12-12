import Employeeslistitem from '../employees-list-item/employees-list-item';
import './empployees-list.css'


const EmployeesList = ({data, onDelete, onToggleProp, onToggleIncrease}) => {

    const elements = data.map(item =>  {
    const {id, ...itemProps} = item
        return  (        
            <Employeeslistitem onDelete={() => onDelete(id)} onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} key={id} {...itemProps}/> // {...item} - деструктуризация обекта,токсть развлрастваем обект и передаем дальше 
            // или
            // <Employeeslistitem name={item.name} salary={item.salary} increase={item.increase}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployeesList