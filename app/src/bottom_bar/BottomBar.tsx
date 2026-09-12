import type React from "react";
import timelines from "../TimeLines";

interface Props {
    SelectedEvent: number;
    SetSelectedEvent: (value: number) => void;
    SelectedTimeline: number;
}

function handleChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>, SetSelectedEvent: (value: number) => void){
    console.log(e.target.value);
    SetSelectedEvent(Number(e.target.value));
}
function BottomBar({SelectedEvent, SetSelectedEvent, SelectedTimeline}: Props) {
    // console.log(SelectedTimeline);
    let maxRange = 0;
    if (SelectedTimeline!==-1){
        console.log(timelines[SelectedTimeline].length - 2);
        maxRange = timelines[SelectedTimeline].length - 2;
    }

    return   <input type="range" id="timeline" className="timeline" name="timeline" min="0" max={maxRange} value={SelectedEvent} onChange={e => {handleChange(e, SetSelectedEvent)}}/>
}

export default BottomBar