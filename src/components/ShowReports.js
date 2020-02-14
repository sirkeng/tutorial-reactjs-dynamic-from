import React, { useEffect } from 'react'
import Iframe from 'react-iframe'

import { ROOT_URL } from '../actions/types'

const ShowReports = ({ match, location: { state } }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
		document.body.classList.add('hide-scrollbar')
    })

    // console.log('ShowReports', { match, state })
    const params = (state)?(`${state}`):('')
    const urlIfram = `${ROOT_URL}reports/${match.params.id}/viewpdf?${params}`
    console.log('ShowReport', urlIfram)

    return <Iframe url={urlIfram}
                position="relative"
                width="100%"
                className="ifram-reports"/>
                    
}

export default ShowReports