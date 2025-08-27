export function setCookie(name, value, days = 1) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
}

export function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : []
  for (const cookie of cookies) {
    const [key, val] = cookie.split('=')
    if (key === name) return decodeURIComponent(val)
  }
  return null
}

export function deleteCookie(name) {
  document.cookie = `${name}=; Max-Age=0; path=/`
}