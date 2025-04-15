CREATE TABLE IF NOT EXISTS Movies (
    MovieID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Summary TEXT,
    IMDBLink TEXT,
    Rating INT CHECK (
        Rating >= 1
        AND Rating <= 5
    )
);

INSERT INTO
    Movies (Title, Summary, IMDBLink, Rating)
VALUES
    (
        'The Shawshank Redemption',
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        'https://www.imdb.com/title/tt0111161/',
        5
    ),
    (
        'The Godfather',
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        'https://www.imdb.com/title/tt0068646/',
        5
    ),
    (
        'The Dark Knight',
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        'https://www.imdb.com/title/tt0468569/',
        5
    ),
    (
        'Pulp Fiction',
        'The lives of two mob hitmen, a boxer, a gangster''s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        'https://www.imdb.com/title/tt0110912/',
        4
    ),
    (
        'Schindler''s List',
        'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        'https://www.imdb.com/title/tt0108052/',
        5
    ),
    (
        'Forrest Gump',
        'The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man named Forrest with an IQ of 75.',
        'https://www.imdb.com/title/tt0109830/',
        4
    ),
    (
        'The Matrix',
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        'https://www.imdb.com/title/tt0133093/',
        4
    ),
    (
        'The Lord of the Rings: The Fellowship of the Ring',
        'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        'https://www.imdb.com/title/tt0120737/',
        5
    ),
    (
        'Fight Club',
        'An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.',
        'https://www.imdb.com/title/tt0137523/',
        4
    ),
    (
        'Inception',
        'A thief who steals corporate secrets through the use of dream-sharing technology is given his inverse task of planting an idea into the mind of a C.E.O.',
        'https://www.imdb.com/title/tt1375666/',
        4
    );