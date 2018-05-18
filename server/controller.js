module.exports={

    register: (req,res)=>{
        let {username, password,id} =req.body
        req.app.get('db').register_user([username, password])
        .then( 
            user=> {
                req.session.userid=user.id
                res.status(200).send(user)})
    },

    login: (req,res)=>{
        console.log(req.body)
        let {username, password, id}= req.body
        req.app.get('db').find_user([username, password])
        .then(user=>{
            console.log(user)
            req.session.userid=user.id
            if(user[0]){
                res.status(200).send(user)
            } else res.status(404).send('No Such User')
        }).catch(err=>console.log(err))
    },
    
    getAll: (req,res)=>{
        const {id}=req.params;
        const {userposts, search}= req.query
        if (userposts===true && search){
            req.app.get('db').get_true_search([search]).then(posts=>res.status(200).send(posts))
        }
        else if (userposts===false && !search){
            req.app.get('db').get_false([id]).then(posts=>res.status(200).send(posts))
        }
        else if (userposts===false && search){
            req.app.get('db').get_false_search([id,search]).then(posts=>res.status(200).send(posts))
        } else {req.app.get('db').get_true().then(posts=>res.status(200).send(posts))}

    },
    getOne: (req,res)=>{
        console.log(req.params)
        const {postid}= req.params
        console.log(postid)
        req.app.get('db').get_post([postid])
        .then(post=>res.status(200).send(post))
    }

}
