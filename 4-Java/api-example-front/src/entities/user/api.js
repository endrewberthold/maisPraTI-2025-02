import { apiFetch } from '../../shared/api/client.js'

export function getMe(token) {
    return apiFetch('/users/me', {token})
}