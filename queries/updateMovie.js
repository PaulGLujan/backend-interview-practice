import pg from "pg";

const updateMovie = async (id, updateData) => {
  const { Client } = pg;
  const client = new Client({
    user: "plujan2",
    password: "",
    host: "localhost",
    port: 5432,
    database: "movie-rating-app",
  });
  await client.connect();

  const setClause = Object.keys(updateData)
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const values = [...Object.values(updateData), id];
  const updateQuery = `UPDATE movies SET ${setClause} WHERE MovieID = $${values.length} RETURNING *;`;

  const res = await client.query(updateQuery, values);
  await client.end();
  return res.rows;
};

export default updateMovie;
