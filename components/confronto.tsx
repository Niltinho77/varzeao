import Link from 'next/link';
import type { Confronto as Jogo } from '@/lib/types';
import { dataCurta, hora } from '@/lib/format';
import { Escudo } from './escudo';
export function Confronto({ partida }: { partida: Jogo }) { return <div className="confronto"><div className="jogo-data">{dataCurta(partida.dataHora)} <span>{partida.status === 'encerrada' ? 'Encerrada' : `${hora(partida.dataHora)} · Brasília`}</span></div><div className="duelo"><Link href={`/clube/${partida.mandante.id}`}><Escudo clube={partida.mandante}/><span>{partida.mandante.nome}</span></Link><strong className="placar">{partida.status === 'encerrada' ? `${partida.golsMandante} : ${partida.golsVisitante}` : '×'}</strong><Link href={`/clube/${partida.visitante.id}`}><Escudo clube={partida.visitante}/><span>{partida.visitante.nome}</span></Link></div></div>; }
