const config = {};

config.paths = {
  app: 'app',
  dist: 'dist',
};

config.styles = {
  src: `${config.paths.app}/styles/**/*.scss`,
  dist: `${config.paths.dist}/styles/`,
  sass: {
    outputStyle: 'compressed',
  },
  autoprefixer: {
    browsers: ['> 0.5%'],
    cascade: false,
  },
};

config.scripts = {
  src: `${config.paths.app}/scripts/`,
  files: ['main.js', 'sw.js'],
  dist: `${config.paths.dist}/scripts/`,
  babelify: {},
};

config.html = {
  src: `${config.paths.app}/**/*.{ico,png,svg,txt,html,xml,json}`,
  dist: `${config.paths.dist}`,
};

config.browsersync = {
  files: [`${config.paths.dist}/**/*`],
  port: 9000,
  server: {
    baseDir: config.paths.dist,
  },
};

config.clean = {
  read: false,
};

config.revision = {
  dontRenameFile: [/^\/index.html/g, /^\/robots.txt/g],
};

export default config;
