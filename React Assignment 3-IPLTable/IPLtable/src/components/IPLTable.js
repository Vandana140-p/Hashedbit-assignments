

// export default IPLTable;
import React, { useEffect, useState } from 'react';

const IPLTable = () => {

    const [ipllist, setipllist] = useState([]);

    const callApi = async () => {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        console.log(data);
        // Sort the data in ascending order by NRR
        data.sort((a, b) => a.NRR - b.NRR);
        setipllist(data);
    }

    // useEffect to call API just once after page load
    useEffect(() => {
        callApi();
    }, []);

    return (
        <>
            <h2 className='bg-primary bg-opacity-25'><center>IPL table 2022</center></h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ipllist.map((item, index) => (
                            <tr key={index}>
                                <td>{item.No}</td>
                                <td>{item.Team}</td>
                                <td>{item.Matches}</td>
                                <td>{item.Won}</td>
                                <td>{item.Lost}</td>
                                <td>{item.Tied}</td>
                                <td>{item.NRR}</td>
                                <td>{item.Points}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default IPLTable;
