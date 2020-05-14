var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'),
    cssmin = require("gulp-cssmin"), // Минимизация CSS
    autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
    imagemin = require('gulp-imagemin'), // Сжатие изображений
    concat = require("gulp-concat"), // Объединение файлов - конкатенация
    uglify = require("gulp-uglify"), // Минимизация javascript
    rename = require("gulp-rename"), // Переименование файлов
    pug = require('gulp-pug'), // плагин Pug
    htmlbeautify = require('gulp-html-beautify'), // форматирование html кода после pug 
    browserSync = require('browser-sync');// Создаю сервер на браузере

gulp.task("html", function() {
    return gulp.src("src/index.html")
    .pipe(gulp.dest("dist"));
});
gulp.task("html-firstPage", function() {
    return gulp.src("src/insidePages/firstPage/*.html",{ allowEmpty: true })
    .pipe(gulp.dest("dist/insidePages/firstPage/"));
});
gulp.task("html-secondPage", function() {
    return gulp.src("src/insidePages/secondPage/*.html",{ allowEmpty: true })
    .pipe(gulp.dest("dist/insidePages/secondPage/"));
});
gulp.task("html-thirdPage", function() {
    return gulp.src("src/insidePages/thirdPage/*.html",{ allowEmpty: true })
    .pipe(gulp.dest("dist/insidePages/thirdPage/"));
});
gulp.task("html-fourthPage", function() {
    return gulp.src("src/insidePages/fourthPage/*.html",{ allowEmpty: true })
    .pipe(gulp.dest("dist/insidePages/fourthPage/"));
});

