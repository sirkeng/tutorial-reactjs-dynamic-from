import { 
	REPORT_PARAMFORM_EXIST,
	REPORT_PARAMFORM_ERROR, 
	REPORT_PARAMFORM_WAIT 
} from '../actions/types'

export default (state = {}, action) => {
	// console.log(state, action)
	switch(action.type) {
		case REPORT_PARAMFORM_EXIST:
			return { ...state, 
				param_exist: action.payload, 
				param_error: '',
				waiting: false
			}

		case REPORT_PARAMFORM_ERROR:
			return { ...state, 
				param_exist: '', 
				param_error: action.payload,
				waiting: false
			}

		case REPORT_PARAMFORM_WAIT:
			return { ...state, 
				param_exist: '', 
				param_error: '',
				waiting: true
			}

		default:
			return state
	}
}