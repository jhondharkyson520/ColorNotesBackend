import prismaClient from "../prisma/client";

interface DeleteNoteRequest{
    id: string;
};
class DeleteNoteService{
    async execute({id}: DeleteNoteRequest){         
        const deleteNotes = await prismaClient.notes.delete({
            where: { 
                id: id 
            }
        });

        return deleteNotes;
    };
};

export {DeleteNoteService};
