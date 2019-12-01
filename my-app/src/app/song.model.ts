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
    isHidden: Boolean;
}
export class User{
    username:{String,require:true,unique:true};
    password:{type:String,require:true};
    email:{type:String, require:true,unique:true};
}

export class Review{
    songReviewed: {type:String, require:true};
    submittedBy: {type:String, require:true};
    submittedOn:{type:String,require:true};
    avgRating:{type:String,require:true};
    ratingForObject:{type:String,require:true};
    description:{type:String,require:true};
    numRating:{type:Number}
}
export class Policy{
    text:{type:String, required:true};
}
export class DMCA{
    text:{type:String, required:true};
}
