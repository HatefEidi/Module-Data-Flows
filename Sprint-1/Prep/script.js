const films = [
    {
      title: "Killing of Flower Moon",
      director: "Martin Scorsese",
      times: ["15:35"],
      certificate: "15",
      duration: 112,
    },
    {
      title: "Typist Artist Pirate King",
      director: "Carol Morley",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
  ];
  const template = document.getElementById("film-card");
  const createFilmCard = (film) => {
    const card = template.content.cloneNode(true);
    // Now we are querying our cloned fragment, not the entire page.
    card.querySelector("h3").textContent = film.title;
    card.querySelector(
      "[data-director]"
    ).textContent = `Director: ${film.director}`;
    card.querySelector("time").textContent = `${film.duration} minutes`;
    card.querySelector(
      "[data-certificate]"
    ).textContent = `Certificate: ${film.certificate}`;
    // Return the card, rather than directly appending it to the page
    return card;
  };
  
  // Remember we need to append the card to the DOM for it to appear.
  
  const filmCards = [];
  for (const item of films) {
    filmCards.push(createFilmCard(item));
  }
  
  document.body.append(...filmCards);
  // invoke append using the spread operator