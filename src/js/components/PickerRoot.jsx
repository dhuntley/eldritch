import React, {Component} from "react";
import KeywordPicker from "./KeywordPicker";
import TypePicker from "./TypePicker";
import Card from "./Card";
import cards from "../data/cards.json";

export default class PickerRoot extends Component {

    constructor() {
        super();

        this.state = {
            step: 0,
            card: null,
            criteria: {
                type: null,
                keyword: null
            }
        };
    }

    handleChangeType = (type) => {
        const criteria = {...this.state.criteria};
        criteria.type = type;
        this.setState({criteria, step: this.state.step + 1});
    }

    handleChangeKeyword = (keyword) => {
        const criteria = {...this.state.criteria};
        criteria.keyword = keyword;
        this.setState({
            criteria,
            card: this.selectRandomCard(criteria.type, keyword),
            step: this.state.step + 1
        });
    }

    handleReset = () => {
        this.setState({
            step: 0,
            card: null,
            criteria: {
                type: null,
                keyword: null
            }
        });
    }

    selectRandomCard = (type, keyword) => {
        const matchingCards = cards[type + "s"].filter((card) => {
            return card[keyword];
        });

        return matchingCards[Math.floor(Math.random() * matchingCards.length)];
    }

    getKeywords = () => {
        switch (this.state.criteria.type) {
            case "spell":
                return ["glamour", "ritual", "incantation"];
            case "condition":
                return ["talent", "boon", "injury", "madness", "deal", "bane", "restriction", "illness", "pursuit"];
            case "unique":
                return ["ally", "task", "item", "tome", "magical", "relic", "trinket", "tarot", "weapon"];
            case "artifact":
                return ["item", "magical", "relic", "tome", "trinket", "elixir", "weapon"];
            default:
                return [];
        }
    }

    renderTypePicker = () => (
        <TypePicker onChangeType={this.handleChangeType}/>
    )

    renderKeywordPicker = () => (
        <KeywordPicker
            keywords={this.getKeywords()}
            onChangeKeyword={this.handleChangeKeyword}
            onReset={this.handleReset}
        />
    )

    renderRandomCard = () => (
        <Card card={this.state.card} onReset={this.handleReset}/>
    )

    renderStep = () => {
        switch (this.state.step) {
            case 0:
                return this.renderTypePicker();
            case 1:
                return this.renderKeywordPicker();
            case 2:
                return this.renderRandomCard();
            default:
                return null;
        }
    }

    render() {
        return (
            this.renderStep()
        );
    }
}