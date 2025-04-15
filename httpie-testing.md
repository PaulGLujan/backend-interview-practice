# HttpIE Testing

## Get All Movies

### Request

http GET localhost:3000/movies

### Response

HTTP/1.1 200 OK
Connection: close
Content-Length: 2693
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 19:03:32 GMT
Etag: W/"a85-G+osH6jShFvNY8uh52IBz1tsjAQ"
X-Powered-By: Express

[{"movieid":1,"title":"The Shawshank Redemption","summary":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","imdblink":"https://www.imdb.com/title/tt0111161/","rating":5},{"movieid":2,"title":"The Godfather","summary":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","imdblink":"https://www.imdb.com/title/tt0068646/","rating":5},{"movieid":3,"title":"The Dark Knight","summary":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","imdblink":"https://www.imdb.com/title/tt0468569/","rating":5},{"movieid":4,"title":"Pulp Fiction","summary":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","imdblink":"https://www.imdb.com/title/tt0110912/","rating":4},{"movieid":5,"title":"Schindler's List","summary":"In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.","imdblink":"https://www.imdb.com/title/tt0108052/","rating":5},{"movieid":6,"title":"Forrest Gump","summary":"The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man named Forrest with an IQ of 75.","imdblink":"https://www.imdb.com/title/tt0109830/","rating":4},{"movieid":7,"title":"The Matrix","summary":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","imdblink":"https://www.imdb.com/title/tt0133093/","rating":4},{"movieid":8,"title":"The Lord of the Rings: The Fellowship of the Ring","summary":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","imdblink":"https://www.imdb.com/title/tt0120737/","rating":5},{"movieid":9,"title":"Fight Club","summary":"An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.","imdblink":"https://www.imdb.com/title/tt0137523/","rating":4},{"movieid":10,"title":"Inception","summary":"A thief who steals corporate secrets through the use of dream-sharing technology is given his inverse task of planting an idea into the mind of a C.E.O.","imdblink":"https://www.imdb.com/title/tt1375666/","rating":4}]

## Add Movie

### Request

http POST localhost:3000/movie --raw '{
"title": "New Movie",
"summary": "A new movie summary",
"imdbLink": "https://www.imdb.com/title/ttxxxxxxx/",
"rating": 5
}'

### Response

HTTP/1.1 201 Created
Connection: close
Content-Length: 130
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 19:07:03 GMT
Etag: W/"82-bHSx7OQNEUcSrsv7Z5sSZAp5OLM"
X-Powered-By: Express

[{"movieid":11,"title":"New Movie","summary":"A new movie summary","imdblink":"https://www.imdb.com/title/ttxxxxxxx/","rating":5}]

## Delete Movie

### Request

http DELETE localhost:3000/movie/6

### Response

HTTP/1.1 200 OK
Connection: close
Content-Length: 279
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 19:10:28 GMT
Etag: W/"117-WB+DAkzG4MSuDkGPwQsoRKayLd4"
X-Powered-By: Express

[{"movieid":6,"title":"Forrest Gump","summary":"The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man named Forrest with an IQ of 75.","imdblink":"https://www.imdb.com/title/tt0109830/","rating":4}]

## Update Movie

### Request

http PATCH localhost:3000/movie/2 --raw '{
"title": "The Good Father"
}'

### Response

HTTP/1.1 200 OK
Connection: close
Content-Length: 231
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 19:12:23 GMT
Etag: W/"e7-ToSTZsCb6jWpZ2vyqL65Z9+KzLo"
X-Powered-By: Express

[{"movieid":2,"title":"The Good Father","summary":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","imdblink":"https://www.imdb.com/title/tt0068646/","rating":5}]

## Get All Movies

### Request

http GET localhost:3000/movies

### Response

HTTP/1.1 200 OK
Connection: close
Content-Length: 2546
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 19:13:20 GMT
Etag: W/"9f2-cE2rJlALCl/exazHp7AkjdfYZYI"
X-Powered-By: Express

[{"movieid":1,"title":"The Shawshank Redemption","summary":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","imdblink":"https://www.imdb.com/title/tt0111161/","rating":5},{"movieid":3,"title":"The Dark Knight","summary":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","imdblink":"https://www.imdb.com/title/tt0468569/","rating":5},{"movieid":4,"title":"Pulp Fiction","summary":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","imdblink":"https://www.imdb.com/title/tt0110912/","rating":4},{"movieid":5,"title":"Schindler's List","summary":"In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.","imdblink":"https://www.imdb.com/title/tt0108052/","rating":5},{"movieid":7,"title":"The Matrix","summary":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","imdblink":"https://www.imdb.com/title/tt0133093/","rating":4},{"movieid":8,"title":"The Lord of the Rings: The Fellowship of the Ring","summary":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","imdblink":"https://www.imdb.com/title/tt0120737/","rating":5},{"movieid":9,"title":"Fight Club","summary":"An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.","imdblink":"https://www.imdb.com/title/tt0137523/","rating":4},{"movieid":10,"title":"Inception","summary":"A thief who steals corporate secrets through the use of dream-sharing technology is given his inverse task of planting an idea into the mind of a C.E.O.","imdblink":"https://www.imdb.com/title/tt1375666/","rating":4},{"movieid":11,"title":"New Movie","summary":"A new movie summary","imdblink":"https://www.imdb.com/title/ttxxxxxxx/","rating":5},{"movieid":2,"title":"The Good Father","summary":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","imdblink":"https://www.imdb.com/title/tt0068646/","rating":5}]
