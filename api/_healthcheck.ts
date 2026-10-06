export default function handler() {
  return new Response(JSON.stringify({ message: 'Success' }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
