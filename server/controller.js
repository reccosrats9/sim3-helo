module.exports={

    register: (req,res)=>{
        console.log(req.body)
        let {username, password} =req.body
        req.app.get('db').register_user([username, password])
        .then( user=> res.status(200).send(user))
    },

    login: (req,res)=>{
        console.log(req.body)
        let {username, password}= req.body
        console.log(username, password)
        req.app.get('db').find_user([username, password])
        .then(user=>{
            if(user[0]){
                res.status(200).send(user)
            } else res.status(404).send('No Such User')
        }).catch(err=>console.log(err))
    }

}

// let db= app.get('db')
// let {displayName, picture, id} = profile;
// db.find_user([id]).then(foundUser=>{
//     if(foundUser[0]){
//         done(null, foundUser[0].id)
//     } else {
//         db.create_user([displayName, picture, id]).then(user=>{
//             done(null, user[0].id)