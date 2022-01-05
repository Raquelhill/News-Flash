export const getData = (section) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=nVWPGgf0CJekXDQEZ2pWavIf0ggjqR6X`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} Error.`);
    }
    return response.json();
  });
};
