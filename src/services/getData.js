import api from './api'

export async function getMovies() {
    const { data: { results } } = await api.get('/movie/top_rated')
    return results
}

export async function getTopMovies() {
    const { data: { results } } = await api.get('/movie/popular')
    return results.slice(0, 10) // Pega apenas os 10 primeiros
}