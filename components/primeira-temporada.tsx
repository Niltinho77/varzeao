import { liga } from '@/lib/liga';

export function PrimeiraTemporada() {
  return <section className="estreia">
    <div className="titulo-pagina">
      <div><h2>R$ 8.600 em prêmios.</h2><p>20 clubes. Liga e copa. Cada posição vale alguma coisa.</p></div>
      <a className="botao" href={liga.preInscricaoUrl} target="_blank" rel="noopener noreferrer">Pré-inscrever meu clube ↗</a>
    </div>
    <p className="observacao">Valores considerando 20 clubes confirmados. A premiação é reajustada conforme o número de participantes.</p>

    <div className="premiacao-chamada">
      <div className="premio-total"><span>Premiação total</span><strong>R$ 8.600</strong><p>Liga + Copa Várzeão</p></div>
      <div className="premio-distribuicao">
        <div><span>Liga · R$ 6.800</span><p><strong>1º</strong> 3.000 <b>·</b> <strong>2º</strong> 2.000 <b>·</b> <strong>3º</strong> 1.000 <b>·</b> <strong>4º</strong> 500 <b>·</b> <strong>5º</strong> 300</p></div>
        <div><span>Copa · R$ 1.800</span><p><strong>Campeão</strong> 1.200 <b>·</b> <strong>Vice</strong> 600</p></div>
        <a href="/regras">Ver regulamento e reajustes ↗</a>
      </div>
    </div>

    <div className="faixas-classificacao" aria-label="Zonas da classificação oficial com 20 clubes">
      <div className="faixa-premio"><strong>01–05</strong><span>Premiação + Copa</span></div>
      <div className="faixa-copa"><strong>06–10</strong><span>Copa Várzeão</span></div>
      <div className="faixa-rebaixamento"><strong>17–20</strong><span>Rebaixamento</span></div>
    </div>

    <div className="resumo-temporada">
      <span><strong>20</strong> vagas</span>
      <span><strong>19</strong> rodadas</span>
      <span><strong>2</strong> jogos por semana</span>
      <span><strong>R$ {liga.mensalidadeTime}</strong> clube/mês</span>
    </div>
  </section>;
}
