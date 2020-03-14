const latestVersion = async () => {
  const request = await fetch('https://cors-anywhere.herokuapp.com/https://img.shields.io/npm/v/direflow-cli');
  const result = await request.text();

  const tokens = result.split('</text>');
  const textToken = tokens[tokens.length - 2];
  const textVersion = textToken.substr(textToken.lastIndexOf('>') + 2);

  return textVersion;
};

export default latestVersion;
