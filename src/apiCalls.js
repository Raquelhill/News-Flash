export const getData = (section) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=nVWPGgf0CJekXDQEZ2pWavIf0ggjqR6X`
  ).then((response) => console.log(response.json()));
};
