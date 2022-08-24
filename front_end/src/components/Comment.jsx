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
  activePost, setActivePost,
  postsList, 
  text, setText,
  handleTextEntry,
  isEditing, setIsEditing,
  replies}) {


  
  function EditForm() {
      const onSubmit = e => {
        e.preventDefault();
        handleSubmit(text);
        setText("");
      }


    const [editText, setEditText] = ('');

      return (
        <form onSubmit={onSubmit}>
          <textarea class="form-control" id="comment-form-textarea" initialText={post.description} onChange={handleEditChange} value={editText} onChange={(e) => setEditText(e.target.value)} handleSubmit={editPost}></textarea>
          <button type="submit" class="btn btn-primary btn-block mb-4 comment-form-button">Edit</button>
        </form>
      )

  }
  
  const handleEditClick = async(e) => {
    setIsEditing(!isEditing);
    setActivePost(post.id);
    console.log('hi');
    console.log(e.target.parentElement);

  }
  const editPost = async() => {    
    let edited = await axios.put('forums', { params : { id: id, description: post.description } } );

  };

  const deletePost = async(e) => {
    if(window.confirm('are you sure you want to delete?')) {
      let remaining = await axios.delete('forums', { data: { id: id} });
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
            { activePost===id && isEditing &&
            <div>
              <EditForm />
            </div>
            }
            {
              !isEditing && <div>{post.description}</div>
            }
          </MDBCardText>
          <span class="post-reply">Reply</span>
            <span class="post-edit" onClick={handleEditClick}>Edit</span>
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
