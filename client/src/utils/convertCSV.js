function csvToJson(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const jsonArray = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const jsonObject = {};

    if (values.length !== headers.length) continue;


    for (let j = 0; j < headers.length; j++) {
      let value = values[j] ? values[j].trim() : '';

      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);

      jsonObject[headers[j]] = isNaN(value) ? value : Number(value);
    }

    jsonArray.push(jsonObject);
  }

  return JSON.stringify(jsonArray, null, 2);
}

export default csvToJson
