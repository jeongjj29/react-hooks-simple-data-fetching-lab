import React, { useEffect, useState } from "react";

function App() {
  const [imgSrc, setImgSrc] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImgSrc(data.message);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      {isLoaded ? null : <p>Loading...</p>}
      {isLoaded ? <img src={imgSrc} alt="A Random Dog" /> : null}
    </div>
  );
}

export default App;
