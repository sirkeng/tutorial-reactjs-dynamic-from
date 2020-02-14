import React, { useEffect } from 'react'
import  { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { isEmpty, isNil, size } from 'lodash'

import * as actions from '../../actions'

import FormsCondition from './FormCondition'

const Form = ({ history, param, getParamForm, match}) => {
    useEffect(() => {
        if(isEmpty(param.param)) {
            getParamForm(match.params.id)
        }
    })

    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col">
                    {renderContent(history, param.param)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const param = state
    return {
        param
    }
}

export default reduxForm({
    form: 'formIndexFormRport'
})(connect(mapStateToProps, actions)(Form))


const renderContent = (history, { param_exist, param_error, waiting }) => {
    const loading = () => <h5 className="animated fadeIn pt-1 mx-2">Loading...</h5>
    const error = (data) => <h5 className="animated fadeIn pt-1 mx-2 text-danger">{data}</h5>
    
    if(isNil(param_exist) || waiting===true) {
        return loading()
    }

    if(param_error) {
        return error(param_error)
    }
    // console.log(history, { param_exist, param_error, waiting })
    if(size(param_exist.parameters)===0) {
        const RedirectTo = `/report/${param_exist.id}/viewpdf`
        return <Redirect to={RedirectTo} />
    } else {
        return <FormsCondition
                history={history}
                parameters={param_exist} />
    }
}