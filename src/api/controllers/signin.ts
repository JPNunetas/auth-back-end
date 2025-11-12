import { Request, Response } from "express";

import client from "@/db/client";
import { userExists } from "@/utils/userExists";

export const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (typeof email === "undefined" || typeof password === "undefined") {
        res.status(400).send({
            status: 400,
            message: "Something went wrong!"
        })
        return;
    }

    if (typeof email !== "string" || typeof password !== "string") {
        res.status(400).send({
            status: 400,
            message: "Something went wrong!"
        })
        return;
    }

    const user = await userExists(email);

    if(!user) {
        res.status(400).send({
            status: 400,
            message: "User doens't exists!"
        })
        return;
    }

    const query = `SELECT * FROM sign_in('${email}', '${password}')`;
    const result = await client.query(query);
    const data = result.rows[0];

    res.status(200).send({
        status: 200,
        message: "Successfully logged!",
        data
    })
}