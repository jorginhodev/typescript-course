// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string;

function useState<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// const newState = useState<string>();
const newState = useState(); // foi definido que seria string por default

newState.setState("foo");
console.log(newState.getState());

// newState.setState(123); // dá erro
// console.log(newState.getState());

// newState.setState(false); // dá erro
// console.log(newState.getState());
