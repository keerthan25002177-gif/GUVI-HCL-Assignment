use movie_db

db.watchlist.insertOne({
  movie_id: 1,
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: false
})

db.watchlist.insertMany([
  {
    movie_id: 2,
    title: "Interstellar",
    genre: "Sci-Fi",
    release_year: 2014,
    imdb_rating: 8.6,
    watched: true
  },
  {
    movie_id: 3,
    title: "3 Idiots",
    genre: "Comedy/Drama",
    release_year: 2009,
    imdb_rating: 8.4,
    watched: true
  },
  {
    movie_id: 4,
    title: "KGF Chapter 1",
    genre: "Action",
    release_year: 2018,
    imdb_rating: 8.2,
    watched: false
  },
  {
    movie_id: 5,
    title: "The Dark Knight",
    genre: "Action/Crime",
    release_year: 2008,
    imdb_rating: 9.0,
    watched: false
  },
  {
    movie_id: 6,
    title: "Avengers: Endgame",
    genre: "Superhero",
    release_year: 2019,
    imdb_rating: 8.4,
    watched: true
  }
])

db.watchlist.find({ watched: false })

db.watchlist.find(
  {},
  { _id: 0, title: 1, genre: 1, imdb_rating: 1 }
)

db.watchlist.deleteOne({ movie_id: 4 })

