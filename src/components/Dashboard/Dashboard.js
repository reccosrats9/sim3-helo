import React, {Component} from 'react';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            posts: [],
            search: '',
            userposts: true
        }
    }

    render(){
        return(
            <div>
                <input type="text" placeholder= 'search'/>
                <div>My Posts <input id="checkBox" type="checkbox"/> </div>
                {this.state.posts.map(post=>{
                    return(
                        <div>
                            {post.title}
                            {post.author}
                            {post.authorPic}
                        </div>
                    )
                })}
            </div>
        )
    }
}