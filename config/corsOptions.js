const whitelist = [
    'http://127.0.0.1:5000',
    'http://localhost:3500',
    "https://27.64.77.22",
    "http://192.168.0.11",
    "https://google.com", "https://blogdantr.vercel.app",
    "https://www.youtube.com"
]
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);

        } else {
            callback(new Error(`Not allowed by DANTR`));
        }
    },
    optionsSuccessStatus: 200
}
module.exports = corsOptions;