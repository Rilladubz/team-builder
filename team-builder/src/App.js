import React, { useState } from 'react';
import Form from './Components/Form/Form';
import MembersCard from './Components/MemberCard/MembersCard';
import styled from 'styled-components';
import './App.css';

const StyleDiv = styled.div`
  background-color: black;
  text-align: center;
`;

const StyledH1 = styled.h1`
  color: white;
`;

function App() {
  const [teamMembersList, setTeamMembersList] = useState([]);

  const addNewTeamMember = teamMember => {
    setTeamMembersList([...teamMembersList, teamMember])
  }

  return (
    <StyleDiv>
    <StyledH1>Team Builder</StyledH1>
      <Form newTeamMemberprops={addNewTeamMember}/>
      <MembersCard teamMembers={teamMembersList}/>
    </StyleDiv>
  );
}

export default App;
