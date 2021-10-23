import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdjust} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from "react";
import Tooltip from "react-tooltip-lite";
import "./HighContrastModeSwitch.css"
import {connect} from "react-redux";
import {changeHighContrast} from "../../Redux/Actions/themeActions";
import ReactPixel from 'react-facebook-pixel';

let defaultColors = {
    '--body-color': '#282828',
    '--primary-color': '#03379a',
    '--primary-color-lighter': '#42a2d9',
    '--primary-color-opaque': 'rgba(3,55,154,0.5)',
    '--secondary-color': '#dc5555',
    '--secondary-color-lighter': '#f8bbd0',
    '--section-bg-color': '#f7f6f6',
    '--background-color': 'white',
    '--text-color': 'black',
    '--hyperlink-color': '#0645AD',
    '--partners-text-color': '#A7A39E',
    '--check-input-shadow-color': 'rgba(0,0,0,0.15)',
    '--primary-color-opaque-little':'rgba(3,55,154,0.95)'
}

let highContrastColors = {
    '--body-color': '#282828',
    '--primary-color': '#ff0',
    '--primary-color-lighter': '#ffff7b',
    '--primary-color-opaque': 'rgba(255,255,0,0.5)',
    '--secondary-color': '#fcff3c',
    '--secondary-color-lighter': '#ffff7b',
    '--section-bg-color': '#181818',
    '--background-color': 'black',
    '--text-color': '#f3f302',
    '--hyperlink-color': '#ffff7b',
    '--partners-text-color': '#ffff7b',
    '--check-input-shadow-color': 'rgba(255,191,0,0.71)',
    '--primary-color-opaque-little':'rgba(255,230,0,0.95)'
}

let allColors = [defaultColors, highContrastColors];

function HighContrastModeSwitch({dispatch, highContrast}) {
    let highContrastIcon = <FontAwesomeIcon icon={faAdjust} color={'var(--primary-color)'}/>;

    const toolTipContent = (
        <div className="tooltip-content">
            <div>wysoki kontrast</div>
        </div>
    );

    //update colors on mount, if page refreshed
    useEffect(() => {
        updateColors(highContrast);
    }, [])


    let toogleHighContrast = () => {
        dispatch(changeHighContrast(!highContrast));
        updateColors(!highContrast);
        if(!highContrast){
            ReactPixel.trackCustom('useHighContrast');
        }
    }

    let updateColors = (hContrast) => {
        let newColors = allColors[hContrast ? 1 : 0];
        let rootStyle = document.documentElement.style;
        //iterates over all colors in dict
        for (const [varName, colorValue] of Object.entries(newColors)) {
            rootStyle.setProperty(varName, colorValue);
        }
    }


    return (
        <div
            className="HighContrastModeSwitch"
            onClick={toogleHighContrast}
        >
            <Tooltip
                content={toolTipContent}
                direction="down"
                distance={20}
                padding={'15px'}
            >
                {highContrastIcon}
            </Tooltip>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        highContrast: state.theme.highContrast,
    };
};


export default connect(mapStateToProps)(HighContrastModeSwitch);