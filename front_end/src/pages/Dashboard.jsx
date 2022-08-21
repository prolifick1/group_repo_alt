import axios from "axios"
import { useState } from "react"
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Dashboard(props) {

    const [companyName, setCompanyName] = useState('')
    const [jobTitle, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [companyLink, setCompanyLink] = useState('')

    console.log(companyName)
    console.log(jobTitle)
    console.log(description)
    console.log(companyLink)

    function addJob() {
        let job = {
            companyName: companyName,
            jobTitle: jobTitle,
            description: description,
            companyLink: companyLink,
        }
        axios.post('/add', job)
            .then(request => (console.log('job added')))
    }


    return (
        <div>

            <div>
                <button>Test Button</button>
                <form onSubmit={() => addJob()} action="">
                    <input type="text" placeholder="Comapny Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" placeholder="Company Link" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)} />
                    <MDBBtn>submit</MDBBtn>
                </form>


            </div>
            {/* <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9" className="mb-r">
                            <h2 className="text-uppercase my-3">Today:</h2>
                            <div id="events">
                                {events.map(event => (
                                    <Event
                                        key={event.id}
                                        id={event.id}
                                        time={event.time}
                                        title={event.title}
                                        location={event.location}
                                        description={event.description}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </div>
                            <MDBRow className="mb-4">
                                <MDBCol xl="3" md="6" className="mx-auto text-center">
                                    <MDBBtn color="info" rounded onClick={toggleModal}>
                                        Add Event
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="3">
                            <h3 className="text-uppercase my-3">Schedule</h3>
                            <h6 className="my-3">
                                It is going to be busy today. You have{" "}
                                <b>{events.length} events </b>.
                            </h6>
                            <h1 className="my-3">
                                <MDBRow>
                                    <MDBCol xs="3" className="text-center">
                                        <MDBIcon icon="sun" fixed />
                                    </MDBCol>
                                    <MDBCol xs="9">Sunny</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol xs="3" className="text-center">
                                        <MDBIcon icon="thermometer-three-quarters" fixed />
                                    </MDBCol>
                                    <MDBCol xs="9">23°C</MDBCol>
                                </MDBRow>
                            </h1>
                            <p>
                                Don't forget your rain jacket. Today will warm and humid, becoming
                                warm in the afternoon with temperatures between 65 and 73
                                degrees F in Chicago.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBModal isOpen={modal} toggle={toggleModal}>
                    <MDBModalHeader
                        className="text-center"
                        titleClass="w-100 font-weight-bold"
                        toggle={toggleModal}
                    >
                        Add new event
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form className="mx-3 grey-text">
                            <MDBInput
                                name="time"
                                label="Time"
                                icon="clock"
                                hint="12:30"
                                group
                                type="text"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <MDBInput
                                name="title"
                                label="Title"
                                icon="edit"
                                hint="Briefing"
                                group
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <MDBInput
                                name="location"
                                label="Location (optional)"
                                icon="map"
                                group
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <MDBInput
                                name="description"
                                label="Description (optional)"
                                icon="sticky-note"
                                group
                                type="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                            color="info"
                            onClick={() => {
                                toggleModal();
                                addEvent();
                            }}
                        >
                            Add
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </React.Fragment> */}
        </div>


    )


}

export default Dashboard