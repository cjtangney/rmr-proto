import React from 'react';
import { Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import SeasonPassPage from './pages/Winter/SeasonPass';
import LiftTicketsPage from './pages/Winter/LiftTickets';
import MountainInfoPage from './pages/Winter/MountainInfo';
import MountainSafetyPage from './pages/Winter/MountainSafety';
import RentalsPage from './pages/Winter/Rentals';
import TuningPage from './pages/Winter/Tuning';
import SnowReportPage from './pages/Winter/SnowReport';
import TerrainParkPage from './pages/Winter/TerrainPark';
import TrailMapPage from './pages/Winter/TrailMap';
import GroupsPage from './pages/Winter/Groups';
import WeddingsHomePage from './pages/Weddings/WeddingsHome';
import WeddingCateringPage from './pages/Weddings/WeddingCatering';
import WeddingVendorsPage from './pages/Weddings/WeddingVendors';
import WeddingVenuesPage from './pages/Weddings/WeddingVenues';
import LodgingHomePage from './pages/Lodging/LodgingHome';
import CardiganCabinsPage from './pages/Lodging/CardiganCabins';
import DirectionsPage from './pages/Lodging/Directions';
import LodgingPartnersPage from './pages/Lodging/LodgingPartners';
import LearningCenterHomePage from './pages/LearningCenter/LearningCenterHome';
import BebeWoodPage from './pages/LearningCenter/BebeWood';
import CompetitionPage from './pages/LearningCenter/Competition';
import BirchesPage from './pages/Dining/Birches';
import HarvestCafePage from './pages/Dining/HarvestCafe';
import StoneHearthPage from './pages/Dining/StoneHearth';

export default function Routes(props) {  
  return (
    <div>
      <Route path='/' exact render={ () =>
        <HomePage 
          lifts={props.data.lifts}
          trails={props.data.trails}
        />
      } />
      {/* BUY NOW */}
      <Route path='/SeasonPass' render={ () =>
        <SeasonPassPage />
      } />
      <Route path='/LiftTickets' exact render={ () =>
        <LiftTicketsPage />
      } />
      {/* WINTER */}
      <Route path='/Winter/SnowReport' exact render={ () =>
        <SnowReportPage 
          lifts={props.data.lifts}
          trails={props.data.trails}
        />
      } />
      <Route path='/Rentals' exact render={ () =>
        <RentalsPage />
      } />
      <Route path='/Tuning-Repairs' exact render={ () =>
        <TuningPage />
      } />
      <Route path='/TerrainPark' exact render={ () =>
        <TerrainParkPage />
      } />
      <Route path='/MountainSafety' exact render={ () =>
        <MountainSafetyPage />
      } />
      <Route path='/Winter/TrailMap' exact render={ () =>
        <TrailMapPage />
      } />
      <Route path='/MountainInfo' exact render={ () =>
        <MountainInfoPage />
      } />
      <Route path='/Winter/Groups' exact render={ () =>
        <GroupsPage />
      } />
      {/* LEARN */}
      <Route path='/LearningCenter' exact render={ () =>
        <LearningCenterHomePage />
      } />
      <Route path='/LearningCenter/BebeWood' exact render={ () =>
        <BebeWoodPage />
      } />
      <Route path='/CompetitionCenter/' exact render={ () =>
        <CompetitionPage />
      } />
      {/* DINING */}
      <Route path='/Dining/Birches' exact render={ () =>
        <BirchesPage />
      } />
      <Route path='/Dining/StoneHearth' exact render={ () =>
        <StoneHearthPage />
      } />
      <Route path='/Dining/HarvestCafe' exact render={ () =>
        <HarvestCafePage />
      } />
      {/* WEDDINGS */}
      <Route path='/Weddings' exact render={ () =>
        <WeddingsHomePage />
      } />
      <Route path='/Weddings/Venues' exact render={ () =>
        <WeddingVenuesPage />
      } />
      <Route path='/Weddings/Vendors' exact render={ () =>
        <WeddingVendorsPage />
      } />
      <Route path='/Weddings/Catering' exact render={ () =>
        <WeddingCateringPage />
      } />
      {/* LODGING */}
      <Route path='/Lodging' exact render={ () =>
        <LodgingHomePage />
      } />
      <Route path='/Lodging/CardiganCabins' exact render={ () =>
        <CardiganCabinsPage />
      } />
      <Route path='/Lodging/Partners' exact render={ () =>
        <LodgingPartnersPage />
      } />
      <Route path='/Directions' exact render={ () =>
        <DirectionsPage />
      } />
    </div>
  );
};
