import { Request, Response } from "express";
import Fish from "../../models/fish.model";

export const getFishes = async (req: Request, res: Response) => {
  try {
    const fish = await Fish.find();
    res.status(200).json(fish);
  } catch (error) {
    res.status(500).send("Error");
  }
};

export const createFish = async (req: Request, res: Response) => {
  try {
    const { commonName, scientificName, fishImage } = req.body;
    const fish = new Fish({ commonName, scientificName, fishImage });
    await fish.save();
    res.status(201).json(fish);
  } catch (error) {
    res.status(500).send("Error al crear la especie");
  }
};

export const getFish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const fish = await Fish.findById(id);
    res.status(200).json(fish);
  } catch (error) {
    res.status(500).send("Error al obtener la especie");
  }
};

export const updateFish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { commonName, fishImage } = req.body;
    const fish = await Fish.findByIdAndUpdate(id, { commonName, fishImage});
    res.status(200).json(fish);
  } catch (error) {
    return res.status(404).send("Especie no encontrada");
  }
};

export const deleteFish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Fish.findByIdAndDelete(id);
    res.status(204).send("Especie eliminada");
  } catch (error) {
    return res.status(404).send("Especie no encontrada");
  }
};
