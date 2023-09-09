console.log('Starting server...');

const server = Bun.serve({
  port: 3000,
  fetch(_request) {
    return new Response(JSON.stringify({ success: true }));
  },
});

console.log('Server started.');

process.on('SIGINT', () => {
  console.log('Stopping server...');
  server.stop();
  console.log('Server stopped.');
  process.exit();
});
