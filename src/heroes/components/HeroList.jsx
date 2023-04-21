import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
          //utilizando el operador spread se puede pasar todas las props que tenga 'hero' sin tener que pasarlas a todas 1 por 1
        ))}
      </div>
    </>
  );
};
