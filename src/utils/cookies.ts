import { ACCESS_TOKEN, CACHE_NAME } from "../constants/auth";
import { clearCache } from "./caches";

export function checkCookie() {
  const cookies = document.cookie;

  if (cookies.includes(`${ACCESS_TOKEN}=`)) {
    localStorage.setItem('auth', true.toString());
    return;
  }
  
  localStorage.clear();
  clearCache(CACHE_NAME);
}