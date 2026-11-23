import { Router } from "express";
import { getNewPost, createPost, getPosts, getPost, deletePost, updatePost } from "../controllers/postsController.js";

const postsRouter = Router();

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);

postsRouter.get('/:id', getPost);

postsRouter.patch('/:id', updatePost)

postsRouter.delete('/:id', deletePost);

export default postsRouter;