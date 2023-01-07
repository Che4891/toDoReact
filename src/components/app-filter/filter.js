import './app-filter.css'
import { Component } from 'react'


class AppFilter extends Component{
    filterPost = (e) => {
       const checkHandler = e.currentTarget.getAttribute('data-toggle')
       this.props.filterPost(checkHandler)
    }

    render () {
        return (
            <div className="btn-group">
                <button className='btn btn-light' data-toggle="all" type='button' onClick={this.filterPost}>
                    Все сотрудники
                </button>
    
                <button className='btn btn-outline-light' data-toggle="chosen" type='button' onClick={this.filterPost}>
                    сотрудники на повишение
                </button>
    
                <button className='btn btn-outline-light' data-toggle="salary" type='button' onClick={this.filterPost}>
                    ЗП больше 1000$
                </button>
            </div>
        )
    }
}
export default AppFilter