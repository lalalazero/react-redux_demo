import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const reducer = (state, action) => {
    if(state === undefined){
        return {n: 0}
    }else{
        if(action.type === 'add'){
            return {
                n: state.n + action.payload
            }
        }
        return state;

    }
}
const store = createStore(reducer)


function render(){
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root'));
}

render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
