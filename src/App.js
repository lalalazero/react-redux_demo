import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

    constructor(){
        super()
        this.state = {
            'xxx': '你好'
        }
    }

    render() {
        return (
            <div>
                <p>你点击了{this.props.n}次</p>
                <button id='add1' className='button' onClick={()=>this.props.add1()}>加1</button>
                <button id="minus1" className='button' onClick={()=>this.props.minus1()}>减1</button>
                <button id="addIfOdd" className='button' onClick={()=>this.props.addIfOdd(this.props.n)}>如果是单数加1</button>
                <button id="addAsync" className='button' onClick={()=>this.props.addAsync()}>两秒后加1</button>
            </div>
        );
    }
}

function xxx(state) { // mapStateToProperties
    return {
        n: state.n
    }
}

function yyy(dispatch,ownProperties) { // mapDispatchToProperties
    return{
        add1: ()=>{dispatch({type:'add', payload: 1})},
        minus1: ()=>{dispatch({type:'add',payload: -1})},
        addIfOdd: (n)=>{
            console.log(n);
            console.log(ownProperties);
            if(n % 2 === 1){
                dispatch({type: 'add', payload: 1})
            }
        },
        addAsync: ()=>{
            setTimeout(()=>{
                dispatch({type: 'add', payload: 1})
            },2000)
        }
    }
}

export default connect(xxx,yyy)(App);
