import timelines from "./TimeLines";
import type { MenuScreen } from "./SideBar";

interface Props {
    SelectedTimeline: number;
    SetSelectedEvent: (value: number) => void;
    setActiveMenuScreen: (value: MenuScreen) => void;
}

function handleClick(eventIndex: number, SetSelectedEvent: (value: number) => void, setActiveMenuScreen: (value: MenuScreen) => void){
    SetSelectedEvent(eventIndex);
    setActiveMenuScreen('DescriptionScreen')
}

function EventSelectionScreen({SelectedTimeline, SetSelectedEvent, setActiveMenuScreen}: Props) {
    const liElements = timelines[SelectedTimeline].slice(1).map((event, index) => (
                <li key={index} onClick={() => {handleClick(index, SetSelectedEvent, setActiveMenuScreen)}}>
                    <div>
                        {event.name}
                    </div>
                    {/* <div>
                        {event.description}
                    </div>
                    <div>
                        {event.coords}
                    </div> */}
                </li>
            ));

    return (
    <>
    <ul>
        {liElements}
    </ul>
    </>
    )
}

export default EventSelectionScreen