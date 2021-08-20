

let initialState = [
    {
        id:1,
        name:"Phone",
        Price:10000,
        img:"phone.jpeg",
        incart:0
    },
    {
        id:2,
        name:"Car",
        Price:1000000,
        img:"car.webp",
        incart:0
    },
    {
        id:3,
        name:"Play station",
        Price:10000,
        img:"ps.webp",
        incart:0
    },
];

let reducer = (state = initialState, action) =>{
    switch ( action.type ){
        case "ADD_TO_CART":
            let index = state.findIndex((el)=> el.id === action.payload );
            state[index].incart = state[index].incart + 1;
            return state;
    }
}
