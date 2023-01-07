import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/filter";
import EmployeesList from "../employees-list/employees-list";
import EmployersAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
        { name: "Eva I", salary: 6000, increase: false, rise: false, id: 4 },
      ],
      term: "",
      filters: "all",
    };
  }
  addItem = (e, name, salary) => {
    e.preventDefault();
    this.setState(({ data }) => {
      let maxId = 0;
      data.forEach((element) => {
        if (maxId < element.id) {
          maxId = element.id;
        }
      });
      const newItem = {
        name,
        salary: +salary,
        increase: false,
        id: maxId + 1,
      };
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((item) => item.id === id);

      // просто удалить елемент из стейта  нельзя, нужно его клонировать с новым значением
      // Вариант 1:

      // const before = data.splice(0, index); // копирую сначала массив от 0 до нашего елемента (Index)
      // const after = data.splice(index + 1); // потом копирую часть массива после нашего елемента
      // const newArr = [...before, ...after];
      // return {
      //// data: newArr,
      // };

      // Вариант 2:
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  // Оброботка данных при клике можна расписать так (каждый клик отдельно)
  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item
  //     }),
  //   }));
  // };
  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item
  //     }),
  //   }));
  // };

  //Обработка клика обединина в одну фукцию тз двух (onToggleIncrease и onToggleRise) и считывает data-attribute при клике

  onToggleProp = (id, prop) => {
    // есть несколько способов обновления обекта стейт
    // первый способ - сложный
    // this.setState(({ data }) => {
    //   const index = data.findIndex(element => element.id === id);
    //   const old = data[index];
    //   const newItem = {...old, [prop]: !old[prop]};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
    //   return {
    // // data: newArr
    //   }
    // });

    // второй способ через map
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (filters) => {
    this.setState({filters})
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1; // indexOf ищет ту часть в строке которую я задал в кавычках если находит возврашает индекс елемента если нет то -1
    });
  };

  filtersItem = (data, filters) => {
    switch (filters) {
      case "chosen":
        return data.filter((item) => item.rise);
      case "salary":
        return data.filter((item) => item.salary >= 1000);
      default:
        return data;
    }
  };

  render() {
    const { data, term, filters } = this.state;
    const employees = data.length;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.filtersItem(this.searchEmp(data, term), filters);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filters={filters} filterPost={this.filterPost} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
