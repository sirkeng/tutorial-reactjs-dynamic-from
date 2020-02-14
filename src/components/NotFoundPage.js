import React from 'react'

const NotFoundPage = ({ match }) => {
    console.log('match', match)
    return (
        <div className="container-fluid mt-1">
            <div className="animated fadeIn">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-header text-danger text-center">
                                <h4>Not Found Page</h4>
                                <h5>Select -> /report/:id</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage