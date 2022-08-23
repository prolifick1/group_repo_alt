import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import 'react-bootstrap-icons';

export default function Comment({comment, replies}) {
  return( 
    <div className="comment">
      <MDBCard >
        <MDBCardBody>
          <MDBCardGroup className="top d-flex-column align-items-center">
            <MDBCardGroup className="meta">
              <img
                src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
                class="rounded-circle z-depth-0"
                alt="avatar image"
                height="35"
                width="35"
              />
              <MDBCardGroup className="d-inline-flex flex-column text-meta">
                <div>{comment.username}</div>
                <div>{comment.createdAt}</div>
              </MDBCardGroup>

            </MDBCardGroup>

          </MDBCardGroup>
          <MDBCardTitle className="comments-title">Card title</MDBCardTitle>
          <MDBCardText className="comment-text">
            {comment.body} 
          </MDBCardText>
          Reply Edit Delete
          <MDBCardGroup>
            <i class="bi bi-heart" style={{ fontSize: 18 }}></i>
            <i class="bi bi-chat" style={{ fontSize: 18 }}></i>
            <i class="bi bi-bookmark" style={{ fontSize: 18 }}></i>
          </MDBCardGroup>
          <div>
            { replies.length > 0 && 
              replies.map((reply) => {
                return <Comment comment={reply} key={reply.id} replies={[]} />     
              })
            }
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
