var comments = [];

function getAllComments() {
  return comments;
}

function addComment(comment) {
  comments.push(comment);
  return comments[comments.length - 1];
}
