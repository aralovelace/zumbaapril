import {createMachine} from "xstate";

const lightMachine = createMachine({
    // Machine identifier
    id: 'light',

    // Initial state
    initial: 'green',

    // Local context for entire machine
    context: {
        elapsed: 0,
        direction: 'east'
    },

    // State definitions
    states: {
        green: {
            /* ... */
        },
        yellow: {
            /* ... */
        },
        red: {
            /* ... */
        }
    }
});



const XState = () => {
    console.log(lightMachine.initialState);
    console.log(lightMachine.transition('yellow', { type: 'TIMER' }));

    return (<></>);
}


export default  XState;