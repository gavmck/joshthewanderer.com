import dotenv from 'dotenv';

dotenv.config();

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
  dist: {
    'main.js': `${config.paths.dist}/scripts/`,
    'sw.js': `${config.paths.dist}/`,
  },
  babelify: {},
};

config.html = {
  src: `${config.paths.app}/**/*.{ico,png,svg,txt,html,xml,json,woff}`,
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

config.deploy = {
  paths: [config.paths.dist],
  rsync: {
    progress: true,
    incremental: true,
    relative: true,
    emptyDirectories: true,
    recursive: true,
    clean: true,
    exclude: [],
    hostname: process.env.DEPLOY_HOSTNAME,
    username: process.env.DEPLOY_USERNAME,
    destination: process.env.DEPLOY_FOLDER,
  },
};

export default config;
