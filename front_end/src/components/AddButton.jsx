
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";

function AddButton({...props}) {
    return (
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
        </React.Fragment>

    )
}

export default AddButton



