import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

const SearchResult = () => {

    const [result, setResult] = useState([])

    let { jobName } = useParams()

    useEffect(() => {
        setResult([])
        axios.get(`jobSearch/${jobName}`)
            .then(res => {
                console.log(res.data)
                setResult(res.data)
            })
    }, [jobName])

    return (
        <div>
            <NavBar />
            {result.length > 0 ?
                <div className="container-fluid">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <td>COMPANY</td>
                                <td>JOB TITLE</td>
                                <td>LOCATION</td>
                                <td>ACTIONS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.company_name}</td>
                                    <td>{item.title}</td>
                                    <td>{item.city}, {item.state} </td>
                                    <td><a href={item.detail_url} target="blank"><button>More Info</button></a></td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div> :
                <img src="https://media1.giphy.com/media/Qc8UoA7NJqx70SfiCL/giphy.gif"
                    alt="loading"
                    style={{
                        height: "200px",
                        width: "200px",
                        marginLeft: "50%"
                    }} />
            }
        </div>
    )
}

export default SearchResult