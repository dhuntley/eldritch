import React, {Component} from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.color};

    &:hover, &:active {
        background-color: ${props => props.color} !important;
    }
`

export default class KeywordPicker extends Component {
    handleClick = (keyword) => {
        this.props.onChangeKeyword(keyword);
    }

    render() {
        return (
            <div className="button-panel">
                {
                    this.props.showAny ?
                        <Button color="rgb(88, 88, 88)" className="btn btn-lg btn-dark" onClick={() => this.handleClick(null)}>Any</Button>
                        : null
                }
                {
                    this.props.keywords.map((keyword) => (
                        <Button color="rgb(88, 88, 88)" className="btn btn-lg btn-dark" onClick={() => this.handleClick(keyword)}>{keyword}</Button>
                    ))
                }
                <Button color="rgb(56, 56, 56)" className="btn btn-lg btn-dark" onClick={this.props.onReset}>Back</Button>
            </div>
        );
    }
}