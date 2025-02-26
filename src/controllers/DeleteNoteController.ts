import { Request, Response } from "express";
import {DeleteNoteService} from '../services/DeleteNoteService'

class DeleteNoteController{
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const deleteNoteService = new DeleteNoteService();
        const notes = await deleteNoteService.execute({id});

        if(notes) {
            return response.status(204).json(notes);            
        } else {
            return response.status(404).send();
        }
    };
};

export {DeleteNoteController};
