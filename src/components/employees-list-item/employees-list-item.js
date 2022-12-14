import "./employees-list-item.css";

const Employeeslistitem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
  } = props;
  let className = "list-group-item d-flex justify-content-between";

  if (increase) className += " increase";
  if (rise) className += " like";

  return (
    <li className={className}>
      {/* пример инлайнових стилей в реакте */}
      <span style={{color: '#003351', fontSize: 24}} onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={onToggleProp} data-toggle="increase"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" onClick={onDelete} className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default Employeeslistitem;
