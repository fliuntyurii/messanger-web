export function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(`${name}=`.length, cookie.length);
    }
  }
  return '';
}

export function removeCookie(name: string) {
  const expires = new Date('Thu, 01 Jan 1970 00:00:00 UTC');
  document.cookie = `${name}=;expires=${expires.toUTCString()};path=/`;
}