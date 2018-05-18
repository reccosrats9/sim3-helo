const initialState={
    username: '',
    id: null,
    profPic: ''
}

const AUTHORIZE= 'AUTHORIZE'

export default function reducer(state=initialState, action){
    switch(action.type){
        case AUTHORIZE: 
            console.log(state)
            return Object.assign({}, state, {
                username: action.payload.username,
                id: action.payload.id,
                profPic: action.payload.profPic
            })
        default: return state
    }
}

export function authorize(username, id, profPic){
    return{
        type: AUTHORIZE,
        payload: {
            username,
            id, 
            profPic
        }
    }
}