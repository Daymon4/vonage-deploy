import OpenTok from 'opentok';

class SessionService {
    constructor(apiKey, secret) {
        this.apiKey = apiKey;
        this.secret = secret;
        this.session = null;
        this.opentok = new OpenTok(apiKey, secret);
        this.createSession();
    }

    createSession = () => {
        if (this.session) {
            return this.session.sessionId;
        }

        this.opentok.createSession(
            { mediaMode: 'relayed' },
            (error, session) => this.setSession(error, session)
        )
    }

    getSessionId = () => {
        if (!this.session) {
            return '';
        }

        return this.session.sessionId;
    }

    setSession = (error, session) => {
        if (error) {
            console.error(error);

            return;
        }

        this.session = session;
    };

    createToken = () => {
        if (!this.session) {
            return '';
        }

        return this.opentok.generateToken(this.session.sessionId);
    }
}

export default SessionService
