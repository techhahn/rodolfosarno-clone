import React, {createContext, useReducer, useContext} from 'react';
import {THEME_KEY} from '../constants';

const DispatchContext = createContext();
const StateContext = createContext();

const defaultState = {
    theme: localStorage.getItem(THEME_KEY) || 'dark'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE-THEME':
            localStorage.setItem(THEME_KEY, action.payload);
            return {
                ...state,
                theme: action.payload
            }
    
        default:
            return state
    }
}

const GlobalContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

const useGlobalState = () => useContext(StateContext);
const useGlobalDispatch = () => useContext(DispatchContext);
 
export {GlobalContext, useGlobalDispatch, useGlobalState};