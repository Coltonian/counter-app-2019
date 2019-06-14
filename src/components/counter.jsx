import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags:[]
    };

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return this.state.tags.map(tag => <li key={tag}> {tag} </li>);
    }

    render() {

        return (
            <div>
                {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button> */}
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>);
    }

    // getBadgeClasses() {
    //     let classes = "badge m-2 ";
    //     classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    //     return classes;
    // }

    // formatCount() {
    //     const { count } = this.state;
    //     return count === 0 ? 'Zero' : count;
    // }
}
 
export default Counter;