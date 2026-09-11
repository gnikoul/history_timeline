import { useState } from 'react'
import './App.css'
import SideBar from './SideBar';
import Map from './Map';
import BottomBar from './BottomBar';

function App() {
  const [SelectedTimeline, SetSelectedTimeline] = useState(-1);
  const [SelectedEvent, SetSelectedEvent] = useState(-1);

  return (
    <>
    <div className='appWrapper'>
      <div className='mapAndSideBarWrapper'>
        <div className='mapWrapper'>
          <Map SelectedTimeline={SelectedTimeline} SelectedEvent={SelectedEvent}/>
        </div>
        <div className='sideBarWrapper'>
          <SideBar 
            SelectedTimeline={SelectedTimeline}
            SetSelectedTimeline={SetSelectedTimeline}
            SelectedEvent={SelectedEvent}
            SetSelectedEvent={SetSelectedEvent}
          />
        </div>
      </div>
      <div className='timelineWrapper'>
        <BottomBar selectedEvent={SelectedEvent} SelectedTimeline={SelectedTimeline}/>
      </div>
    </div>
    </>
  )
}

export default App
