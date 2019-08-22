import React, { useState} from 'react';
import styled from 'styled-components';

const Wrapperdiv = styled.div`
    max-width: 20%;
    background-color: white;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: -1px 0px 25px -6px rgba(255,255,255,1);
    -moz-box-shadow: -1px 0px 25px -6px rgba(255,255,255,1);
    box-shadow: -1px 0px 25px -6px rgba(255,255,255,1);
    border-radius: 25px;
`;

const StyledForm = styled.form`
    max-width: 80%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export default function Form (props){

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: '',
    });

    console.log(teamMember.name, teamMember.email, teamMember.role);
    
    const changeHandler = e => {
        console.log(e.target.value);
        setTeamMember({ ...teamMember, [e.target.name]: e.target.value});
    };

    const submitHandler = e => {
        e.preventDefault();
        const newTeamMember = {
            ...teamMember,
            id: Date.now()
        };
        props.newTeamMemberprops(newTeamMember);
        setTeamMember({
            name: '',
            email: '',
            role: '',
        })
    }
    
    return (
        <Wrapperdiv>
            <StyledForm onSubmit={submitHandler}>
                <label>Team Member's Name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={teamMember.name}
                    onChange={changeHandler}
                />
                <label>Email Address</label>
                <input
                    type='text'
                    name='email'
                    placeholder='Email Address'
                    value={teamMember.email}
                    onChange={changeHandler}
                />
                <label>Role</label>
                <input
                    type='text'
                    name='role'
                    placeholder='Role'
                    value={teamMember.role}
                    onChange={changeHandler}
                />
                <button type='submit'>Submit</button>
            </StyledForm>
        </Wrapperdiv>
    );
};