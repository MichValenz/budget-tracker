const APP_PREFIX = "FoodFest-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./public/css/style.css",
    "./public/js/index.js"
]

self.addEventListener("install", function (e) {});
