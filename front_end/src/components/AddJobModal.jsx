import React from 'react';
import { MDBModal, MDBModalHeader, MDBBtn, MDBModalBody, MDBInput, MDBModalFooter } from "mdbreact";
import axios from 'axios';

export default function AddJobModal({ getJobs, modal, toggleModal }) {
    function addJob() {
        let job = {
            company_name: document.querySelector('#aCompany').value,
            job_title: document.querySelector('#aTitle').value,
            description: document.querySelector('#aDescription').value,
            link: document.querySelector('#aLink').value,
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
                        <div class="form-outline">
                            <label class="form-label" for="aCompany">Company Name</label>
                            <input
                                type="text"
                                id="aCompany"
                                class="form-control"
                            />
                        </div>
                        <br></br>
                        <div class="form-outline">
                            <label class="form-label" for="aTitle">Job Title</label>
                            <input
                                type="text"
                                id="aTitle"
                                class="form-control"
                            />
                        </div>
                        <br></br>
                        <div class="form-outline">
                            <label class="form-label" for="aDescription">Description</label>
                            <input
                                type="text"
                                id="aDescription"
                                class="form-control"
                            />
                        </div>
                        <br></br>
                        <div class="form-outline">
                            <label class="form-label" for="aLink">Company Link</label>
                            <input
                                type="text"
                                id="aLink"
                                class="form-control"
                                defaultValue={'http://www.'}
                            />
                        </div>
                        <br></br>
                    </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                    <MDBBtn
                        color="info"
                        onClick={() => {
                            toggleModal();
                            addJob();
                        }}
                    >Add</MDBBtn>
                </MDBModalFooter>
            </MDBModal>

        </React.Fragment>
    )
}
