let cities = [];

const getCities = () => cities;

const retrieveCitiesFromCache = () => {
  cities.push('Fortaleza');
  cities.push('Belo Horizonte');
};

const requestCities = () => new Promise((resolve, reject) => {
  return setTimeout(() => {
    cities.push('Fortaleza');
    cities.push('Belo Horizonte');
    cities.push('São Paulo');
    cities.push('Recife');
    cities.push('Porto Alegre');
    cities.push('Goiânia');
    cities.push('Manaus');
    cities.push('Piauí');
    resolve();
  }, 200);
});

const removeCity = (city) => {
  const index = cities.indexOf(city);
  if (index > -1) cities.splice(index, 1);
};

const isCity = (name) => cities.includes(name);

const resetCities = () => cities = [];

module.exports = { resetCities, getCities, removeCity, retrieveCitiesFromCache, requestCities, isCity };
