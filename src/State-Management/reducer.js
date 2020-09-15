export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQD_Q3-VqxB4blBuXiEA31khiv42qnvlHcSzptaEk5VhhsaV4LPIbP4R_c-Xp-iJuZblzdaX9G28LahRm-BxQ4MZZbwmu3erEf8RhtKYQ--3YAw59ao2vJlz2YUOMvsuX5IHCapDbuuxD6JuIOoyUJi2uZa7gdcWX0h4ita_uA1HNALi2neO"
}
const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}
export default reducer;