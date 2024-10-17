const template1 = (message: string) => `
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Ollama3</title>
    <style>
      .container {
        width: 400px;
        height: auto;
        background-color: black;
      }
      h2 {
        color: white;
        text-align: center;
        background-color: blueviolet;
      }
      h3 {
        color: white;
        text-align: center;
        padding-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Ollama3 Gen IA</h2>
      <h3>
        ${message}
      </h3>
    </div>
  </body>
</html>
`;

export { template1 };
