const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
};

fetch("https://swapi.dev/api/planetfghs/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  });
