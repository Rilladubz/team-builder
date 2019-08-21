import React, { useState } from 'react';
import Form from './Components/Form/Form';
import MembersCard from './Components/MemberCard/MembersCard';
import './App.css';

function App() {
  const [teamMembersList, setTeamMembersList] = useState([]);

  const addNewTeamMember = teamMember => {
    setTeamMembersList([...teamMembersList, teamMember])
  }

  return (
    <div className="App">
     <Form newTeamMemberprops={addNewTeamMember}/>
     <MembersCard teamMembers={teamMembersList}/>
    </div>
  );
}

export default App;
