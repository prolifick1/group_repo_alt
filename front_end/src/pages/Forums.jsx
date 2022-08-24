import React, { useState, useEffect } from 'react';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';
import axios from 'axios';

let commentsMocks = [
  {
    id: "1",
    description: "First comment",
    username: "Jack",
    userId: "1",
    parentId: null,
    createdAt: "2022-08-16T23:00:33.010+02:00",
  },
  {
    id: "2",
    description: "Second comment",
    username: "Alice",
    userId: "2",
    parentId: null,
    createdAt: "2022-08-20T23:00:33.010+02:00",
  },
  {
    id: "3",
    description: "First comment first child",
    username: "Bob",
    userId: "2",
    parentId: "1",
    createdAt: "2022-08-21T23:00:33.010+02:00",
  },
  {
    id: "4",
    description: "Second comment second child",
    username: "Sally",
    userId: "2",
    parentId: "2",
    createdAt: "2022-08-22T23:00:33.010+02:00",
  },
];


export default function Forums({user}) {

  const [commentsList, setCommentsList] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  //only used for mocking data
  const getReplies = commentId => {
    return commentsMocks.filter((comment) => {
      return comment.parentId === commentId;
    }).sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }

  //todo: use db data
  useEffect(() => {
    setCommentsList(commentsMocks);
    //create call to db here and use dependencies array
    async() => {
      let response = await axios.get('forums')
      setCommentsList(response);
    }
  }, [])

  //used for mocking data
  const rootComments = commentsMocks.filter((comment) => {
    return comment.parentId === null;
  });


  const addComment = async(text) => {
    let newComment = {
      'description': text,
      'title': title,
      //parent id might be used for later iterations
      //'parentId': parentId,
      'company_name': "Google",
    };
    try {
      await axios.post('forums', newComment);
      setCommentsList([newComment, ...commentsList]);
      //need response object to include this data + timeCreated, photo and user 
      //(or first and last name)
    }
    catch(error) {
        console.error(error);
    }
  }

  const handleTitleEntry = (e) => {
    setTitle(e.target.value);
  }

  return(

   <div className="comments">
      <h3 className="comments-title">Raytheon Forums</h3>
      <div className="comment-form-title">Write a comment</div>
      <input id="comment-title" value={title} onChange={handleTitleEntry} ></input>
      <CommentForm submitLabel="Write" handleSubmit={addComment} text={text} setText={setText} />
      <div className="comments-container">
        {rootComments.map((rootComment) => { 
          return <Comment key={rootComment.key} comment={rootComment} replies={getReplies(rootComment.id)} />
        } ) }
      </div>
    </div>
  )
}

