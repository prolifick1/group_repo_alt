import {useState} from 'react';

export default function CommentForm({handleSubmit, submitLabel}) {
  const [text, setText]= useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea class="form-control" id="comment-form-textarea" value={text} onChange={(e) => setText(e.target.value)}>{text} </textarea>
      <button type="submit" class="btn btn-primary btn-block mb-4 comment-form-button">{submitLabel}</button>
    </form>
  )
};
