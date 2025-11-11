import { Request, Response, Router } from "express";

export const getUsers = (req: Request, res: Response) => {
    res.status(200).send({
        status: 200,
        message: 'Found users!'
    })
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.status(200).send({
        status: 200,
        message: 'Found user!'
    });
}

export const createUser = (req: Request, res: Response) => {
    res.status(200).send({
        status: 200,
        message: 'User created!',   
    })
}