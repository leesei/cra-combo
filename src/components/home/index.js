import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <div>
      <RaisedButton label="Increment" onClick={props.increment} disabled={props.isIncrementing} />
      <RaisedButton label="Increment Async" onClick={props.incrementAsync} disabled={props.isIncrementing}/>
      </div>

    <div>
      <RaisedButton label="Decrement" onClick={props.decrement} disabled={props.isDecrementing} />
      <RaisedButton label="Decrement Async" onClick={props.decrementAsync} disabled={props.isDecrementing}/>
    </div>

    <div>
      <RaisedButton label="Go to about page via redux" onClick={() => props.changePage()} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
