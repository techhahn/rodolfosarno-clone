import styled from 'styled-components';

const ThemeWrapper = styled.div`
    position: fixed;
    left: 30%;
    top: 4.5%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

const Tag = styled.p`
    display: flex;
    margin: 0 auto;
    padding-bottom: 0px;
    align-items: center;
    justify-content: flex-start;

    .text {
        display: block;
        color: ${(props) => props.theme.fgColor};
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }

    .line {
        display: block;
        width: 15px;
        height: 1px;
        margin-right: 25px;
        margin-left: 25px;
        background-color: ${(props) => props.theme.fgColor};
    }
`;

const Switch = styled.div`
    display: flex;
    align-self: flex-start;
`;

const SwitchItem = styled.button`
    border: none;
    cursor: ${(props) => props.isActive ? 'default' : 'pointer'};
    position: relative;
    padding: 10px 12px;
    background-color: transparent;

    &:first-child {
        padding-left: 0;
    }

    &:focus {
        outline: none;
    }

    .dot {
        width: 6px;
        height: 6px;
        display: block;
        border-radius: 50px;
        border: 1px solid ${(props) => props.theme.fgColor};
        background-color: ${(props) => props.isActive ? 'transparent' : props.theme.fgColor};
    }
`;



export {ThemeWrapper, Tag, Switch, SwitchItem}