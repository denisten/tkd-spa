import updateAppCondition from './update-app-condition'

const reducer = (state, action) => {
    return{
        appCondition: updateAppCondition(state, action)
    }
};

export default reducer;