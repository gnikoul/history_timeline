import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import timelines from '../TimeLines';
import { useEffect } from 'react';
import { Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';

interface Props {
    SelectedTimeline: number;
    SelectedEvent: number;
    SetSelectedEvent: (value: number) => void;
}

function Map({SelectedTimeline, SelectedEvent, SetSelectedEvent}: Props) {
    let selectedLocationCoords: LatLngExpression = [38.663194, 24.366704];
    let allCoords: [number, number][] = [];
    if (SelectedTimeline !== -1){
        allCoords = timelines[SelectedTimeline].slice(1).map((event) => (event.coords.split(",").map(Number) as [number, number]));
    }
    if (SelectedEvent !== -1)
    {
        selectedLocationCoords = timelines[SelectedTimeline][SelectedEvent+1].coords.split(",").map(Number) as [number, number];
    }
    else if(allCoords.length > 0) {
        const meanLat = allCoords.reduce((sum, coord) => sum + coord[0], 0) / allCoords.length;
        const meanLng = allCoords.reduce((sum, coord) => sum + coord[1], 0) / allCoords.length;
        selectedLocationCoords = [meanLat, meanLng];
    } 
    return (
    <MapContainer  style={{ height: "100%", width: "100%" }} center={selectedLocationCoords} zoom={6}>
        <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView SelectedTimeline={SelectedTimeline} selectedEvent={SelectedEvent} selectedLocationCoords={selectedLocationCoords}/>
        <Markers locations={allCoords} selectedLocation={SelectedEvent} SetSelectedEvent={SetSelectedEvent} />
        <Lines locations={allCoords} />
    </MapContainer>
    );
}

export default Map;

function ChangeView({
    SelectedTimeline,
    selectedEvent,
    selectedLocationCoords
}: {
    SelectedTimeline: number;
    selectedEvent: number;
    selectedLocationCoords: LatLngExpression | null;
}) {
    const map = useMap();

    useEffect(() => {
        if ((selectedEvent !== -1 || SelectedTimeline !== -1) && selectedLocationCoords !== null) {
            map.setView(selectedLocationCoords);
        }
    }, [selectedEvent, selectedLocationCoords, map]);

    return null;
}

function handleMarkerClick(EventId: number, SetSelectedEvent: (value: number) => void) {
    console.log(EventId);
    SetSelectedEvent(EventId);
}
function Markers({ locations, selectedLocation, SetSelectedEvent }: { locations: LatLngExpression[], selectedLocation: number, SetSelectedEvent: (value: number) => void, }) {
    const normalIcon = new Icon({
        iconUrl: "./src/assets/marker-icon-2x.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    const selectedIcon = new Icon({
        iconUrl: "./src/assets/marker-icon-2x-red.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });
    return (
        <>
            {locations.map((position, index) => (
                <Marker eventHandlers={{ click: () => {handleMarkerClick(index, SetSelectedEvent)} }} key={index} position={position} icon={index === selectedLocation ? selectedIcon : normalIcon}>
                    {/* <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                </Marker>
            ))}
        </>
    );
}

function Lines({ locations }: { locations: LatLngExpression[] }) {
    return <Polyline positions={locations} />;
}