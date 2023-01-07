import './app-filter.css'

//Пример реалтзации компонента через переменные

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'chosen', label: 'Cотрудники на повишение'},
        {name: 'salary', label: 'ЗП больше 1000$'}
    ]
    const button = buttonData.map(({name, label}) => {
        const active = props.filters === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
       return (
        <button className={`btn ${clazz}`} key={name} type='button' onClick={() => props.filterPost(name)}>
        {label}
</button>
       )
    })

    return (
            <div className="btn-group">
                {button}
            </div>
    )
}
export default AppFilter