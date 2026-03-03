import jwt from 'jsonwebtoken';

export const requireAdmin = (req, res, next) => {
    // 1. Extract Token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Access denied. No token provided.', code: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
        // 2. Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_nestely_admin');

        // 3. Enforce RBAC (Role-Based Access Control)
        if (decoded.role !== 'Admin') {
            return res.status(403).json({ success: false, error: 'Forbidden. Admin access required.', code: 403 });
        }

        // 4. Attach user to request
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, error: 'Invalid or expired token.', code: 401 });
    }
};
