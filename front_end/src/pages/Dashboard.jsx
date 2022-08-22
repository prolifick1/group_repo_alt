import axios from "axios"
import React, { useState } from "react"
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "../components/NavBar";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

function Dashboard(props) {

    const [companyName, setCompanyName] = useState('')
    const [jobTitle, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [companyLink, setCompanyLink] = useState('')

    const [modal, setModal] = useState(false);

    console.log(modal)

    const toggleModal = () => {
        setModal(!modal);
    };

    console.log(companyName)
    console.log(jobTitle)
    console.log(description)
    console.log(companyLink)

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
        <div>

            {/* <div>
                <button>Test Button</button>
                <form onSubmit={() => addJob()} action="">
                    <input type="text" placeholder="Comapny Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" placeholder="Company Link" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)} />
                    <MDBBtn>submit</MDBBtn>
                </form>


            </div> */}
            <React.Fragment>
                <NavBar />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9" className="mb-r">
                            <MDBRow className="mb-4">
                                <MDBCol xl="3" md="6" className="mx-auto text-center">
                                    <MDBBtn color="info" rounded onClick={toggleModal}>
                                        Add Job
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
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
                            }}
                        >
                            Add
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                <Board data={data} style={{backgroundColor: 'white' }}/>
            </React.Fragment>
        </div>
    )
}

export default Dashboard
