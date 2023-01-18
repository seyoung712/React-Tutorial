import React from "react";
import Comment from "./Comment"

const comments=[
    {
        name: "박세영",
        comment : "안녕하세요.",
    },
    {
        name: "유재석",
        comment : "hi ㅋㅋ",
    },
    {
        name: "다비치",
        comment : "가수",
    }
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })};
        </div>
    );
}

export default CommentList;