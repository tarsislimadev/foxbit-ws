// 

export const set = (key, value = '') => new Promise((s) => s(localStorage.setItem(key, JSON.stringify(value))))

export const get = (key, def = '') => new Promise((s) => s(JSON.parse(localStorage.getItem(key))))
