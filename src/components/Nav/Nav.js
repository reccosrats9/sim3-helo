import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export function Nav (props){
    console.log(props)
        return(
            <div>
                <img src={props.profPic} alt=""/>
                <h3>{props.username}</h3>
                <Link to='/dashboard' >
                <button>Home</button>
                </Link>
                <Link to='/new' >
                <button>New Post</button>
                </Link>
                <Link to='/' >
                <button>Logout</button>
                </Link>
            </div>
        )
}

function mapStateToProps(state){
   return {
       username: state.username,
       profPic: state.profPic
   }
}

export default connect(mapStateToProps)(Nav)