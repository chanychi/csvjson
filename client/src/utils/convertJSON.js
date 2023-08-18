function convertJSON(json) {
  const jsonArray = JSON.parse(json);
  if (!jsonArray || !jsonArray.length) return '';

  const headers = Object.keys(jsonArray[0]);
  const csvArray = [headers.map(header => `${header}`).join(',')]; // Headers

  for (const jsonObject of jsonArray) {
    const values = headers.map(header => {
      const value = jsonObject[header];
      return typeof value === 'number' ? value : `${value}`;
    });
    csvArray.push(values.join(','));
  }

  return csvArray.join('\n');
}

export default convertJSON