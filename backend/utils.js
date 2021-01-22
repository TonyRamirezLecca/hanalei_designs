import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    return jwt.sign(
        { _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
        process.env.JWT_KEY || "THIOJ30390jJKaRANDOMKEYFORDEV",
        { expiresIn: "30d" }
    );
};

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXX <-- this just gets you token part
        jwt.verify(token, process.env.JWT_KEY || "THIOJ30390jJKaRANDOMKEYFORDEV", (err, decode) => {
            if (err) {
                res.status(401).send({ message: "Invalid Token" });
            } else {
                req.user = decode; // decode = the data you used to set the JWT
                next();
            }
        });
    } else {
        res.status(401).send({ message: "No Token" });
    }
};
