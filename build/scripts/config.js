export const config = {
  src: 'src',
  dist: 'www/js',
  intermediate: 'obj',
  app: {
    src: 'app.js',
    watch: ['src/**/*.ts', '!src/pages/**/*.ts']
  },
  pages: {
    src: 'pages/**/*.js',
    watch: ['pages/**/*.ts']
  }
}