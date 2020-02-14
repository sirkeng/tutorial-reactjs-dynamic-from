import axios from 'axios'
// import { forEach, find, isNil, isEmpty } from 'lodash'
// import moment from 'moment'

import {
	REPORT_PARAMFORM_EXIST,
	REPORT_PARAMFORM_ERROR,
	REPORT_PARAMFORM_WAIT,
	ROOT_URL
} from './types'

const paramExist = (data) => {
    return {
        type: REPORT_PARAMFORM_EXIST,
        payload: data
    }
}

const paramError = (data) => {
    return {
        type: REPORT_PARAMFORM_ERROR,
        payload: data
    }
}

export const getParamForm = (id_report) => {
    return (dispatch) => {
        dispatch({type: REPORT_PARAMFORM_WAIT})

        const url = `${ROOT_URL}reports/${id_report}`

        axios.get(url, {})
			.then(response => {
                console.log('response.data', response.data)
				dispatch(paramExist(response.data))
		}).catch((error) => {
			console.log('getParamForm:error', error)
            dispatch(paramError(`${error}`))
		})
    }
}