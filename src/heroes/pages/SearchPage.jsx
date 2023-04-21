import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queyString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queyString.parse(location.search);
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;
  //el preventDefault se realiza para no recargar la pagina al modificar o enviar el form
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1"> Search </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
