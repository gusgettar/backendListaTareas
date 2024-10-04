import e from "express";
import Tarea from "../database/model/tarea.js";

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el producto",
    });
  }
};

export const leerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontro la tarea",
    });
  }
};

export const buscarTarea = async (req, res) => {
  try {
    const tareas = await Tarea.findById(req.params.id);
    res.status(200).json(tareas);
  } catch (error) {
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontro la tarea",
    });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({
        mensaje: "la tarea no fue encontrada",
      });
    }
    await Tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({
      mensaje: "Tarea borrada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo encontrar la tarea",
    });
  }
};

export const actualizarTarea = async(req,res) => {
    try {
        const tareaBuscada = await Tarea.findById(req.params.id)
        if(!tareaBuscada){
           return res.status(404).json({
            mensaje: "La tarea no fue encontrada"
           }) 
        }
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "El producto fue actualizado con exito"
        })
    } catch (error) {
        res.status(500).json({mensaje: "Ocurrio un error al intentar actualizar la tarea"})
        
    }
}