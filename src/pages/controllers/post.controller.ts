import { Request, Response } from "express";
import Post from "../../models/post.model";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.render('posts/index', { posts });
  } catch (error) {
    res.status(500).send('Error');
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render('comentario/index', { post });
  } catch (error) {
    res.status(500).send('Error');

  }
};



