import React, {Component} from 'react';
import axios from 'axios';

export default class Post extends Component{
    constructor(){
        super()
        this.state={
            title: '',
            img: '',
            content: '',
            author: '',
            authorPic: ''
        }
    }

    componentDidMount(){
        // console.log(this.props.match.params)
        const {postid}= this.props.match.params
        // console.log(postid)
        axios.get(`/post/${postid}`).then(res=>{
            console.log(res.data)
            console.log(res.data[0].title)

            const {title, img, username, profile_pic}= res.data[0]
            console.log(title,img,username,profile_pic)
            this.setState({
                title,
                img,
                content:'',
                author: username,
                authorPic: profile_pic
            })})
    }

    render(){
        // console.log(this.state)
        const {title, img, content, author, authorPic}= this.state
        // console.log(title,img, content,author, authorPic)
        return(
            <div>
                <h1>{title}</h1>
                <img src={img} alt=""/>
                <p>{content}</p>
                <h4>{author}</h4>
                <img src={authorPic} alt=""/>
            </div>
        )
    }
}