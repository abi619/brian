import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'

const Tables = () => {
    const [fetchData, setFetchData] = useState([])
    useEffect(() => {
        const fetchingData = async () => {
            const {data} = await axios.get('/api/users')
            setFetchData(data)
        }
        fetchingData()
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th className= 'text-center'>#</th>
                    <th className= 'text-center'>First Name</th>
                    <th className= 'text-center'>Last Name</th>
                    <th className= 'text-center'>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchData.map((x, index) => (
                        <tr className= 'text-center'>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                            <td>{x.country}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Tables
