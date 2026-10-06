import handler from '../../backend-dist/index.js';

export async function GET(request: Request) {
  return handler(request);
}
