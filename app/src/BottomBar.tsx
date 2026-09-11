import timelines from "./TimeLines";

interface Props {
    selectedEvent: number;
    SelectedTimeline: number;
}

function BottomBar({selectedEvent, SelectedTimeline}: Props) {
    // console.log(SelectedTimeline);
    let maxRange = 0;
    if (SelectedTimeline!==-1){
        console.log(timelines[SelectedTimeline].length - 2);
        maxRange = timelines[SelectedTimeline].length - 2;
    }

    return   <input type="range" id="timeline" className="timeline" name="timeline" min="0" max={maxRange} value={selectedEvent}/>
}

export default BottomBar