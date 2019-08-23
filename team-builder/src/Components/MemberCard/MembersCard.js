import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    background-color: white;
    display: flex;
    max-width: 30%;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 25px;
    margin: 1rem auto;
    -webkit-box-shadow: -1px 0px 25px -6px rgba(255,255,255,1);
    -moz-box-shadow: -1px 0px 25px -6px rgba(255,255,255,1);
    box-shadow: -1px 0px 25px -6px rgba(255,255,255,1);
`;

export default function MembersCard(props){
    return(
        <div>
            {props.teamMembers.map(member =>{
                return(
                    <WrapperDiv key={member.id}> 
                       
                        <h2>Member Name: {member.name}</h2>
                        <p>Email: {member.email}</p>
                        <p>role: {member.role}</p>
                    </WrapperDiv>  
                );
            })}
            
        </div>
    );
};