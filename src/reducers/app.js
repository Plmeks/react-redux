const initState = {
    text: '123'
};

export default (state = initState, action) => {
    switch(action.type) {
        case "APP_CHANGE_TEXT":
            return {...state, text: action.payload};
    }

    return state;
};
