const refreshMessages = 'REFRESH_MESSAGES';
const initialState = { messages: [], isLoading: false };

export const actionCreators = {
    refreshAction: () => async (dispatch) => {
        //refresh
        /**
         * 
         *  const url = `api/SampleData/Refresh`;
        const response = await fetch("");
        const msg=await response.json();
        const messages =JSON.parse(JSON.stringify(msg)) 

        dispatch({ type: refreshMessages, messages });
         */
       
    },

    sendToQAction: () => async (dispatch) => {
        //Queue'ya gönderilen mesaj
        const url = `api/SampleData/SendToQ`;
        const response = await fetch(url);
    }
}


export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === refreshMessages) {
        return {
            ...state,
            messages: action.messages,
            isLoading: false
        };
    }
    return state;
};