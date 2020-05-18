import React from 'react';

import {useGlobalDispatch, useGlobalState} from '../../context/globalContext';
import {ThemeWrapper, Tag, Switch, SwitchItem} from './styled';

const ThemeSwitcher = () => {
    const {theme} = useGlobalState();
    const dispatch = useGlobalDispatch();

    return(
        <ThemeWrapper>
            <Tag>
                <span className="text">UI</span>
                <span className="line"></span>
                <span className="text">I/A</span>
            </Tag>

            <Switch>
                <SwitchItem
                    isActive={theme === 'lite'}
                    onClick={() => dispatch({type: 'CHANGE-THEME', payload: 'lite'})}
                >
                    <span className="dot"></span>
                </SwitchItem>
                <SwitchItem
                    isActive={theme === 'dark'}
                    onClick={() => dispatch({type: 'CHANGE-THEME', payload: 'dark'})}
                >
                    <span className="dot"></span>
                </SwitchItem>
            </Switch>
        </ThemeWrapper>
    )
}

export default ThemeSwitcher;