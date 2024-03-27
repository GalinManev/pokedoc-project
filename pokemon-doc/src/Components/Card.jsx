import React from "react";

function Card({ pokemon, loading, infoPokemon }) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2 key={item.id}>{item.id}</h2>
                <img
                  src={item.sprites.front_default}
                  className="charm"
                  key={item.sprites.front_default}
                ></img>
                <h2 key={item.name}>{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Card;
