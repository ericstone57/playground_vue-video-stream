module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/html/video-stream/' // prod
    : '/', // dev
}