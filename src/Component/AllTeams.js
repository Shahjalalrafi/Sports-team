import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import SingleTeam from './SingleTeam';

const AllTeams = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, []) 
    return (
        <div>
            <Header />
            <div className="allTeam container">
            {
                teams.map(team => <SingleTeam  teamDetails={team}></SingleTeam>)
            }
            </div>
        </div>
    );
};

export default AllTeams;