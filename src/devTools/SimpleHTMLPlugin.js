function SimpleHTMLPlugin() {

}
module.exports = SimpleHTMLPlugin;
SimpleHTMLPlugin.prototype.apply = function (compiler) {
    compiler.plugin("done", function(stats) {
        var jsFilenames = stats.toJson().assetsByChunkName;
        var fs = require('fs');
        fs.readFile('./src/index.template.html', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            for(var i in jsFilenames) {
                console.log('HTML plugin replacing: ', '<!--'+i+'\.js-->', ' => ', '<script src="js/'+jsFilenames[i]+'"></script>');
                var replace = new RegExp('<!--'+i+'\.js-->', 'g');
                data = data.replace(replace, '<script src="js/'+jsFilenames[i]+'"></script>');
            }

            fs.writeFile('./dist/index.html', data, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });

    });
};