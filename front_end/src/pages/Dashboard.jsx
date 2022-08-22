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
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const components = {
      AddCardLink: () => <button>New Card</button>,
    };



    const onCardClick = (cardId, metadata, laneId) => {
      console.log('clicked card in', laneId);
      console.log('state of cardModalIsOpen?', cardModalIsOpen);
      setCardModalIsOpen(!cardModalIsOpen);
    }


    return (
        <div>

            {/* <div>
                <form onSubmit={() => addJob()} action="">
                    <input type="text" placeholder="Comapny Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" placeholder="Company Link" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)} />
                    <MDBBtn>submit</MDBBtn>
                </form>

              class foo extends React.Component{
              state={isOpen: false}

              onCardClick = (cardId, metadata, laneId) => {
              this.setState((prevState) => {
                   return {isOpen: !prevState.isOpen}
              });
              }
                render() {
                   const {isOpen} = this.state;
                    return(
                      <Board>
                        <Modal open={isOpen} />
                     </Board>
                      );
                   }
              }

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
                  onCardClick={onCardClick}
                  onCardDelete={function noRefCheck(){}}
                  onDataChange={function noRefCheck(){}}

                >

                  <React.Fragment>
                    <MDBModal isOpen={cardModalIsOpen} >
                        <MDBModalHeader
                            className="text-center"
                            titleClass="w-100 font-weight-bold"
                        >
                            Add new job
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form className="mx-3 grey-text">
                                <MDBInput type="text" label="Company Name"/>
                                <MDBInput type="text" label="Job Title" onChange={(e) => console.log('hint: setJobTitle(e.target.value)')} />
                                <MDBInput type="text" label="Description" onChange={(e) => console.log('hint: setDescription(e.target.value)')} />
                                <MDBInput type="text" label="Company Link" onChange={(e) => console.log('hint: setCompanyLink(e.target.value)')} />
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn
                                color="info"
                                onClick={() => {
                                    toggleModal();
                                    console.log('saveJob function');
                                }}
                            >
                                Add
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </React.Fragment>
                </Board> 
            </React.Fragment>
        </div>
    )
}

export default Dashboard
