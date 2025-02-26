import { Request, Response } from "express";
import {CreateNoteService} from '../services/CreateNoteService'; 

class CreateNoteController{
    async handle(request: Request, response: Response){
        const {title, note, favorite, color} = request.body;
        const createNote = new CreateNoteService();
        const notes = await createNote.execute({
            title,
            note,
            favorite,
            color
        });

        if(notes) {
            return response.status(201).json(notes);                        
        } else {
            return response.status(404).send();
        }

    };
};

export {CreateNoteController};
