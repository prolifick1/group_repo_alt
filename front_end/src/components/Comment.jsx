import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import 'react-bootstrap-icons';
import axios from 'axios';
import CommentForm from './CommentForm';
import useState from 'react';
export default function Comment({
  user, id, post, 
  isEditing, setIsEditing,
  replies}) {


  const handleEditPost = async(e) => {
    setIsEditing(!isEditing);
    console.log('hi');
    console.log(e.target.parentElement);
    let edited = await axios.put('forums');

  }
  const deletePost = async(e) => {
    if(window.confirm('are you sure you want to delete?')) {
      let deleted = await axios.delete('forums', { data: { id: id} });
      postsList.filter((post) => {
        return post.id !== id;
      });
    }
  }
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
                <div>{post.createdAt}</div>
              </MDBCardGroup>

            </MDBCardGroup>

          </MDBCardGroup>
          <MDBCardTitle className="comments-title">{post.title}</MDBCardTitle>
          <MDBCardText className="comment-text">
            { isEditing &&
            <div>
              <CommentForm submitLabel="edit" initialText={post.body}/> 
            </div>
            }
            {
              !isEditing && <div>{post.body}</div>
            }
          </MDBCardText>
          <span class="post-reply">Reply</span>
            <span class="post-edit" onClick={handleEditPost}>Edit</span>
          <span id="post-delete" onClick={deletePost}>Delete</span>
          <MDBCardGroup>
          
            <i class="bi bi-heart" style={{ fontSize: 18 }}></i>
            <i class="bi bi-chat" style={{ fontSize: 18 }}></i>
            <i class="bi bi-bookmark" style={{ fontSize: 18 }}></i>
          </MDBCardGroup>
          <div>
            {/*   { replies.length > 0 && 
              replies.map((reply) => {
                return <Comment comment={reply} key={reply.id} replies={[]} />     
              })
            }
            */}
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
