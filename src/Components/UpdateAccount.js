import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import FlashMessage from './FlashMessage';
import { FormWrapper } from '../StyledComponents/FormWrapper';
import { getUserData } from '../Selectors/selectors';

const UpdateAccount = () => {
  const currentUserData = useSelector(getUserData);
  const { user } = currentUserData;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [flashMessage, setFlashMessage] = useState(false);
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");

  window.setUsername = setUsername;
  window.setEmail = setEmail;

  const handleUpdate = async (event) => {
    event.preventDefault();

    const userParams = {
      'user': {
        username: username || user.username,
        email: email || user.email
      }
    };

    const options = {
      method: 'patch',
      url: 'https://nameless-wave-57808.herokuapp.com/api/v1/update_account',
      data: userParams
    };

    const resp = await axios(options);

    if (!resp.data.error) {
      setFlashMessage(true);
      setMessage(resp.data.message);
      setAlert("alert-success");
    } else {
      setFlashMessage(true);
      setMessage(resp.data.message);
      setAlert("alert-danger");
    }
  };

  const handleOnChange = (e) => {
    const targetName = e.target.name;
    const setFormState = window[`set${targetName}`];

    setFormState(e.target.value);
  };

  const unmountFlashMessage = () => {
    setFlashMessage(false);
    setMessage("");
  };

  return (
    <FormWrapper>
      <Card className="form-card">
        <Form onSubmit={handleUpdate} >
          <Form.Group>
            {
              flashMessage
                &&  <FlashMessage
                      unmount={unmountFlashMessage}
                      message={message}
                      alert={alert}
                      className="subtext"
                    />
            }
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label className="headline">Update username</Form.Label>
            <Form.Control
              type="text"
              placeholder={`${user?.username}`}
              onChange={handleOnChange}
              name="Username"
              className="subtext"
              value={username}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="headline">Update email address</Form.Label>
            <Form.Control
              type="text"
              placeholder={`${user?.email}`}
              onChange={handleOnChange}
              name="Email"
              className="subtext"
              value={email}
            />
          </Form.Group>
          <Form.Group controlId="formGroupSubmit" className="small headline">
            <Button variant="success" type="submit" block>Submit</Button>
          </Form.Group>
        </Form>
      </Card>
    </FormWrapper>
  )
};

export default UpdateAccount;