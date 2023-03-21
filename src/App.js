
import './App.css';
import CakeContainer from './components/CakeContainer';
// import {redux} from 'redux'

// const createStore= redux.createStore



// const initalState = {
//   numOfCakes:10
// }

// const BUY_CAKE = 'BUY_CAKE'

// function buyCake() {
//   return {
//     type:BUY_CAKE,
//     info:'First redux action'
//   }
// }

// const reducer =(state = initalState, action) => {
//   switch(action.type){
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes:state.numOfCakes -1
//     }
//     default: return state
//   }

// }

// const store = createStore(reducer)


function App() {
  return (
    <div className="App">
  <CakeContainer />
    </div>
  );
}

export default App;
