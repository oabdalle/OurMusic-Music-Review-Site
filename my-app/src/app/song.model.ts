export class Song{
    //_id: String;
    songTitle: String;
    artist: String;
    album: String;
    year: String;
    comment: String;
    genre: String;
    avgRating: Number;
    numReviews: Number;
    numRating: Number;
}
export class User{
    username:{String,require:true,unique:true};
    password:{type:String,require:true};
    email:{type:String, require:true,unique:true};
}