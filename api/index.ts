import handler from '../backend-dist/index.js';

export default async function api(request: Request) {
  return handler(request);
}
