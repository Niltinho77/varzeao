import { capitaes, clubes, jogadores, mensalidades, partidas, rodadas, transferencias } from './seed/competicao';
import { clubeDemonstracao, referencia, temporada } from './seed/temporada';
import type { Clube, Confronto, Jogador, LinhaTabela, Movimento, PainelCapitao, Posicao, RodadaCompleta, Temporada } from '../types';

export async function getTemporada(): Promise<Temporada> { return structuredClone(temporada); }
export async function getClubes(): Promise<Clube[]> { return structuredClone(clubes); }
export async function getClube(id: string): Promise<Clube | null> { return structuredClone(clubes.find(c => c.id === id) ?? null); }
export async function getElenco(clubeId: string): Promise<Jogador[]> { return structuredClone(jogadores.filter(j => j.clubeId === clubeId)); }
export async function getMercado(posicao?: Posicao): Promise<Jogador[]> { return structuredClone(jogadores.filter(j => j.clubeId === null && j.disponivel && (!posicao || j.posicao === posicao))); }
export async function getPartidas(clubeId?: string): Promise<Confronto[]> {
  return structuredClone(partidas.filter(p => !clubeId || p.mandanteId === clubeId || p.visitanteId === clubeId).map(p => ({ ...p, mandante: clubes.find(c => c.id === p.mandanteId)!, visitante: clubes.find(c => c.id === p.visitanteId)! })));
}
export async function getRodadas(): Promise<RodadaCompleta[]> { const jogos = await getPartidas(); return structuredClone(rodadas.map(r => ({ ...r, partidas: jogos.filter(p => p.rodadaId === r.id) }))); }
export async function getTransferencias(clubeId: string): Promise<Movimento[]> { return structuredClone(transferencias.filter(t => t.clubeDestinoId === clubeId || t.clubeOrigemId === clubeId).map(t => ({ ...t, jogador: jogadores.find(j => j.id === t.jogadorId)!, origem: clubes.find(c => c.id === t.clubeOrigemId) ?? null, destino: clubes.find(c => c.id === t.clubeDestinoId)! }))); }
export async function getTabela(): Promise<LinhaTabela[]> {
  const tabela = clubes.map(clube => {
    const linha: LinhaTabela = { clube, pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0, forma: [] };
    for (const p of partidas.filter(p => p.status === 'encerrada' && (p.mandanteId === clube.id || p.visitanteId === clube.id))) {
      const pro = p.mandanteId === clube.id ? p.golsMandante! : p.golsVisitante!;
      const contra = p.mandanteId === clube.id ? p.golsVisitante! : p.golsMandante!;
      linha.jogos++; linha.golsPro += pro; linha.golsContra += contra;
      if (pro > contra) { linha.vitorias++; linha.pontos += 3; linha.forma.push('V'); }
      else if (pro === contra) { linha.empates++; linha.pontos++; linha.forma.push('E'); }
      else { linha.derrotas++; linha.forma.push('D'); }
    }
    linha.saldo = linha.golsPro - linha.golsContra;
    return linha;
  });
  const confrontoDireto = (a: LinhaTabela, b: LinhaTabela) => {
    const partida = partidas.find(p => p.status === 'encerrada' && [p.mandanteId, p.visitanteId].includes(a.clube.id) && [p.mandanteId, p.visitanteId].includes(b.clube.id));
    if (!partida || partida.golsMandante === partida.golsVisitante) return 0;
    const vencedorId = partida.golsMandante! > partida.golsVisitante! ? partida.mandanteId : partida.visitanteId;
    return vencedorId === a.clube.id ? -1 : 1;
  };
  return structuredClone(tabela.sort((a,b) => b.pontos - a.pontos || b.vitorias - a.vitorias || b.saldo - a.saldo || b.golsPro - a.golsPro || confrontoDireto(a,b) || a.clube.nome.localeCompare(b.clube.nome, 'pt-BR')));
}
export async function getPainelCapitao(): Promise<PainelCapitao> {
  const clube = (await getClube(clubeDemonstracao))!;
  const elenco = (await getElenco(clube.id)).map(jogador => { const mensalidade = mensalidades.find(m => m.jogadorId === jogador.id && m.mesReferencia === referencia)!; return { jogador, mensalidade, podeEscalar: mensalidade.status === 'pago' }; });
  return structuredClone({ clube, capitao: capitaes.find(c => c.id === clube.capitaoId)!, elenco, mesReferencia: referencia, proximaPartida: (await getPartidas(clube.id)).find(p => p.status === 'agendada') ?? null });
}
