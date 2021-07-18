import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Spinner } from 'react-bootstrap';
import Trail from '../Components/Trail';
import axios from 'axios';
import { TrailsContainer } from '../StyledComponents/TrailsContainer';
import { getTrailSearchData } from '../Selectors/selectors';
import useSetPreviousPage from '../Utilities/useSetPreviousPage';
import useSetTrails from '../Utilities/useSetTrails';

const Trails = (props) => {
  const { searchResults } = useSelector(getTrailSearchData);
  const setPreviousPage = useSetPreviousPage();
  const setTrails = useSetTrails();
  const { location } = props;
  setPreviousPage(location);

  const searchReload = async () => {
    const options = {
        method: 'post',
        url: 'https://nameless-wave-57808.herokuapp.com/api/v1/search_reload',
        data: { trail_ids: localStorage.trails?.split(',').map(id => id) }
      };

      const resp = await axios(options);
      const { trails } = resp.data;
      setTrails(trails);
  }
  
  useEffect(() => {
    if (!searchResults.length) {
      searchReload();
    }
  }, []);

  const renderTrails = () => {
    return searchResults.map(trail => {
      return <Trail 
            key = { trail.id }
            trailName = { trail.name }
            image = { trail.imgMedium }
            length = { trail.length }
            difficulty = { trail.difficulty }
            location = { trail.location }
          />;
    });
  };

  return (
    <>
      {
        searchResults.length
          ?
            <TrailsContainer>
              { renderTrails() }
            </TrailsContainer>
          :
            <Spinner animation="border" role="status">
              <span className="sr-only">Searching for trails</span>
            </Spinner>
      }
    </>
  );
};

export default withRouter(Trails);