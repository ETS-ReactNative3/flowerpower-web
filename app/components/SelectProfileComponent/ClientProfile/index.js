/**
*
* ClientProfile
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Profile from './Profile'
import iconeHumanos from 'images/icone-humanos.png';
import iconeAnimals from 'images/icone-animais.png';

const ClientProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  color: #333;
  padding: 50px 0px;
  text-align: center;
`;

const ClientProfileIntro = styled.div`
  margin: 0px 0px 30px 0px;
  padding: 0px 0px;
  font-size: 1.4em;
  font-weight: 500;
`;

const ProfilesWrapper = styled.div`
  margin: 10px 0 0 0;
`;

function ClientProfile() {
  return (
    <ClientProfileWrapper>
      <Grid>
        <ClientProfileIntro>Você ainda possui créditos para realizar <strong style={{ color: `purple` }}>X terapias</strong><br />selecione o novo perfil</ClientProfileIntro>
        <ProfilesWrapper>
          <Row middle="xs" center="xs">
            <Col>
              <Profile src={iconeHumanos} title='Para mim ou parente'/>
            </Col>
            <Col>
              <Profile src={iconeAnimals} title='Para meu cão ou gato'/>
            </Col>
          </Row>
        </ProfilesWrapper>
      </Grid>
    </ClientProfileWrapper>
  );
}

ClientProfile.propTypes = {

};

export default ClientProfile;