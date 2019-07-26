import React, { Component } from 'react'
interface IProps {

}
interface IItem {
    name: string,
    Id: number
}
class TodoList extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(i: string) {
        if (i !== "") {
            var item = {
                name: i,
                key: Date.now()
            };
            this.setState((prev) => {
                return {
                    items: prev.items.concat(item)
                }
            });
        }
    }

    render() {
        return (<div className="todoMain">
            <div className="Header">
                <form>
                    <input placeholder="entry"></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>);
    };
}

export default TodoList;