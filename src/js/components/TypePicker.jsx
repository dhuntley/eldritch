import React, {Component} from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.color};

    &:hover, &:active {
        background-color: ${props => props.color} !important;
    }
`

export default class TypePicker extends Component {
    handleClickType = (type) => {
        this.props.onChangeType(type);
    }

    render() {
        return (
            <div className="button-panel">
                <Button color={"rgb(105, 26, 158)"} className="btn btn-lg btn-dark" onClick={() => this.handleClickType("spell")}>Spell</Button>
                <Button color={"rgb(97, 97, 97)"} className="btn btn-lg btn-dark" onClick={() => this.handleClickType("condition")}>Condition</Button>
                <Button color={"rgb(131, 124, 35)"} className="btn btn-lg btn-dark" onClick={() => this.handleClickType("unique")}>Unique Asset</Button>
                <Button color={"rgb(99, 24, 24)"} className="btn btn-lg btn-dark" onClick={() => this.handleClickType("artifact")}>Artifact</Button>
            </div>
        );
    }
}