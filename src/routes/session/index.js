import express from 'express';
import SessionService from '../../services/session';

export const router = express.Router();

const apiKey = "47145334";
const secret = "0d8f8394743644319124e445aaf7189b4eaba520";

const sessionService = new SessionService(apiKey, secret);

router.get('/session', (req, res) => {
    const sessionId = sessionService.getSessionId();
    const token = sessionService.createToken();

    const credentials = { apiKey, sessionId, token };
    const jsonCredentials = JSON.stringify(credentials);

    res.end(jsonCredentials);
})
