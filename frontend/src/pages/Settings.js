import React from 'react';

const Settings = () => (
    <>
    <h1 style={{marginTop: '70px', marginLeft: '20px'}}>Settings</h1>
    <div class="inline field" style={{marginTop: '20px', marginLeft: '20px'}}>
        <div class="ui toggle checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>Receive Notifications</label>
        </div>
    </div><div class="ui form" style={{marginTop: '20px', marginLeft: '20px', marginRight: '1200px'}}>
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