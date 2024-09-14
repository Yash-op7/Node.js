const posts = [
    {id:1 , title: 'Post 1'},
    {id:2, title: 'Post 2'}
];

export const getPosts = () => posts;
then in index.js
import { getPosts } from './postController.js';   // .js is important else error

or
export { getPosts };
import { getPosts } from './postController.js';   // .js is important else error

or export it as default so you can import one thing which will by default become this

export default getPosts;

or you might want to export one thing as a default and then others as non defaults
so consider

export const getPostsLength = () => posts.length;

export default getPosts;

so this will export getPosts as default and getPostsLength as custom and these can be imported like so:
import getPosts, { getPostsLength } from './postController.js';


