import { Router } from "express";
import { CreateNoteController } from "./controllers/CreateNoteController";
import { ReadNoteController } from "./controllers/ReadNoteController";
import { DeleteNoteController } from "./controllers/DeleteNoteController";
import { UpdateNoteController } from "./controllers/UpdateNoteController";

    const router = Router();
    router.post("/note/create", new CreateNoteController().handle);
    router.get("/note/read", new ReadNoteController().handle);
    router.put("/note/update/:id", new UpdateNoteController().handle);
    router.delete("/note/delete/:id", new DeleteNoteController().handle);

export {router};
