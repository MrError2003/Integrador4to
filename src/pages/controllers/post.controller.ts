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



