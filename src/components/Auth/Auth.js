import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Auth extends Component{
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
        }
        this.handleChangeUsername= this.handleChangeUsername.bind(this)
        this.handleChangePassword=this.handleChangePassword.bind(this)
        this.registerUser= this.registerUser.bind(this)
        this.loginUser= this.loginUser.bind(this)
    }

    handleChangeUsername(e){
        this.setState({username: e.target.value})
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    registerUser(){
        let {username, password}= this.state
        console.log(username, password)
        axios.post('/register', {username, password})
        .then(res=>{res.data})
    }

    loginUser(){
        let {username, password}= this.state
        console.log(username, password)
        axios.post('/login', {username, password})
        .then(res=>{
            console.log(res.data)
            return res.data})
    }

    render(){
        return(
            <div>
                <input type="text" 
                placeholder='username'
                onChange= {this.handleChangeUsername}
                value= {this.state.username}/>
                <input type="password"
                 placeholder='password'
                 onChange= {this.handleChangePassword}
                 />
                <Link to='/Dashboard' > <button onClick= {this.loginUser}>Login</button> </Link>
                <Link to='/Dashboard' > <button onClick= {this.registerUser}>Register</button> </Link>
            </div>
        )
    }
}