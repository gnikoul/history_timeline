import timelines from "../TimeLines";
import type { MenuScreen } from "./SideBar";

interface Props {
    SetSelectedTimeline: (value: number) => void;
    setActiveMenuScreen: (value: MenuScreen) => void;
}

function handleClick(index: number, SetSelectedTimeline: (value: number) => void, setActiveMenuScreen: (value: MenuScreen) => void) {
    SetSelectedTimeline(index);
    setActiveMenuScreen('EventSelectionScreen');
}

function TimeLineSelectionScreen({SetSelectedTimeline, setActiveMenuScreen}: Props) {
    
    const timelinesList = timelines.map((timeline, index) => (
                        <li key={index} onClick={() => {handleClick(index, SetSelectedTimeline, setActiveMenuScreen)}}>
                            <div className="timelineTitle">
                                {timeline[0].name}
                            </div>
                            <div className="description">
                                {timeline[0].description}
                            </div>
                        </li>
                    ));

    return (
        <div id="TimeLineSelectionScreenWrapper">
        <div className="title">Επέλεξε Χρονολόγιο</div>
        <ul>
            {timelinesList}
        </ul>
        </div>
    )
    
}

export default TimeLineSelectionScreen