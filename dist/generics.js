"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
// const newState = useState<string>();
var newState = useState(); // foi definido que seria string por default
newState.setState("foo");
console.log(newState.getState());
// newState.setState(123); // dá erro
// console.log(newState.getState());
// newState.setState(false); // dá erro
// console.log(newState.getState());
