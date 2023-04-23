import { useEffect, useState } from "react";
import "./style.scss";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Button from "../Button";

function App() {
  
   // Composant pour la page "I'm lost"
   const Lost = () => {
    const navigate = useNavigate();

    useEffect(() => {
      // Rediriger l'utilisateur vers la page d'accueil après 5 secondes
      const timeout = setTimeout(() => {
        navigate("/");
      }, 5000);

      // Nettoyer le timeout si le composant est démonté avant l'expiration du délai de 5 secondes
      return () => clearTimeout(timeout);
    }, [navigate]);
    return (
      <div className="lost">
        <h1>I'm lost</h1>
        <img
          src="https://texei.com/dev/wp-content/uploads/2020/06/1_7NITlkOP2ivIPq70l-WSxw.gif"
          alt="Lost GIF"
        />
      </div>
    );
  };

  // Composant pour la page "404"
  const NotFound = () => {
    return (
      <div className="not_found">
        <h2>404</h2>
        <p className="notFound-text">Désolé, cette page n'existe pas</p>
        <img
          src="https://www.wallpaperflare.com/static/141/515/623/website-link-zelda-the-legend-of-zelda-wallpaper.jpg"
          alt="Page introuvable"
        />
      </div>
    );
  };

  const Home = () => { // Définition du composant Home
    const [data, setData] = useState(null); // Utilisation de useState pour initialiser l'état data à null

    const handleData = (newData) => { // Fonction qui met à jour l'état data
      setData(newData);
    };

    return (
      <div className="home"> {/* Div principale du composant Home */}
        <div className="container"> {/* Div pour le contenu principal */}
          <h1 className="title">Ma super application</h1> {/* Titre de l'application */}
          {data ? ( // Si data existe, affiche le message correspondant
            <>
              <p>{data["message "]}</p>
            </>
          ) : ( // Sinon, affiche un message de recherche
            <p className="search">Le message correspondant</p>
          )}
          <div className="button"> {/* Div pour le bouton */}
            <Button onData={handleData} /> {/* Utilisation du composant Button avec la fonction handleData comme prop */}
          </div>
        </div>
      </div>
    );
  };

  // Page de code HTTP
  const HttpCodePage = () => {
    const { http_code } = useParams(); // Récupère le code HTTP de l'URL
    const [data, setData] = useState(null); // État de données à null par défaut
    const [searchElement, setSearchElement] = useState(null); // État de l'élément de recherche à null par défaut

    useEffect(() => {
      fetch(`http://localhost:3001/excuses`) // Appelle une API locale
        .then((response) => response.json()) // Transforme la réponse en JSON
        .then((data) => {
          setData(data); // Met à jour les données de l'état
          const element = data.excuses.find(
            (item) => parseInt(item.http_code) === parseInt(http_code)
          ); // Recherche l'élément correspondant au code HTTP
          setSearchElement(element); // Met à jour l'élément de recherche de l'état
        });
    }, [http_code]); // Appelle useEffect lorsqu'il y a un changement dans le code HTTP

    if (!data) {
      return <div>Loading...</div>; // Affiche "Loading..." si les données ne sont pas encore disponibles
    }

    if (!searchElement) {
      return <div>Aucune données pour ce code</div>; // Affiche un message d'erreur si aucun élément ne correspond au code HTTP
    }
    const tag = searchElement["tag "]; // Récupère la balise correspondant à l'élément de recherche
    const message = searchElement["message "]; // Récupère le message correspondant à l'élément de recherche

    return (
      <div>
        <h1>{`${http_code}`}</h1>
        <p>{`Tag: ${tag}`}</p>
        <p>{`Message: ${message}`}</p>
      </div>
    );
  };

  return (
    <Router> {/* Utilisation de Router pour gérer les routes */}
      <Routes> {/* Utilisation de Routes pour définir les différentes routes */}
        <Route index element={<Home />} /> {/* Route pour la page d'accueil, qui utilise le composant Home */}
        <Route path="/lost" element={<Lost />} /> {/* Route pour la page Lost */}
        <Route path="/:http_code" element={<HttpCodePage />} /> {/* Route pour les codes HTTP */}
        <Route path="*" element={<NotFound />} /> {/* Route pour les pages non trouvées */}
      </Routes>
    </Router>
  );
}

export default App; // Exportation du composant App
