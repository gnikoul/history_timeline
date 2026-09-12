import { useState } from 'react'
import './App.css'
import SideBar from './side_bar/SideBar';
import Map from './map/Map';
import BottomBar from './bottom_bar/BottomBar';

function App() {
  const [SelectedTimeline, SetSelectedTimeline] = useState(-1);
  const [SelectedEvent, SetSelectedEvent] = useState(-1);

  return (
    <>
    <div className='appWrapper'>
      <div className='mapAndSideBarWrapper'>
        <div className='mapWrapper'>
          <Map 
            SelectedTimeline={SelectedTimeline} 
            SelectedEvent={SelectedEvent} 
            SetSelectedEvent={SetSelectedEvent}
          />
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
        <BottomBar 
          SelectedEvent={SelectedEvent} 
          SetSelectedEvent={SetSelectedEvent}
          SelectedTimeline={SelectedTimeline}
        />
      </div>
    </div>
    </>
  )
}

export default App
