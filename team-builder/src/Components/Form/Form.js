import React, { useState} from 'react';

export default function Form (props){
    const [teamMember, setTeamMember] = useState();
    return (
        <div>
            <form>
                <label>Team Member's Name</label>
                <input
                    type='text'
                    name='Name'
                    placeholder='Name'
                    value=''
                />
                <label>Email Address</label>
                <input/>
                <label>Role</label>
                <input/>
            </form>
        </div>
    );
};