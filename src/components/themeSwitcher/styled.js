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
    cursor: pointer;
    position: relative;
    padding: 10px 15px 10px 0px;
    background-color: transparent;

    &:focus {
        outline: none;
    }

    .dot {
        width: 8px;
        height: 8px;
        display: block;
        border-radius: 50px;
        border: 1px solid ${(props) => props.theme.fgColor};
        background-color: ${(props) => props.isActive ? props.theme.fgColor: 'transparent'};
    }
`;



export {ThemeWrapper, Tag, Switch, SwitchItem}