import React, { useEffect } from 'react';
import axios from 'axios';
import Trail from '../Components/Trail';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { TrailsContainer } from '../StyledComponents/TrailsContainer';
import { getMyHikesData } from '../Selectors/selectors';
import useSetHikes from '../Utilities/useSetHikes';
import useSetPreviousPage from '../Utilities/useSetPreviousPage';

const MyHikes = (props) => {
  const { hikes } = useSelector(getMyHikesData);
  const setHikes = useSetHikes();
  const setPreviousPage = useSetPreviousPage();
  const { location } = props;

  setPreviousPage(location);

  const getMyHikes = async () => {
    const resp = await axios.get(
      "https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes"
    );
    const { hikes } = resp.data;
    setHikes(hikes);
  }

  useEffect(() => {
    getMyHikes();
  }, []);

  const renderHikes = () => {
    return hikes?.map(hike => {
      const {
        id,
        name,
        length,
        difficulty,
        location,
        imgMedium
      } = hike;

      return <Trail
            key={ id }
            trailName={ name }
            image={ imgMedium }
            length={ length }
            difficulty={ difficulty }
            location={ location }
          />;
    });
  };

  return (
    <TrailsContainer>
      { renderHikes() }
    </TrailsContainer>
  );
};

export default withRouter(MyHikes);