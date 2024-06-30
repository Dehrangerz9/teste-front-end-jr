const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/teste-front-end/junior/tecnologia/lista-produtos'  // ajuste o caminho conforme necessário
        },
        secure: false,
    }));
};