gulp.task('htmlbeautify', function() {
    var options = {
        indentSize: 4,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
             'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
             'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ]
    };
return gulp.src('src/pug/index.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('src'))   
});

gulp.task('htmlbeautify-firstPage', function() {
    var options = {
        indentSize: 4,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
             'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
             'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ]
    };
return gulp.src('src/pug/pages/firstPage/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('src/insidePages/firstPage'))   
});

gulp.task('htmlbeautify-secondPage', function() {
    var options = {
        indentSize: 4,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
             'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
             'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ]
    };
return gulp.src('src/pug/pages/secondPage/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('src/insidePages/secondPage'))   
});

gulp.task('htmlbeautify-thirdPage', function() {
    var options = {
        indentSize: 4,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
             'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
             'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ]
    };
return gulp.src('src/pug/pages/thirdPage/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('src/insidePages/thirdPage'))   
});

gulp.task('htmlbeautify-fourthPage', function() {
    var options = {
        indentSize: 4,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
             'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
             'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ]
    };
return gulp.src('src/pug/pages/fourthPage/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('src/insidePages/fourthPage'))   
});

gulp.task('pug', function() {
  return gulp.src("src/pug/pages/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("src/pug"))
      .pipe(browserSync.stream());
});
gulp.task('pug-firstPage', function() {
  return gulp.src("src/pug/pages/firstPage/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("src/pug/pages/firstPage/"))
      .pipe(browserSync.stream());
});
gulp.task('pug-secondPage', function() {
  return gulp.src("src/pug/pages/secondPage/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("src/pug/pages/secondPage/"))
      .pipe(browserSync.stream());
});
gulp.task('pug-thirdPage', function() {
  return gulp.src("src/pug/pages/thirdPage/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("src/pug/pages/thirdPage/"))
      .pipe(browserSync.stream());
});
gulp.task('pug-fourthPage', function() {
  return gulp.src("src/pug/pages/fourthPage/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("src/pug/pages/fourthPage/"))
      .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    port: 8080,
    open: true,
    notify: false
  });
  gulp.watch("dist/*.html").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/firstPage/*.html").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/secondPage/*.html").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/thirdPage/*.html").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/fourthPage/*.html").on('change', browserSync.reload);
  gulp.watch("dist/css/*.css").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/firstPage/css/*.css").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/secondPage/css/*.css").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/thirdPage/css/*.css").on('change', browserSync.reload);
  gulp.watch("dist/insidePages/fourthPage/css/*.css").on('change', browserSync.reload);
  gulp.watch("dist/images/*.+(jpg|jpeg|png|gif|svg)").on('change', browserSync.reload);
  gulp.watch("dist/js/*.js").on('change', browserSync.reload);
});


gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['src/scss/style.scss']) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     }))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку css
    .pipe(browserSync.stream());
  });

gulp.task('sass-firstPage', function() { // Создаем таск "sass"
  return gulp.src(['src/insidePages/firstPage/scss/style.scss']) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     }))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/insidePages/firstPage/css')) // Выгружаем результата в папку css
    .pipe(browserSync.stream());
  });

gulp.task('sass-secondPage', function() { // Создаем таск "sass"
  return gulp.src(['src/insidePages/secondPage/scss/style.scss']) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     }))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/insidePages/secondPage/css')) // Выгружаем результата в папку css
    .pipe(browserSync.stream());
  });

gulp.task('sass-thirdPage', function() { // Создаем таск "sass"
  return gulp.src(['src/insidePages/thirdPage/scss/style.scss']) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     }))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/insidePages/thirdPage/css')) // Выгружаем результата в папку css
    .pipe(browserSync.stream());
  });

gulp.task('sass-fourthPage', function() { // Создаем таск "sass"
  return gulp.src(['src/insidePages/fourthPage/scss/style.scss']) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     }))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/insidePages/fourthPage/css')) // Выгружаем результата в папку css
    .pipe(browserSync.stream());
  });
gulp.task("scripts", function() {
    return gulp.src("src/js/scripts.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task("scripts-firstPage", function() {
    return gulp.src("src/insidePages/firstPage/js/scripts.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/insidePages/firstPage/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task("scripts-secondPage", function() {
    return gulp.src("src/insidePages/secondPage/js/scripts.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/insidePages/secondPage/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task("scripts-thirdPage", function() {
    return gulp.src("src/insidePages/thirdPage/js/scripts.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/insidePages/thirdPage/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task("scripts-fourthPage", function() {
    return gulp.src("src/insidePages/fourthPage/js/scripts.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/insidePages/fourthPage/js")); // директория продакшена, т.е. куда сложить готовый файл
});
gulp.task('imgs', function() {
    return gulp.src("src/images/**/*.+(jpg|jpeg|png|gif|svg)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('src/insidePages/firstPage/scss/*.scss', gulp.parallel('sass-firstPage'));
    gulp.watch('src/insidePages/secondPage/scss/*.scss', gulp.parallel('sass-secondPage'));
    gulp.watch('src/insidePages/thirdPage/scss/*.scss', gulp.parallel('sass-thirdPage'));
    gulp.watch('src/insidePages/fourthPage/scss/*.scss', gulp.parallel('sass-fourthPage'));
    gulp.watch("src/*.html", gulp.parallel('html'));
    gulp.watch("src/insidePages/firstPage/*.html", gulp.parallel('html-firstPage'));
    gulp.watch("src/insidePages/secondPage/*.html", gulp.parallel('html-secondPage'));
    gulp.watch("src/insidePages/thirdPage/*.html", gulp.parallel('html-thirdPage'));
    gulp.watch("src/insidePages/fourthPage/*.html", gulp.parallel('html-fourthPage'));
    gulp.watch("src/js/*.js", gulp.parallel('scripts'));
    gulp.watch("src/insidePages/firstPage/js/*.js", gulp.parallel('scripts-firstPage'));
    gulp.watch("src/insidePages/secondPage/js/*.js", gulp.parallel('scripts-secondPage'));
    gulp.watch("src/insidePages/thirdPage/js/*.js", gulp.parallel('scripts-thirdPage'));
    gulp.watch("src/insidePages/fourthPage/js/*.js", gulp.parallel('scripts-fourthPage'));
    gulp.watch("src/images/*.+(jpg|jpeg|png|gif|svg)", gulp.parallel('imgs'));
    gulp.watch("src/pug/pages/*.pug", gulp.parallel('pug'));
    gulp.watch("src/pug/pages/firstPage/*.pug", gulp.parallel('pug-firstPage'));
    gulp.watch("src/pug/pages/secondPage/*.pug", gulp.parallel('pug-secondPage'));
    gulp.watch("src/pug/pages/thirdPage/*.pug", gulp.parallel('pug-thirdPage'));
    gulp.watch("src/pug/pages/fourthPage/*.pug", gulp.parallel('pug-fourthPage'));
    gulp.watch("src/pug/*.html", gulp.parallel('htmlbeautify'));
    gulp.watch("src/pug/pages/firstPage/*.html", gulp.parallel('htmlbeautify-firstPage'));
    gulp.watch("src/pug/pages/secondPage/*.html", gulp.parallel('htmlbeautify-secondPage'));
    gulp.watch("src/pug/pages/thirdPage/*.html", gulp.parallel('htmlbeautify-thirdPage'));
    gulp.watch("src/pug/pages/fourthPage/*.html", gulp.parallel('htmlbeautify-fourthPage'));
});

gulp.task("default", gulp.parallel("pug","pug-firstPage","pug-secondPage","pug-thirdPage","pug-fourthPage", "htmlbeautify", "htmlbeautify-firstPage", "html", "html-firstPage", "sass","sass-firstPage","sass-secondPage","sass-thirdPage","sass-fourthPage", "scripts", "scripts-firstPage","scripts-secondPage","scripts-thirdPage","scripts-fourthPage", "imgs","browserSync", "watch"));