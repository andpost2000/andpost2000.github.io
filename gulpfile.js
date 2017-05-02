"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();


var rename = require("gulp-rename");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var run = require("run-sequence");
var del = require("del");

gulp.task("clean", function() {
  return del("build");
});


gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 2 versions"
        ]
      })
    ]))

  .pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("css"))
    .pipe(server.stream())

  .pipe(minify("build/css"))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());

});





gulp.task("html:copy", function() {
  return gulp.src("*.html")
    .pipe(gulp.dest("build"));
});



gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
