import { Request, Response } from "express";
import { UpdateNoteService } from "../services/UpdateNoteService";

class UpdateNoteController{
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {title, note, favorite, color} = request.body;
        const updateNote = new UpdateNoteService();

        const notes = await updateNote.execute({
            id,
            title,
            note,
            favorite,
            color
        });

        if(notes) {
            return response.status(204) .json(notes);            
        } else {
            return response.status(404).send();
        }
    };
};

export {UpdateNoteController};
