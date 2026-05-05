const posts = [
  { id: 1, title: "first Psot", description: "vsdfsdfdf" },
  { id: 2, title: "second Psot", description: "vsdfsdfdf" },
  { id: 3, title: "third Psot", description: "vsdfsdfdf" },
];

export const addPost = (newPost) => {
  posts.push(newPost);
  console.log(posts);
};

export const getPosts = () => {
  return posts;
};
