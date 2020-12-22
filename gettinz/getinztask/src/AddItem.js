import React from "react"


class Additem extends React.Component {

    state = {
        toDoAdd: '',
        toDoList: [],
        completedtoDoList: [],
        checked: false
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addItem = () => {
        this.setState({ toDoList: [...this.state.toDoList, this.state.toDoAdd], toDoAdd: '' })
    }

    handleInputClicked = (list) => {
        this.setState({ completedtoDoList: [...this.state.completedtoDoList, list] })
        let newToDoList = this.state.toDoList.filter((listItems) => {
            return listItems !== list
        })
        this.setState({ toDoList: newToDoList })
    }
    handleDelete = (list) => {
        let deleteToDoList = this.state.toDoList.filter((listItems) => {
            return listItems !== list
        })
        this.setState({ toDoList: deleteToDoList })
    }
    handleCompletedDelete = (list) => {
        let deleteCompletedList = this.state.completedtoDoList.filter((listItems) => {
            return listItems !== list
        })
        this.setState({ completedtoDoList: deleteCompletedList })
    }
    render() {
        return (
            <div>
                <div>
                    <h4>Add Item</h4>
                    <input type="text" name="toDoAdd" value={this.state.toDoAdd} onChange={this.handleChange}></input>
                    <button type="button" onClick={this.addItem}>Add</button>
                </div ><br></br> <br></br>
                <div>
                    <h4>Todo</h4>
                    <div>
                        <div>
                            {this.state.toDoList && <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.toDoList.map((list) => {
                                        return (
                                            <tr>
                                                <td>{list}</td>
                                                <td><label><input type="checkbox" onClick={() => this.handleInputClicked(list)} /><span>complete</span></label></td>
                                                <td><i style={{ cursor: 'pointer' }} className="small material-icons" onClick={() => this.handleDelete(list)}>delete</i></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                        </div >
                    </div>
                    <br ></br> <br ></br>
                    <div>
                        <h4>Completed</h4>
                        <div>
                            <div>
                                {this.state.completedtoDoList && < table >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.completedtoDoList.map((list) => {
                                            return (
                                                <tr >
                                                    <td>{list}</td>
                                                    <label> <input type="checkbox" checked="checked" /><span>completed</span> </label>
                                                    <td><i style={{ cursor: 'pointer' }} className="small material-icons" onClick={() => this.handleCompletedDelete(list)}>delete</i></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>}
                            </div >
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Additem