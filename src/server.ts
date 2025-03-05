import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';
import {router} from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof Error) {
            return response.status( 400 ).json({
                error: err.message
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error.'
        });
    }
);

app.listen({ port: 3333, host: '0.0.0.0' }, () => console.log( `Server on port 3333` ));
