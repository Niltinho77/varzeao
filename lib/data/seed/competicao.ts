import type { Capitao, Clube, Jogador, Mensalidade, Partida, Posicao, Rodada, Transferencia } from '../../types';
import { referencia, temporada } from './temporada';

const identidades = [
  ['vila-aurora', 'Vila Aurora', 'Aurora', '#FFD447', '#183B30'],
  ['uniao-do-beco', 'União do Beco', 'União', '#C59BD9', '#342640'],
  ['alto-da-ponte', 'Alto da Ponte', 'Ponte', '#86C4D5', '#203942'],
  ['jardim-do-sol', 'Jardim do Sol', 'Jardim', '#F3AB75', '#4A3025'],
  ['resenha-da-vila', 'Resenha da Vila', 'Resenha', '#B0CC9C', '#2D4031'],
  ['morro-do-vento', 'Morro do Vento', 'Morro', '#DDD6BD', '#3D4033'],
  ['unidos-da-quadra', 'Unidos da Quadra', 'Quadra', '#C78C8C', '#462C32'],
  ['rua-onze', 'Rua Onze', 'Onze', '#88B6AB', '#233E39'],
  ['beco-das-palmeiras', 'Beco das Palmeiras', 'Beco', '#BCADDC', '#34324B'],
  ['atletico-do-lajeado', 'Atlético do Lajeado', 'Lajeado', '#D5B88C', '#473D2C'],
];
export const clubes: Clube[] = identidades.map(([id, nome, apelido, corPrimaria, corSecundaria], i) => ({ id, nome, apelido, corPrimaria, corSecundaria, capitaoId: `capitao-${i}`, temporadaId: temporada.id }));
const nomes = ['Rafael', 'Bruno', 'Lucas', 'Diego', 'Caio', 'André', 'Felipe', 'Gustavo', 'Vitor', 'Pedro', 'Matheus', 'Thiago', 'Renan', 'Danilo', 'Igor'];
const sobrenomes = ['Mendes', 'Barreto', 'Moraes', 'Azevedo', 'Duarte', 'Peixoto', 'Tavares', 'Ferraz', 'Campos', 'Borges'];
const posicoes: Posicao[] = ['goleiro', 'zagueiro', 'zagueiro', 'lateral', 'lateral', 'volante', 'volante', 'meia', 'meia', 'atacante', 'atacante', 'goleiro', 'zagueiro', 'meia', 'atacante'];
export const jogadores: Jogador[] = clubes.flatMap((clube, c) => nomes.map((nome, j) => ({ id: `j-${c}-${j}`, nome: `${nomes[(j + c * 3) % nomes.length]} ${sobrenomes[c]}`, posicao: posicoes[j], clubeId: clube.id, disponivel: false, gols: 0, assistencias: 0, jogos: 0, cartoes: 0 })));
export const capitaes: Capitao[] = clubes.map((c, i) => ({ id: c.capitaoId, nome: jogadores[i * 15 + 7].nome, clubeId: c.id }));
export const rodadas: Rodada[] = [];
export const partidas: Partida[] = [];
let ordem = clubes.map((_, i) => i);
for (let r = 0; r < 9; r++) {
  const data = new Date(`${temporada.dataInicio}T12:00:00Z`);
  data.setUTCDate(data.getUTCDate() + r * 7);
  const dia = data.toISOString().slice(0, 10);
  const encerrada = r < 6;
  rodadas.push({ id: `r-${r + 1}`, numero: r + 1, temporadaId: temporada.id, data: dia, status: encerrada ? 'encerrada' : 'agendada' });
  for (let p = 0; p < 5; p++) {
    const a = ordem[p], b = ordem[9 - p];
    const m = r % 2 === 0 ? a : b, v = r % 2 === 0 ? b : a;
    const gm = encerrada ? (m === 0 ? 3 : (m * 3 + r + p) % 4) : null;
    const gv = encerrada ? (v === 0 ? 3 : (v + r * 2 + p) % 3) : null;
    partidas.push({ id: `p-${r}-${p}`, rodadaId: `r-${r + 1}`, mandanteId: clubes[m].id, visitanteId: clubes[v].id, golsMandante: gm, golsVisitante: gv, status: encerrada ? 'encerrada' : 'agendada', dataHora: `${dia}T${p < 3 ? '21:00' : '22:00'}:00-03:00` });
    if (encerrada) for (const [c, gols] of [[m, gm!], [v, gv!]]) {
      const titulares = [0,1,2,3,4,5,6,7,8,9,10].map(j => j === 10 && r % 2 ? 14 : j === 8 && r % 3 === 2 ? 13 : j);
      titulares.forEach(j => { jogadores[c * 15 + j].jogos++; });
      for (let g = 0; g < gols; g++) {
        jogadores[c * 15 + titulares[7 + (r + g) % 4]].gols++;
        jogadores[c * 15 + titulares[5 + (r + g) % 2]].assistencias++;
      }
      if (r % 2 === 0) jogadores[c * 15 + 5].cartoes++;
    }
  }
  ordem = [ordem[0], ordem[9], ...ordem.slice(1, 9)];
}
for (let i = 0; i < 10; i++) jogadores.push({ id: `livre-${i}`, nome: `${nomes[i]} ${['Nogueira', 'Ramos', 'Castro', 'Lacerda', 'Prado', 'Siqueira', 'Vieira', 'Valente', 'Paiva', 'Brito'][i]}`, posicao: posicoes[i], clubeId: null, disponivel: true, gols: 0, assistencias: 0, jogos: 0, cartoes: 0 });
export const mensalidades: Mensalidade[] = jogadores.filter(j => j.clubeId).map((j, i) => ({ id: `mensalidade-${j.id}`, jogadorId: j.id, clubeId: j.clubeId!, mesReferencia: referencia, status: [3, 8, 12, 14].includes(i % 15) ? 'pendente' : 'pago', dataPagamento: [3, 8, 12, 14].includes(i % 15) ? null : `${referencia}-03` }));
export const transferencias: Transferencia[] = clubes.flatMap((c, i) => [13,14].map(j => ({ id: `t-${i}-${j}`, jogadorId: `j-${i}-${j}`, clubeOrigemId: null, clubeDestinoId: c.id, data: temporada.dataInicio, temporadaId: temporada.id })));
