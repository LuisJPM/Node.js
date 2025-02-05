import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMS: 15 * 60 * 1000,
    max: 100,
    message: {
        successs: false,
        msg: "Demasiadas peticiones desde esta IP, por favor intente de nuevo en 15 minutos"
    }
});

export default limiter;