import React from 'react';
import styled from 'styled-components';

export default function MembersCard(props){
    return(
        <div>
            {props.teamMembers.map(member =>{
                return(
                    <div key={member.id}>    
                        <h1>Member Name: {member.name}</h1>
                        <h2>Email: {member.email}</h2>
                        <h2>role: {member.role}</h2>
                    </div>  
                );
            })}
            
        </div>
    );
};