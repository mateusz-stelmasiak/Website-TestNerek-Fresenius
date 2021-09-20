import "./BloodParameterRange.css"
import React from 'react';
import Slider from '@material-ui/core/Slider';


export default function BloodParameterRange({value, norm, chosenUnit}) {
    let lowerBound = norm[chosenUnit] / 2;
    let upperBound = norm[chosenUnit];
    let max= upperBound+0.2*upperBound;

    //makes sure given value stays in range
    let validateValue = (value) => {
        let v = value;
        let l = "Twój wynik";

        if (v === undefined) {
            v = 0;
            l=""
        } else if(v<0){
            v=0;
            l = "Poza skalą!"
        }
        else if (v >max) {
            v=max;
            l = "Wynik poza skalą!"
        }


        return {value: v, label: <span className="patientValue">{l}</span>}
    }

    const marks = [
        // {
        //     value: 0,
        //     label: '0',
        // },
        {
            value: lowerBound,
            label:
                <div>
                    <div>{lowerBound}</div>
                     MIN
                </div>,
        },
        {
            value: upperBound,
            label:
                <div>
                <div>{upperBound}</div>
                MAX
            </div>,
        },
        validateValue(value)
    ];


    return (
        <div className="BloodParameterRange">
            <Slider
                key="Slider"
                marks={marks}
                value={value === undefined ? 0 : [lowerBound, upperBound]}
                step={upperBound / 10}
                min={0}
                max={max}
                aria-labelledby="input-slider"
            />
        </div>
    );

}
