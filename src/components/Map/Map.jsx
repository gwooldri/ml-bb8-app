import { useState } from 'react';

import Alert from '../Alert/Alert';
import MilitaryBase from '../MilitaryBase/MilitaryBase';
import Navbar from '../Navbar/Navbar';
import NewTicket from '../NewTicket/NewTicket';
import Sidebar from '../Sidebar/Sidebar';
import Convoy from '../Convoy/Convoy';
import PersonDetails from '../PersonDetails/PersonDetails';
import AccordionFilters from '../AccordionFilters/AccordionFilters';
import Position from '../Position/Position';
import Requests from '../Requests/Requests';
import DeliveryRequest from '../DeliveryRequest/DeliveryRequest';

import personToDisplay from '../../data/person-1001.json';
import militaryBaseToDisplay from '../../data/militaryBase-1.json';
import convoyToDisplay from '../../data/convoy-1.json';
import requestsToDisplay from '../../data/requests.json';
import DateOfBirth from '../DateOfBirth/DateOfBirth';
import Photo from '../Photo/Photo';
import CareerHistory from '../CareerHistory/CareerHistory';
import DirectSubordinates from '../DirectSubordinates/DirectSubordinates';

function Map() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const handleAccordionClick = (event) => {
    console.log('handleAccordionClick', event);
    setSelectedFilters([...selectedFilters, event.target.id]);
  };
  const handleRequestsClick = (event) => {
    console.log('handleRequestsClick', event);
    setShowRequests(!showRequests);
  };
  const handleRequestClick = (event) => {
    console.log('handleRequestClick', event);
    setShowRequest(true);
    setShowRequests(false);
  };
  const handleDelivReqClick = (event) => {
    console.log('handleDelivReqClick', event);
    setShowRequest(false);
  };
  return (
    <div>
      {/* <Alert /> */}
      <Navbar />
      <Sidebar handleRequestsClick={handleRequestsClick} />
      <div className='outer-container'>
        <div className='inner-container'>
          {/* <MilitaryBase militaryBase={militaryBaseToDisplay} /> */}
          {/* <Convoy convoy={convoyToDisplay} /> */}
          {showRequest ? (
            <DeliveryRequest handleDelivReqClick={handleDelivReqClick} />
          ) : null}

          {/* <NewTicket /> */}
          {/* <PersonDetails person={personToDisplay} /> */}
          {/* <Position details={personToDisplay} /> */}
          {/* <DateOfBirth details={personToDisplay} /> */}
          {/* <Photo details={personToDisplay} /> */}
          {/* <CareerHistory details={personToDisplay} /> */}
          {/* <DirectSubordinates details={personToDisplay} /> */}
          {showRequests ? (
            <Requests
              requests={requestsToDisplay}
              handleRequestsClick={handleRequestsClick}
              handleRequestClick={handleRequestClick}
            />
          ) : null}
        </div>
      </div>

      <AccordionFilters
        title='Node levels'
        labels={['Level 1', 'Level 2']}
        handleClick={handleAccordionClick}
      />
    </div>
  );
}

export default Map;
