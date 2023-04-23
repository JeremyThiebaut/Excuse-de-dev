import { useEffect, useState } from "react";

const Button = ({ onData }) => {
  // Déclaration des états d'initialisation
  const [data, setData] = useState(null); // Stocke les données récupérées depuis l'API
  const [previousData, setpreviousData] = useState(null); // Stocke les données précédentes
  const [isLoading, setIsLoading] = useState(false); // État de chargement

  // Effectue une requête GET vers l'API pour récupérer les données au chargement de la page
  useEffect(() => {
    fetch(`http://localhost:3001/excuses`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Stocke les données récupérées dans l'état "data"
      });
  }, []);

  // Fonction déclenchée lors du clic sur le bouton
  const handleClick = () => {
    setIsLoading(true); // Définit l'état de chargement à "true"

    // Génère un index aléatoire pour récupérer une donnée aléatoire depuis "data.excuses"
    const randomIndex = Math.floor(Math.random() * data.excuses.length);
    const randomData = data.excuses[randomIndex]; // Récupère la donnée aléatoire

    // Vérifie si la donnée aléatoire est la même que la précédente
    if (JSON.stringify(randomData) === JSON.stringify(previousData)) {
      handleClick(); // Récursion pour générer une autre donnée aléatoire si elle est identique à la précédente
    } else {
      setTimeout(() => {
        setpreviousData(randomData); // Stocke la nouvelle donnée aléatoire dans l'état "previousData"
        onData(randomData); // Appelle la fonction "onData" avec la nouvelle donnée aléatoire en paramètre
        setIsLoading(false); // Définit l'état de chargement à "false"
      }, Math.floor(Math.random() * 4000) + 1000); // Définit un délai de 1 à 5 secondes avant d'afficher la donnée aléatoire
    }
  };

  // Affiche un message de chargement si les données n'ont pas encore été récupérées depuis l'API
  if (!data) {
    return <div>Loading...</div>;
  }

  // Rendu du bouton avec un texte personnalisé selon l'état de chargement
  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Chargement..." : "Bouton"}
    </button>
  );
};

export default Button;
