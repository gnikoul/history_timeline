import type { MenuScreen } from "./SideBar";

interface Props {
    SetActiveMenuScreen: (value: MenuScreen) => void;
    SelectedTimeline: number;
    SetSelectedTimeline: (value: number) => void;
    SelectedEvent: number;
    SetSelectedEvent: (value: number) => void;
}

function handleClick(
        SetActiveMenuScreen: (value: MenuScreen) => void, 
        SelectedTimeline: number, 
        SetSelectedTimeline: (value: number) => void, 
        SelectedEvent: number, 
        SetSelectedEvent: (value: number) => void
    ) {
    if (SelectedTimeline === -1) {
        return;
    }
    else if(SelectedEvent === -1) {
        SetActiveMenuScreen('TimeLineSelectionScreen');
        SetSelectedTimeline(-1);
    }
    else {
        SetActiveMenuScreen('EventSelectionScreen');
        SetSelectedEvent(-1);
    }
}

function NavMenu({SetActiveMenuScreen, SelectedTimeline, SetSelectedTimeline, SelectedEvent, SetSelectedEvent}: Props) {
    return (
    <>
        <button onClick={() => {handleClick(SetActiveMenuScreen, SelectedTimeline, SetSelectedTimeline, SelectedEvent, SetSelectedEvent)}}> Go Back</button>
        
    </>
    )

}

export default NavMenu