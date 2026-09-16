import Link from 'next/link';
export default function NaoEncontrado() { return <div className="titulo-pagina"><div><h1>Fora das quatro linhas.</h1><p>Esta página ou clube não foi encontrado.</p><Link className="botao" href="/tabela">Voltar para a tabela ↗</Link></div></div>; }
