import '@babel-core/polyfill';
import '@babel-core/register'
import app from './app';

async function main() {
  await app.listen(4040);
  console.log("Server on port 4040");

}

main();