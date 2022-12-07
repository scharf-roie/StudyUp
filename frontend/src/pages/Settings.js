import React from 'react';

const Settings = () => (
    <>
    <h1 style={{ marginTop: 80, marginLeft: 500, marginRight: 500}}>Settings</h1>
    <div class="inline field" style={{ marginTop: 20, marginLeft: 500, marginRight: 500}}>
    <div class="ui form" style={{marginTop: '20px', marginLeft: '2px', marginRight: '120px'}}>
            <div class="field">
                <label>Receive Notifications</label>
                <select class="ui search dropdown">
                    <option value="" >Select Preference</option>
                    <option value="AF">Yes</option>
                    <option value="AX">No</option>
                </select>
            </div>
        </div>
    </div><div class="ui form" style={{ marginTop: 20, marginLeft: 500, marginRight: 620}}>
            <div class="field">
                <label>Share profile with</label>
                <select class="ui search dropdown">
                    <option value="" >Select Preference</option>
                    <option value="AF">No One</option>
                    <option value="AX">Anyone</option>
                    <option value="AL">Friends</option>
                    <option value="DZ">Friends of Friends</option>
                </select>
            </div>
        </div></>
)

export default Settings