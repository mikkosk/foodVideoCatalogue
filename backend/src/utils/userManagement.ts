import jwt from 'jsonwebtoken';

export interface Token {
    user: string;
    id: string;
}

export const decodedToken = (token: string | undefined): Token => {
    const secret = process.env.SECRET;

    if(!secret || !token || token.substr(0,7) !== 'bearer ') {
        throw new Error("False credentials");
    }

    const decodedToken  = jwt.verify(token.substr(7), secret) as Token;
    
    return decodedToken;
};
