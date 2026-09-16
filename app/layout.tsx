import type { Metadata } from 'next';
import Link from 'next/link';
import { getTemporada } from '@/lib/data';
import { nomeTemporada } from '@/lib/format';
import { Navegacao } from '@/components/navegacao';
import './globals.css';
export async function generateMetadata(): Promise<Metadata> { const t = await getTemporada(); return { title: { default: nomeTemporada(t), template: `%s · ${nomeTemporada(t)}` }, description: 'O primeiro campeonato de várzea virtual. Liga de modo Clubs, 11 contra 11. Demonstração com temporada exemplo.' }; }
export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) { const t = await getTemporada(); return <html lang="pt-BR"><body><a className="pular" href="#conteudo">Pular para o conteúdo</a><header className="cabecalho"><div className="topo"><Link href="/" className="marca" aria-label={`${nomeTemporada(t)} — início`}><span className="marca-simbolo" aria-hidden="true">V<span>•</span></span>{nomeTemporada(t)}</Link><span className="topo-info">Modo Clubs <b>·</b> 11 contra 11</span></div><Navegacao/></header><div className="aviso-exemplo"><span className="ponto"/> Temporada exemplo · clubes, jogadores e resultados fictícios</div><main id="conteudo">{children}</main><footer><Link href="/" className="marca">{nomeTemporada(t)}</Link><p>o primeiro campeonato de várzea virtual</p><span>Demonstração · Temporada exemplo</span><Link href="/regras">Regulamento ↗</Link></footer></body></html>; }
