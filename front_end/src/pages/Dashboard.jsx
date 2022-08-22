import axios from "axios"
import React, { useState } from "react"
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "../components/NavBar";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Board from 'react-trello'
import AddButton from '../components/AddButton'
import AddJobModal from "../components/AddJobModal";

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

    const components = {
      AddCardLink: () => <button>New Card</button>,
    };


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
                <AddButton toggleModal={toggleModal} />
                <AddJobModal modal={modal} toggleModal={toggleModal} companyName={companyName} 
                  jobTitle={jobTitle} description={description} companyLink={companyLink}/>
                <Board components={components} 
                  data={data} 
                  style={{backgroundColor: 'white'}}
                  editable
                  id="EditableBoard1"
                  onCardAdd={function noRefCheck(){}}
                  onCardClick={function noRefCheck(){}}
                  onCardDelete={function noRefCheck(){}}
                  onDataChange={function noRefCheck(){}}

                />
            </React.Fragment>
        </div>
    )
}

export default Dashboard
