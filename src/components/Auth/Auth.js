import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {authorize} from '../../ducks/reducer'
import './Auth.css'

export class Auth extends Component{
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
            const {id, username, profile_pic}= res.data[0]
            console.log(this.props.authorize(username, id, profile_pic))
            this.props.authorize(username, id, profile_pic)
        })
    }

    render(){
        return(
            <div className= 'box'>
                <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png'/>
                <h1>Helo</h1>
                </div>
                <input type="text" 
                placeholder='username'
                onChange= {this.handleChangeUsername}
                value= {this.state.username}/>
                <input type="password"
                 placeholder='password'
                 onChange= {this.handleChangePassword}
                 />
                {/* <Link to='/Dashboard' >  */}
                <button onClick= {this.loginUser}>Login</button>
                 {/* </Link> */}
                <Link to='/Dashboard' > <button> to DashBoard</button> </Link>
                {/* <Link to='/Dashboard' > */}
                 <button onClick= {this.registerUser}>Register</button>
                  {/* </Link> */}
            </div>
        )
    }
}



export default connect(null, {authorize})(Auth)