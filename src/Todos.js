import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onChange=(e)=>{
        var todo=e.target.value;
        console.log(todo)
        this.setState({
            todo:todo
        })
    }

    addTodo=(e)=>{
        e.preventDefault();

        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onChange} name="todo"/>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {
                        this.state.todos.map((todo)=>{
                            return <li key={todo}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;