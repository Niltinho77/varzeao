import { getRodadas, getTabela, getTemporada } from '@/lib/data';
import { nomeTemporada } from '@/lib/format';
import { Tabela } from '@/components/tabela';
export const metadata = { title: 'Tabela e classificação' };
export default async function Pagina() { const [linhas,t,r] = await Promise.all([getTabela(),getTemporada(),getRodadas()]); return <><div className="titulo-pagina"><div><h1>Tabela e classificação</h1><p>{nomeTemporada(t)} · Turno único · {r.filter(x => x.status === 'encerrada').length} de {r.length} rodadas encerradas</p></div><span className="selo">● {t.status}</span></div><Tabela linhas={linhas}/><p className="observacao">Desempate por saldo de gols, gols pró e ordem alfabética na temporada exemplo. No celular, deslize a tabela para consultar os números.</p></>; }
