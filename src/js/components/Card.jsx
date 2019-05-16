import React, {Component} from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.color};

    &:hover, &:active {
        background-color: ${props => props.color} !important;
    }
`

const getKeywords = (card) => {
    return Object.keys(card).filter(key => card[key] === true).map(keyword => (
        <span className="card-tag">{keyword}</span>
    ));
};

export default class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card-name-container">
                    <h1 className="card-name">{this.props.card.name}</h1>
                    <div className="card-tag-container">{getKeywords(this.props.card)}</div>
                </div>
                <Button className="btn btn-lg btn-dark" color="rgb(56, 56, 56)" onClick={this.props.onReset}>OK</Button>
            </div>
        );
    }
}