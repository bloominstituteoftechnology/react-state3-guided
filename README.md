# Advanced State Management GP PART 3

## Requirements

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Chrome >= 100.x
- Redux Devtools extension for Chrome

Other browser/Node/NPM configurations might work but haven't been tested.

## Set Up

- Clone and `npm install`. DO NOT FORK! (Or the "ketchup" script won't work.)
- Launch the project on a development server executing `npm run dev`.
- Visit your app by navigating to `http://localhost:3000` with Chrome.
- Reset to the instructor's remote branch executing `npm run ketchup`.

## Wiring Redux with Thunk

- 🔥 STEP 1 - Install `redux`, `redux-thunk` and `react-redux`
- 🔥 STEP 2 - At the top-level component of the app:
  - 2.1 - Import the needed dependencies:

    ```js
    // frontend/index.js
    import { Provider } from 'react-redux'
    import { legacy_createStore, compose, applyMiddleware } from 'redux'
    import thunk from 'redux-thunk'
    ```

  - 2.2 - Build a dummy combined reducer just for wiring the app:

    ```js
    const initialState = { count: 0 }
    function reducer(state = initialState, action) {
      return state
    }
    ```

  - 2.3 - Build a store that works with Thunk and Redux Devtools:

    ```js
    let store
    export const resetStore = () => {
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
    }
    resetStore()
    ```

  - 2.4 - Wrap the application with the `Provider`:

    ```js
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    ```

- 🔥 STEP 3 - Flesh out the reducer, action types and action creators:

  - 3.1 - __Action types__

    ```js
    // state/action-types.js
    export const INCREMENT = 'INCREMENT'
    ```

  - 3.2 - __Action creators__

    ```js
    // state/action-creators.js
    import * as types from './action-types'

    export function increment(amount) {
      return {
        type: types.INCREMENT,
        payload: amount,
      }
    }
    ```

  - 3.3 - __Combined reducer__

    ```js
    // state/reducer.js
    import { combineReducers } from 'redux'
    import * as types from './action-types'

    const initialCount = 0
    function count(countState = initialCount, action) {
      // note how a reducer just tracks one specific slice now
      switch (action.type) {
        case types.INCREMENT: {
          return countState + action.payload
        }
        default:
          return countState
      }
    }

    export default combineReducers({
      count, // each reducer now only a slice of application state
    })
    ```

  - 3.4 - Fix the imports inside the top of the app, delete dummy reducer:

    ```js
    import { Provider } from 'react-redux'
    import { legacy_createStore, compose, applyMiddleware } from 'redux'
    import thunk from 'redux-thunk'
    import reducer from './state/reducer' // delete the dummy reducer
    ```

- 🔥 STEP 4 - Go to a subcomponent you wish to "connect" to application state:
  - 4.1 - Import `connect` from `react-redux`, and the `increment` action creator:

    ```js
    import { connect } from 'react-redux'
    import * as actions from '../index' // path might be different
    ```

  - 4.2 - Connect the component:

    ```js
    export default connect(st => st, actions)(App) // if connecting App
    ```

  - 4.3 - Render the count, and a button to increment:

    ```js
      // note how both state and the action creator ARRIVE VIA PROPS
      <span>{props.count}</span>
      <button onClick={evt => props.increment(3)}>inc</button>
    ```
