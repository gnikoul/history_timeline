import timelines from "./TimeLines";
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
                            <div>
                                {timeline[0].name}
                            </div>
                            <div>
                                {timeline[0].description}
                            </div>
                        </li>
                    ));

    return (
        <ul>
            {timelinesList}
        </ul>
        
    )
    
}

export default TimeLineSelectionScreen