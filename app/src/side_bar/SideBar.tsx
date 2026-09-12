import { useState } from "react";
import NavMenu from "./NavMenu";
import TimeLineSelectionScreen from "./TimeLineSelectionScreen";
import EventSelectionScreen from "./EventSelectionScreen";
import DescriptionScreen from "./DescriptionScreen";

interface Props {
    SelectedTimeline: number;
    SetSelectedTimeline: (value: number) => void;
    SelectedEvent: number;
    SetSelectedEvent: (value: number) => void;
}
export type MenuScreen ='TimeLineSelectionScreen'|'EventSelectionScreen'|'DescriptionScreen';

function SideBar({SelectedTimeline, SetSelectedTimeline, SelectedEvent, SetSelectedEvent}: Props) {
    const [ActiveMenuScreen, SetActiveMenuScreen] = useState<MenuScreen>('TimeLineSelectionScreen');

    let MenuElement;
    switch (ActiveMenuScreen){
        case 'TimeLineSelectionScreen':
            MenuElement = <TimeLineSelectionScreen SetSelectedTimeline={SetSelectedTimeline} setActiveMenuScreen={SetActiveMenuScreen}/>
            break;
        case 'EventSelectionScreen':
            MenuElement = <EventSelectionScreen SelectedTimeline={SelectedTimeline} SetSelectedEvent={SetSelectedEvent} setActiveMenuScreen={SetActiveMenuScreen}/>
            break;
        case 'DescriptionScreen':
            MenuElement = <DescriptionScreen SelectedTimeline={SelectedTimeline} SelectedEvent={SelectedEvent}/>
            break;
        }
    return (
    <>
        <NavMenu 
            SetActiveMenuScreen={SetActiveMenuScreen} 
            SelectedTimeline={SelectedTimeline}
            SetSelectedTimeline={SetSelectedTimeline}
            SelectedEvent={SelectedEvent}
            SetSelectedEvent={SetSelectedEvent}
        />
        {MenuElement}
    </>
    )
}

export default SideBar