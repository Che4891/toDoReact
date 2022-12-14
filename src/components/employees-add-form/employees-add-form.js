import { Component } from "react";
import "./employees-add-form.scss";

class EmployersAddForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
     [e.target.name]: e.target.value
    })
  }
  render() {
    const{name, salary} = this.state
    const{addItem} = this.props
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onValueChange}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
            type="number"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button type="submit" onClick={(e) => addItem(e, name, salary)} className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
