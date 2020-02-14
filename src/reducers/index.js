import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import reportParamFormReducer from './reportParamForm_reducer'

const rootReducer = combineReducers({
    form: formReducer,
    param: reportParamFormReducer
  })
  
  export default rootReducer