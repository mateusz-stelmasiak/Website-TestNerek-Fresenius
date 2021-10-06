import "./Explainer.css"
import Tooltip from 'react-tooltip-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import React from "react";

export default function Explainer({title,content}){
    let questionmarkIcon =<FontAwesomeIcon icon={faQuestion} />;

    const toolTipContent = (
        <div className="tooltip-content">
            <h3>{title}</h3>
            <div>{content}</div>
        </div>
    );

    return (
        <Tooltip
            content={toolTipContent}
            direction="right"
            distance={20}
            eventOn={'onClick'}
            padding={'15px'}
        >
            <span className="Explainer">
                {questionmarkIcon}
            </span>
        </Tooltip>

    );
}