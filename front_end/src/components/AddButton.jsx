import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default function AddButton({toggleModal}) {
  return(
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
  )
}
