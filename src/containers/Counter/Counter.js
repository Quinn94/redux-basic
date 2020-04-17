import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0,
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5Counter} />
                <hr />
                <button onClick={()=>this.props.onStoreResults(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResults(strResult.id)}>
                            {strResult.value}
                        </li>))}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: ()=> dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: ()=> dispatch({type: actionTypes.DECREMENT}),
        onAdd5Counter: ()=> dispatch({type: actionTypes.ADD5, value: 5}),
        onSubtract5Counter: ()=> dispatch({type: actionTypes.SUBTRACT5, value: 5}),
        onStoreResults: (res)=>dispatch({type: actionTypes.STORE_RESULTS, result: res}),
        onDeleteResults: (id)=>dispatch({type: actionTypes.DELETE_RESULTS, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//'connect' is a function that returns a hoc. 
//A function that returns a function which takes a component as input. 
//We can pass some configuration into the first function. 1: which slice of the state you need. 2: which actions do you want to dispatch
//1. the state here will be given by react-redux