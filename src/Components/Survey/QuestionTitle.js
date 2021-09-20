import "./QuestionTitle.css"
import React, {Component} from "react";

class QuestionTitle extends Component{

    render() {
        return (
            <h2 className="QuestionTitle">
                <div className="qNumber">{this.props.qId+1} <span/></div> <span>{this.props.children}</span>
            </h2>
        );
    }

}

export default QuestionTitle;