import React, { Component } from 'react';


class Counter extends React.Component {

    render() {
        //console.log('Props', this.props)
        return (
            <div className="m-2">
                <span style={{backgroundColor: this.getBadgeClasses()}} className='p-2'>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm m-2'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        );
    }

    

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes;
        const { value } = this.props.counter;
        value === 0 ? classes = 'yellow' : classes = 'blue';
        return classes;
    }
}
 
export default Counter;