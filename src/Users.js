import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    getUsers=()=>{
        fetch('https://jsonplaceholderxxx.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                error:true,
                loading:false
            })
        })
    }

    componentDidMount(){
        this.getUsers();
    }

    render(){
        if(this.state.error==true){
            return(
                <div>Sorry, We failed to get data. Try again later</div>
            )
        }

        if(this.state.loading==true){
            return(
                <div>Loading..</div>
            )
        }

        return(
            <div>
                <h1>Users</h1>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </div>
        )
    }
}

export default Users;