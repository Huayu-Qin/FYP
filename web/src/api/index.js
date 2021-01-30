import fetch from '../config/fetch'

export const login = data => fetch('/login', data, 'POST')
export const logout = () => fetch('/logout')

export const save = data => fetch(data.url, data, 'POST')
export const remove = (url, data) => fetch(url, data, 'DELETE')
export const removeById = (url, id) => fetch(url, {id: id}, 'DELETE')
export const findList = data => fetch(data.url, data)
