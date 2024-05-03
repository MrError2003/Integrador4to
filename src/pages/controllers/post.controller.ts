import { Request, Response } from "express";
import PostModel, { IPost } from "../../models/post.model";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts: IPost[] = await PostModel.find(); // Obtener todas las publicaciones desde la base de datos
    res.render("home", { posts }); 
  } catch (error) {
    res.status(500).send("Error al obtener las publicaciones");
  }
};



