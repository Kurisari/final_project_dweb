const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    if (process.env.NODE_ENV === 'development') {
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'https://api-productos-lkpz.onrender.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            })
        );
    }
};