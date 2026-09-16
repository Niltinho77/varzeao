import type { Temporada } from './types';
export function nomeTemporada(t: Temporada): string { return `${t.nome} ${t.dataInicio.slice(2, 4)}`; }
export function dataCurta(data: string): string { return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', timeZone: 'America/Sao_Paulo' }).format(new Date(data.length === 10 ? `${data}T12:00:00Z` : data)); }
export function hora(data: string): string { return new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }).format(new Date(data)); }
export function mes(data: string): string { return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${data}-01T12:00:00Z`)); }
