import Reducer from "../Reducer/Reducer";

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented'})
store.dispatch({ type: 'counter/incremented'})
store.dispatch({ type: 'counter/decremented'})