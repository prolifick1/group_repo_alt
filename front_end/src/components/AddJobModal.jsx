import React from 'react';
import { MDBModal, MDBModalHeader, MDBBtn, MDBModalBody, MDBInput, MDBModalFooter } from "mdbreact";
import axios from 'axios';

export default function AddJobModal({ getJobs, modal, toggleModal, companyName, jobTitle, description, companyLink, setCompanyLink, setCompanyName, setDescription, setTitle, setAddedJob, addedJob }) {
    function addJob() {
        let job = {
            company_name: companyName,
            job_title: jobTitle,
            description: description,
            link: companyLink,
        }
        axios.post('jobs', job)
            .then(res => {
                console.log(res.data.message)
                getJobs()
            })
    }

    return (
        <React.Fragment>
            <MDBModal isOpen={modal} toggle={toggleModal}>
                <MDBModalHeader
                    className="text-center"
                    titleClass="w-100 font-weight-bold"
                    toggle={toggleModal}
                >
                    Add new job
                </MDBModalHeader>
                <MDBModalBody>
                    <form className="mx-3 grey-text">
                        <MDBInput type="text" label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        <MDBInput type="text" label="Job Title" value={jobTitle} onChange={(e) => setTitle(e.target.value)} />
                        <MDBInput type="text" label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <MDBInput type="text" label="Company Link" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)} />
                    </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                    <MDBBtn
                        color="info"
                        onClick={() => {
                            toggleModal();
                            addJob();
                            setAddedJob(!addedJob)
                        }}
                    >
                        Add
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>

        </React.Fragment>
    )
}
