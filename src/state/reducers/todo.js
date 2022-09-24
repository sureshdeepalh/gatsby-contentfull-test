const initialState = {
    name: "Suresh"
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                name: "Herath"
            }
        default: return state
    }
}
export default reducer;