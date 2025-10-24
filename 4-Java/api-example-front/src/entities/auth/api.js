import { apiFetch } from '../../shared/api/client'

export function register({ name, username, password }) {
    return apiFetch('/auth/register', {
        method: 'POST',
        body: { name, username, password },
    })
}

export function login ({ username, password }) {
    return apiFetch('/auth/login', {
        method: 'POST',
        body: { username, password },
    })
}