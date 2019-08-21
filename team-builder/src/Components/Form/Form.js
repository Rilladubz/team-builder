import React, { useState} from 'react';



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
      
            <form onSubmit={submitHandler}>
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
            </form>
   
    );
};