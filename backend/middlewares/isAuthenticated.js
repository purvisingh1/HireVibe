import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        // Check for token in cookies or Authorization header
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        
        // Log the token to see if it's being passed correctly
        console.log("Received token:", token);

        // If no token is found, return a 401 Unauthorized response
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decoded token:", decoded); // Log the decoded token

        // Attach user ID to the request object for further use in the route handler
        req.id = decoded.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Authentication error:", error);

        // Handle specific error cases for expired or invalid tokens
        return res.status(401).json({
            message: error.name === 'TokenExpiredError' ? "Token expired" : "Invalid token",
            success: false,
        });
    }
};

export default isAuthenticated;
