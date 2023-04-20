import { ACCESS_TOKEN } from "../constants/auth";

export function clearCache(name: string) {
  if(name) {
    caches.delete(name);
  }
} 

export function setCache(cacheName: string, url: string, data: any) {
  caches.open(cacheName).then(cache => {
    cache.put(url, new Response(JSON.stringify(data)));
  });
}

export async function getCache(url: string) {
  const cookies = document.cookie;

  if (cookies.includes(`${ACCESS_TOKEN}=`)) {
    const response = await caches.match(url);
    const data = await response?.json();

    return data;
  }

  return null;
}