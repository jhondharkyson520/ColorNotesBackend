import prismaClient from "../prisma/client";

class ReadNoteService{
    async execute(){
        const allNotes = await prismaClient.notes.findMany({
            select: {
                id: true,
                title: true,
                note: true,
                favorite: true,
                color: true
            },
            orderBy: {
                title: 'asc'
            },
        });

        return allNotes;
    };
};

export {ReadNoteService};
