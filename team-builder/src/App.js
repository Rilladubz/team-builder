import React, { useState } from 'react';
import Form from './Components/Form/Form';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState();

  return (
    <div className="App">
     <Form teamMemberList={teamMember}/>
    </div>
  );
}

export default App;
