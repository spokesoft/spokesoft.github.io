export const config = {
  src: 'src/styles',
  dist: 'www/css',
  app: {
    src: 'spokesoft.scss',
    watch: ['**/*.scss', '!pages/**/*.scss']
  },
  pages: {
    src: 'pages/**/*.scss',
    watch: ['pages/**/*.scss']
  }
}