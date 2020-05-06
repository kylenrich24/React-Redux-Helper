# 🌀 React-Helper4_Forms_APIRequest 🌀

<img src="https://miro.medium.com/max/800/0*2QXFv38dyGxpx5eK.png" height=500 width=900>
<br>
<br>

<h2>🌀 Redux</h2>
<br>
&nbsp; 🌀 &nbsp; &nbsp; STATE management library <br>
<br>
<img src="https://www.esri.com/arcgis-blog/wp-content/uploads/2017/09/react-redux-overview.png" height=230 width=400>
<br>
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--VtRaY29J--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/fewc8ez6r2e2agah717y.png" height=230 width=400>
<br>
ACTION CREATOR/ACTION

```javascript
const createPolicy = (name, amount) => {      // Action Creator
  return {                                    // Action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}
```

<br>
REDUCERS

```javascript
const accounting = (bagOfMoney = 0, action) => {     // state and action params
  switch (action.type){
    case 'CREATE_CLAIM':
      return bagOfMoney - action.payload.amountOfMoneyToCollect
    case 'CREATE_POLICY':
      return bagOfMoney + action.payload.amount
    default:
      return bagOfMoney
  }
}
```

<br>
&nbsp; 🌀 &nbsp; &nbsp;Everytime we want to change state, we ALWAYS have to return a new object/array as opposed to modifying existing data structures.
<br><br>
&nbsp; 🌀 &nbsp; &nbsp;After creating our Action Creators and Reducers we're going to wire them all together in <strong>STORE</strong>
<br><br><br>
STORE

```javascript
const departments = combineReducers({  // our store is composed of the reducers we made
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})
```

```javascript
const store = createStore(departments) // creating our store with our combined reducers
```
<br>
&nbsp; 🌀 &nbsp; &nbsp;We send actions to reducers using dispatch, this modifies state/store()<br>
<br>

```javascript
store.dispatch(createPolicy('Alex', 20))
```

<br>
<br>
<h2>🌀 React-Redux</h2>
<br>
&nbsp; 🌀 &nbsp; &nbsp; React-Redux &nbsp; &nbsp; gets react and redux to work together <br><br>

```bash
$ npm install --save redux react-redux
```

<br>
We get 2 main things from React-Redux:
<br>
<br>
&nbsp; 🌀 &nbsp; &nbsp; Provider &nbsp; - we wire up our STORE here; provides state to the whole <App /> <br>
&nbsp; 🌀 &nbsp; &nbsp; Connect() &nbsp; - communicates with the Provider so other components can connect directly to the Provider even if there are other components between them
<br>
<img src="https://www.kirupa.com/react/images/redux_counter_hoc_200.png" height=400width=300>
<br>
<br>
<img src="https://www.kirupa.com/react/images/react_redux_app_datastore_200.png" height=250 width=360>
<br>
<br>

<h3> React-Redux Project Structure</h3>
<br>
&nbsp; 📁 &nbsp; &nbsp; src <br>
&nbsp;&nbsp;&nbsp;&nbsp; 📁 &nbsp; &nbsp; actions&nbsp;&nbsp - action creators <br> 
&nbsp;&nbsp;&nbsp;&nbsp; 📁 &nbsp; &nbsp; components&nbsp;&nbsp - react components <br> 
&nbsp;&nbsp;&nbsp;&nbsp; 📁 &nbsp; &nbsp; reducers&nbsp;&nbsp - reducers <br> 
&nbsp;&nbsp;&nbsp;&nbsp; 📜 &nbsp; &nbsp; index.js&nbsp;&nbsp - configs for react and redux <br> 
<br>
<br>
<h3>&nbsp; 📁 &nbsp;  actions</h3>

```javascript
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

```
<br>
<br>
<h3>&nbsp; 📁 &nbsp;  reducers</h3>


```javascript
import {combineReducers} from 'redux'

import songsReducer
import selectedSongReducer

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

```
<br>
<br>
<h3>&nbsp; 📜 &nbsp;index.js</h3>


```javascript
import React from "react";                // React config
import ReactDOM from "react-dom";

import { Provider } from "react-redux";   // React-Redux config
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";        // all of our combined reducers

const store = createStore(reducers);      // creating Store with combined reducers

ReactDOM.render(
  <Provider store={store}>                // wiring up the Store with Provider
    <App />
  </Provider>,
  document.querySelector("#root")
);

```

<br>
<br>
<h3> Connect()</h3>
<br>
Let's connect SongList component
<br><br>

```javascript
import {connect} from 'react-redux'
import {selectSong} from '../actions'       // action-creator

const mapStateToProps = (state) => {        // we're putting state.songs to props.songs of <SongList />
  return { songs: state.songs };
};

export default connect(mapStateToProps, {selectSong})(SongList);    // connect config; state and action -creator
// passing our action-creator to connect() grants it dispatch(); gives it the ability to change state
// arbitrarily calling it on its own wont change the state
```










