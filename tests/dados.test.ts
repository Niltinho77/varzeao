import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getClubes, getElenco, getMercado, getPainelCapitao, getPartidas, getRodadas, getTabela, getTemporada } from '../lib/data';
import { nomeTemporada } from '../lib/format';

test('turno único: dez clubes, nove rodadas, nenhum confronto repetido', async () => {
  const clubes = await getClubes(), rodadas = await getRodadas(), partidas = await getPartidas();
  assert.equal(clubes.length, 10); assert.equal(rodadas.length, 9); assert.equal(partidas.length, 45);
  assert.equal(new Set(partidas.map(p => [p.mandanteId,p.visitanteId].sort().join('/'))).size, 45);
  assert.equal(rodadas.filter(r => r.status === 'encerrada').length, 6);
  assert.equal(rodadas.filter(r => r.status === 'agendada').length, 3);
  for (const r of rodadas) { assert.equal(r.partidas.length, 5); assert.equal(new Set(r.partidas.flatMap(p => [p.mandanteId,p.visitanteId])).size, 10); }
  for (const p of partidas) { if(p.status === 'agendada') { assert.equal(p.golsMandante,null); assert.equal(p.golsVisitante,null); } }
});
test('estatísticas individuais e classificação reconciliam com as súmulas', async () => {
  const tabela = await getTabela();
  for(const linha of tabela) {
    const elenco = await getElenco(linha.clube.id);
    assert.equal(elenco.length,15); assert.equal(linha.jogos,6);
    assert.equal(elenco.reduce((a,j) => a+j.gols,0),linha.golsPro);
    assert.equal(elenco.reduce((a,j) => a+j.assistencias,0),linha.golsPro);
    assert.equal(elenco.reduce((a,j) => a+j.jogos,0),66);
    assert.equal(linha.pontos,linha.vitorias*3+linha.empates);
    assert.equal(linha.saldo,linha.golsPro-linha.golsContra);
  }
  assert.equal(tabela.reduce((a,c) => a+c.golsPro,0),tabela.reduce((a,c) => a+c.golsContra,0));
  for(let i=1;i<tabela.length;i++) {
    const anterior = tabela[i-1], atual = tabela[i];
    assert.ok(anterior.pontos > atual.pontos || (anterior.pontos === atual.pontos && anterior.vitorias >= atual.vitorias));
    if (anterior.pontos === atual.pontos && anterior.vitorias === atual.vitorias) assert.ok(anterior.saldo >= atual.saldo);
  }
});
test('painel bloqueia pendentes, mercado filtra e temporada muda sem alterar telas', async () => {
  const painel = await getPainelCapitao();
  assert.equal(painel.elenco.filter(j => !j.podeEscalar).length,4);
  assert.ok(painel.elenco.every(j => j.podeEscalar === (j.mensalidade.status === 'pago')));
  assert.equal(painel.proximaPartida?.status,'agendada');
  const livres = await getMercado(); assert.equal(livres.length,10); assert.ok(livres.every(j => !j.clubeId));
  assert.ok((await getMercado('goleiro')).every(j => j.posicao === 'goleiro'));
  assert.equal(nomeTemporada({...await getTemporada(),dataInicio:'2027-08-01'}),'Várzeão 27');
});
