var comments = [
  {
    id: 0,
    userName: "Raghav",
    comment: "This is a comment..."
  }
];

function getAllComments() {
  return comments;
}

function addComment(comment) {
  comment.id = comments.length;
  comments.push(comment);
  return comments[comments.length - 1];
}

// class Comment{
//   constructor(username, comment){
//     this.username = username;
//     this.comment = comment;
//     this.id = comments.length;
//   }

//   addToList() {
//     addComment(this)
//   }
// }

module.exports = {
  getAllComments,
  addComment
};
