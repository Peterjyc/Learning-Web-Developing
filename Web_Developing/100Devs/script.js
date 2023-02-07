class MakeNetflixTVShows{
    constructor(title, genre, rating, numOfEp){
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.numOfEp = numOfEp;
    }

    play(){
        console.log('playing');
    }
    stop(){
        console.log('Stopping..');
    }
    saveToList(){
        console.log('Saved To List');
    }
}

let bridgerton = new MakeNetflixTVShows('1', '2', '3', '4');
