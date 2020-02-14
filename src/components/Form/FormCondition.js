import React, { useEffect, useState } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import FromConponents from './FormComponents'

const FormCondition = ({ parameters: { name, parameters }, handleSubmit }) => {
    const initValue = useSetInit([])

    useEffect(() => {
        window.scrollTo(0, 0)
        document.body.classList.remove('hide-scrollbar')
    })
    // console.log('parameters', parameters)
    //continue about initializeValue state.iniValue

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        console.log('handleFormSubmit:parameters', parameters)
        // console.log('handleFormSubmit:formProps', formProps)
    }

    console.log('initValue1', initValue)
    return (
        <div className="container-fluid mt-1">
            <div className="animated fadeIn">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-header"><h4>{name}</h4></div>
                            <div className="card-body">
                                <form onSubmit={handleFormSubmit}>
                                    {
                                        parameters.map((value, key) => {
                                            return <FromConponents
                                                        key={key}
                                                        initializeValue={initValue}
                                                        OptComponent={value}
                                                        totalComponent={parameters.length}
                                                        countComponent={key+1} 
                                                    />
                                        })
                                    }
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">OK</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'formConditionForm'
})(connect(null, actions)(FormCondition))

const useSetInit = (initialValue) => {
    let [value, setValue] = useState(initialValue)
    console.log('useSetInit:value', value)
    return value
}