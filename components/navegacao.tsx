'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [['/', 'Início'], ['/tabela', 'Tabela'], ['/rodadas', 'Rodadas'], ['/mercado', 'Mercado'], ['/regras', 'Regras'], ['/capitao', 'Painel do capitão']];
export function Navegacao() { const pathname = usePathname(); return <nav aria-label="Navegação principal">{links.map(([href, titulo]) => <Link href={href} key={href} className={`${pathname === href ? 'ativo' : ''} ${href === '/capitao' ? 'nav-capitao' : ''}`} aria-current={pathname === href ? 'page' : undefined}>{titulo}{href === '/capitao' && <span aria-hidden="true"> ↗</span>}</Link>)}</nav>; }
