import handler from '../../backend-dist/index.js';

export async function POST(request: Request) {
  return handler(request);
}
