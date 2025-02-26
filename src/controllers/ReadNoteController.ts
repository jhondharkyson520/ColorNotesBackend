import { Request, Response } from "express";
import { ReadNoteService } from "../services/ReadNoteService";

class ReadNoteController{
    async handle(request: Request, response: Response) {
        const readNoteService = new ReadNoteService();
        const listNotes = await readNoteService.execute();        
        
        if(listNotes) {
            return response.status(200).json(listNotes);
        } else {
            return response.status(404).send();
        }
    };
};

export {ReadNoteController};
