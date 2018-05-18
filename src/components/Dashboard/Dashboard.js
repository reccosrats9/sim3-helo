import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Dashboard.css';
import {Link} from 'react-router-dom';


class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            posts: [],
            search: '',
            userposts: true
        }
        this.componentDidMount= this.componentDidMount.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
        const {id}= this.props.id
        const {search, userposts}=this.state.search
        axios.get(`/posts/${id}`).then(res=>{
            console.log(res.data)
            this.setState({posts: res.data})})
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <input type="text" placeholder= 'search'/>
                <div>My Posts <input id="checkBox" type="checkbox"/> </div>
                {this.state.posts.map(post=>{
                    return(
                        <div>
                        <Link to= {`/post/${post.id} `}>
                            <h2> {post.title} </h2>
                        </Link >
                            <h4> {post.username}</h4>
                            <img src={post.img} class= 'img'/> 
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {id: state.id}
}

export default connect(mapStateToProps)(Dashboard)