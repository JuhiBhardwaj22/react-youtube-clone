import React from "react";
import { Comment } from "./Comment";


export const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 ml-5 border-l-black'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))
}