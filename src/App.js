import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { useStateContext } from './context/ContextProvider';
import { CampaignsReport, KnowledgeBase, MyCampaigns, MyProjects, ProjectDemoVideo, Support } from './pages';



import './App.css';

function App() {

  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar bg-white '>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0'>
            <Sidebar />
          </div>
        )}
        <div className={
          `bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
        }>
          <div className='fixed md:static bg-main-bg navbar w-full'>
            <Navbar />
          </div>

        <div>
          <Routes>
            {/* Projetcs */}
            <Route path='/' element={<MyProjects />} />
            <Route path='/my-projects' element={<MyProjects />} />
            {/* Campaigns */}
            <Route path='/my-campaigns' element={<MyCampaigns />} />
            <Route path='/campaigns-reports' element={<CampaignsReport />} />
            {/* Resources */}
            <Route path='/project-demo-videos' element={<ProjectDemoVideo />} />
            <Route path='/knowledge-base' element={<KnowledgeBase />} />
            <Route path='/support' element={<Support />} />
          </Routes>
        </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
