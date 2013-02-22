(function(context){

    var tags = [
        "artist", "title", "album", "year", "comment", "track", "genre", "lyrics", "picture"
    ];

    context.getTags = function(file, done){
        var url = file.urn || file.name;
        ID3.loadTags(
            url, 
            function() {
                if(typeof done !== 'undefined'){
                    done(ID3.getAllTags(url));    
                }
            }, 
            {
                tags: tags, 
                dataReader : FileAPIReader(file)
            }
        );
    }
    
}(window));