import React, { useState, useEffect } from 'react';
import Comment from '../components/Comment'

let commentsMocks = [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2022-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "Alice",
      userId: "2",
      parentId: null,
      createdAt: "2022-08-20T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Bob",
      userId: "2",
      parentId: "1",
      createdAt: "2022-08-21T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Sally",
      userId: "2",
      parentId: "2",
      createdAt: "2022-08-22T23:00:33.010+02:00",
    },
  ];


function CommentForm () {
  return (
    <div>the form</div>
  )
}

export default function Forums() {

  const [commentsList, setCommentsList] = useState([]);

  const getReplies = commentId => {
    return commentsMocks.filter((comment) => {
      return comment.parentId === commentId;
    }).sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }

  useEffect(() => {
    setCommentsList(commentsMocks);
  }, [])

  const rootComments = commentsMocks.filter((comment) => {
    return comment.parentId === null;
  });

  return(

   <div className="comments">
    <h1>Hello chumbo</h1>
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write a comment</div>
      <div className="comments-container">
        {rootComments.map((rootComment) => { 
          return <Comment key={rootComment.key} comment={rootComment} replies={getReplies(rootComment.id)} />
        } ) }
      </div>
    </div>
  )
}

