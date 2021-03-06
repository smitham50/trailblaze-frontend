import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FlashMessage from '../Components/FlashMessage';
import { Figure } from 'react-bootstrap';
import Map from '../Components/Map';
import { withRouter } from 'react-router';
import useSetFlashMessage from '../Utilities/useSetFlashMessage';
import useUnmountFlashMessage from '../Utilities/useUnmountFlashMessage';
import useSetTrail from '../Utilities/useSetTrail';
import useSetHikes from '../Utilities/useSetHikes';
import {
  getTrailShowData,
  getMyHikesData,
  getFormData,
  getUserData
} from '../Selectors/selectors';
import {
  TrailShowContainer,
  ButtonContainer,
  Button,
  InfoContainer
} from '../StyledComponents/StyledTrailShow';

const TrailShow = (props) => {
  const [inHikes, setInHikes] = useState(false);
  const [trailSet, setTrailSet] = useState(false);
  const { trail, fromSearchPage } = useSelector(getTrailShowData);
  const { hikes } = useSelector(getMyHikesData);
  const { currentUserData } = useSelector(getUserData);
  const { messages, alert, flashMessage } = useSelector(getFormData);
  const setFlashMessage = useSetFlashMessage();
  const unmountFlashMessage = useUnmountFlashMessage();
  const setTrail = useSetTrail();
  const setHikes = useSetHikes();

  const fetchHikes = async () => {
    const resp = await axios.get('https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes');
    setHikes(resp.data.hikes);
  }

  const loadTrail = async () => {
    const { match: { params } } = props;

    const resp = await axios.get(`https://nameless-wave-57808.herokuapp.com/api/v1/trails/${params.slug}`);
    const { trail } = resp.data;

    setTrail(trail);
    setTrailSet(true);

    if (!!hikes.find(hike => hike.id === trail.id)) {
      setInHikes(true);
    }
  }

  useEffect(() => {
    fetchHikes();
    loadTrail();
  }, []);

  const addTrailToHikes = async () => {
    const { match: { params } } = props;
    
    const resp = await axios.post('https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/add_hike', {
      user_id: currentUserData.user.id,
      trail_name: params.slug
    });

    const { trail, error, status } = resp.data;
    
    if (status === 'success') {
      const alert = "alert-success";
      const message = `${trail} added to favorites`;
      
      setFlashMessage(alert, [message]);
      setInHikes(true);
    } else {
      const alert = "alert-danger";
      const message = `${error}`;
      
      setFlashMessage(alert, [message]);
    }
  };

  const removeTrailFromHikes = async () => {
    const resp = await axios.delete(`https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/delete_hike/${trail.id}`);
    const { error } = resp.data;
    
    if (!error) {
      const alert = "alert-success";
      const message = `${trail.name} removed from your hikes`;

      setFlashMessage(alert, [message]);
      setInHikes(false);
    } else {
      const alert = "alert-danger";
      const message = `${error}`;

      setFlashMessage(alert, [message]);
    }
  };

  const renderFlashMessage = () => {
    return messages.map((message) => {
      return <FlashMessage
            key={message[0]}
            unmount={unmountFlashMessage}
            message={message}
            alert={alert}
            className="subtext form-flash"
          />
    });
  }

  return (
    trail 
      &&
      <TrailShowContainer>
        <ButtonContainer className="d-flex">
          {
            fromSearchPage
              ? <Button className="headline"><Link to={"/trails"}>Back to search</Link></Button>
              : <Button className="headline"><Link to={"/myhikes"}>Back to hikes</Link></Button>
          }       
          {
            inHikes
              ? <Button onClick={removeTrailFromHikes} className="headline">Remove from favorite hikes</Button>
              : <Button onClick={addTrailToHikes} className="headline">Add to favorite hikes</Button>
          }
          { flashMessage && renderFlashMessage() }
        </ButtonContainer>
        <InfoContainer>
          <Figure className="trail">
            <Figure.Image
              src={trail.imgMedium}
            />
            <Figure.Caption className="headline">{trail.name}</Figure.Caption>
            <Figure.Caption className="subtext">Length: {trail.length} miles</Figure.Caption>
            <Figure.Caption className="subtext">Difficulty: {trail.difficulty}</Figure.Caption>
            <Figure.Caption className="subtext">Location: {trail.location}</Figure.Caption>
          </Figure>
          { trailSet && <Map></Map> }
        </InfoContainer>
      </TrailShowContainer>
  );
};

export default withRouter(TrailShow); 