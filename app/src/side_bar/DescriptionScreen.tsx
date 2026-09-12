import timelines from "../TimeLines";
interface Props {
    SelectedTimeline: number;
    SelectedEvent: number;
}

function DescriptionScreen({SelectedTimeline, SelectedEvent}: Props) {
    return (
    <>
    {timelines[SelectedTimeline][SelectedEvent+1].description}
    </>
    )
}

export default DescriptionScreen