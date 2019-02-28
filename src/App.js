/**
 * Created by 邱建强 on 2018/3/25.
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './components/router';
import { browserHistory } from 'react-router';

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <Router history={browserHistory} />
            </Provider>
    )
    }
}

export default App;