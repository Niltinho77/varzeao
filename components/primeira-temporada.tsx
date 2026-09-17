import { liga } from '@/lib/liga';
export function PrimeiraTemporada() { return <section className="estreia">
  <div className="titulo-pagina"><div><h2>20 vagas na primeira temporada.</h2><p>Pré-inscrições abertas. O campeonato começa quando as equipes estiverem fechadas.</p></div><a className="botao" href={liga.preInscricaoUrl} target="_blank" rel="noopener noreferrer">Pré-inscrição do time ↗</a></div>
  <p className="observacao">A tabela acima é demonstrativa. Os resultados não pertencem à primeira temporada oficial.</p>
  <div className="condicoes">
    <div><h3>R$ {liga.mensalidadeTime} por clube/mês</h3><p>R$ 15 por jogador em um elenco completo de 20 integrantes. O capitão recolhe as contribuições e paga a mensalidade do clube.</p></div>
    <div><h3>R$ 6.800 em premiação</h3><p>Valor distribuído do 1º ao 5º com 20 clubes. Do 6º ao 10º, vaga na Copa Várzeão. A tabela de reajuste está no regulamento.</p></div>
    <div><h3>Duas rodadas por semana</h3><p>Partidas durante a semana. Dias e horários serão divulgados antes do início do campeonato.</p></div>
    <div><h3>Elencos de 14 a 20 jogadores</h3><p>O goleiro será sempre IA. Além dele, são permitidas até duas posições de linha controladas por inteligência artificial.</p></div>
  </div>
</section>; }
export function Duvidas() { return <><section className="duvidas"><h2>Antes de entrar em campo</h2>
  <details><summary>Quem recolhe e paga a mensalidade?</summary><p>O capitão recolhe as contribuições dos jogadores e paga R$ {liga.mensalidadeTime} por mês à plataforma. O painel ajuda a acompanhar os acertos do elenco. Este site não recebe pagamentos.</p></details>
  <details><summary>Quais versões podem participar?</summary><p>A primeira temporada será disputada nas versões de PS4 e Xbox One. Quem usa PS5 deve executar a versão de PS4; quem usa Xbox Series X|S deve executar a versão de Xbox One. PC e as versões nativas da nova geração não participam. Informe a versão do jogo na pré-inscrição.</p></details>
  <details><summary>Como funcionam os jogadores controlados por IA?</summary><p>O goleiro de todos os clubes será controlado por IA. Além dele, são permitidas até duas posições de linha com IA, totalizando no máximo três jogadores de IA em campo.</p></details>
  <details><summary>Como funcionam as transferências?</summary><p>Todos os times começam com o mesmo valor para transferências. As janelas abrem no início, no meio e no final da temporada. O valor inicial e as condições de uso serão divulgados pela organização.</p></details>
  <details><summary>O que acontece em caso de WO?</summary><p>O resultado é 1 × 0, com o gol atribuído a um jogador fictício. Ao acumular três WOs, o time é expulso do campeonato.</p></details>
</section><section className="organizacao"><h2>Quem está à frente</h2><h3>{liga.organizador}</h3><p>Amante de futebol, programação, empreendedorismo e jogos digitais. À frente da organização do Várzeão e do contato com os capitães.</p></section></>; }
