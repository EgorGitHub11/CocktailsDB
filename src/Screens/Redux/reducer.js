const initialState = {
    categories: [],
    fullCategories: []
}

export function rootReducer(state= initialState, action) {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        case 'GET_FULL_CATEGORIES':
            return{
                ...state,
                fullCategories: action.payload
            }

        default:
            return state;
    }
}

export const getCategories = (categoriesArr) => ({
    type: 'GET_CATEGORIES',
    payload: categoriesArr,
})

export const getFullCategories = (fullCategoriesArr) => ({
    type: 'GET_FULL_CATEGORIES',
    payload: fullCategoriesArr,
})
