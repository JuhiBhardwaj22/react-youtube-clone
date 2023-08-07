import React from 'react'
import {COMMENT_DATA} from "../../../utils/constant";
import { CommentList } from './CommentList';

export const CommentContainer = () => {
    const commentData = COMMENT_DATA;
  return (
    <div>
      <span className='font-bold text-xl'>Comment</span>
       {commentData.map((data) =>{
        return  <CommentList comments={[data]}/>
       })}
    </div>
  )
}
