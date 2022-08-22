import axios from "axios"
import React, { useState } from "react"
import NavBar from "../components/NavBar";
import AddButton from "../components/AddButton";

function Dashboard(props) {

    const [companyName, setCompanyName] = useState('')
    const [jobTitle, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [companyLink, setCompanyLink] = useState('')

    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal);
    };


    function addJob() {
        let job = {
            company_name: companyName,
            job_title: jobTitle,
            description: description,
            link: companyLink,
        }
        axios.post('jobs', job)
            .then(request => (console.log('job added')))
    }


    return (

            <AddButton companyName={companyName} companyLink={companyLink} description={description} jobTitle={jobTitle}  addJob={addJob}/>



    )


}

export default Dashboard