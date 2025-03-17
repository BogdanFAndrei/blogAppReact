/**
 * createDataContext Function
 * 
 * A utility function that creates a reusable context with actions for state management.
 * This is a higher-order function that takes a reducer, actions object, and initial state
 * to create a Context and Provider component.
 * 
 * @param {Function} reducer - The reducer function to handle state updates
 * @param {Object} actions - Object containing action creator functions
 * @param {Object} initialState - The initial state for the context
 * 
 * @returns {Object} An object containing:
 * - Context: The React Context object
 * - Provider: A component that provides the context to its children
 * 
 * Features:
 * - Automatically binds actions to dispatch
 * - Provides state and actions through context
 * - Reusable across different features of the application
 */

import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();
    

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer (reducer, initialState);
        //actions === {addBlogPost: (dispatch) => {return () => {}}}
        const boundActions ={};
        for (let key in actions) {
            //key === 'addBlogPost'
            boundActions[key] = actions[key](dispatch);
        }
        return <Context.Provider value={{state, ...boundActions}}>
            {children}
        </Context.Provider>

    }

    return {Context, Provider};
};
