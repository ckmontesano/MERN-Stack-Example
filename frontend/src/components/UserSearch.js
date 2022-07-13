
import { useEffect, useState } from 'react';
import './UserSearch.css';

var stringSimilarity = require("string-similarity");

function UserSearch() {

    const [userBank, setUserBank] = useState([]);
    const [relevantUsers, setRelevantUsers] = useState([]);

    function getUsers() {
        fetch("http://localhost:8080/get_users")
        .then(res => res.json())
        .then(data => {
            setUserBank(data);
            setRelevantUsers(data);
        })
    }

    function searchUsers() {
        let query = document.querySelector(".user-search-input").value;
        let matchingUsers = [];

        for ( let i = 0; i < userBank.length; i++ ) {
            if ( query == userBank[i].name ) {
                matchingUsers.push(userBank[i]);
            }
        }

        if ( query == "" ) {
            matchingUsers = userBank;
        }

        setRelevantUsers(matchingUsers);
    }

    useEffect(() => {
        getUsers();
    }, []);

    const noUsersMessage = relevantUsers.length == 0 ? <div className='user-record no-users'>No Users</div> : "";

    return (
        <div className="user-search-container box">
            <input onKeyUp={searchUsers}
                   autoFocus={true}
                   className="user-search-input"
                   type="text"
                   placeholder="Search for anyone!" />
            <div className="user-search-results-wrapper">
                {
                    relevantUsers.map( (user, index) => {
                        return <div key={index} className="user-record">
                                <div className="user-details">
                                    <span className="user-name">{user.name}</span>
                                    <span className="user-email">{user.email_address}</span>
                                </div>
                               </div>
                    })
                }
                { noUsersMessage }
            </div>
        </div>
    );
}

export default UserSearch;