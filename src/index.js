import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import './index.css'
import Routes from "./routes"
import * as serviceWorker from './serviceWorker'

// import Moment from 'moment'
// import momentLocalizer from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

// Moment.locale('en')
// momentLocalizer()

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
