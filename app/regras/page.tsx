import { liga } from '@/lib/liga';

export const metadata = { title: 'Regras' };

export default function Pagina() {
  return <article className="regulamento">
    <div className="titulo-pagina"><div><h1>O combinado é o combinado.</h1><p>Condições da primeira temporada · Site com dados demonstrativos</p></div></div>
    <p className="intro">Estas são as condições de participação do Várzeão no modo Clubs, 11 contra 11. A classificação, os clubes e as súmulas exibidos no site são de uma temporada exemplo.</p>

    <section>
      <h2>1. Início e calendário</h2>
      <p>A primeira temporada começa quando as equipes estiverem fechadas. São 20 vagas, com realização confirmada a partir de 10 clubes. Serão duas rodadas durante a semana, com dias e horários divulgados antes do início.</p>
      <p>A temporada tem até 20 clubes, em turno único de 19 rodadas, disputadas em cerca de 10 semanas, seguida da Copa Várzeão entre os primeiros colocados.</p>
      <p>A demonstração apresenta dez clubes em nove rodadas de turno único. O calendário oficial será publicado pela organização.</p>
      <ul><li>Vitória: 3 pontos.</li><li>Empate: 1 ponto para cada clube.</li><li>Derrota: nenhum ponto.</li></ul>
      <p>Critérios de desempate na classificação, nesta ordem: pontos, número de vitórias, saldo de gols, gols marcados e confronto direto.</p>
    </section>

    <section>
      <h2>2. Mensalidade e responsabilidade do capitão</h2>
      <p>A mensalidade é de R$ {liga.mensalidadeTime} por clube. O capitão recolhe as contribuições do elenco e realiza o pagamento à plataforma.</p>
      <p>A liga está planejada para cerca de 10 semanas e duas mensalidades por clube. Os classificados para a Copa Várzeão pagam uma mensalidade adicional referente ao mês de disputa.</p>
      <p>O painel demonstra o acompanhamento das contribuições individuais. Jogadores com mensalidade pendente aparecem impedidos de ser escalados. Nenhum pagamento ou envio de cobrança é realizado neste site demonstrativo.</p>
      <h3>Estrutura financeira com 20 clubes</h3>
      <ul><li>Liga: 20 clubes × R$ 600 = R$ 12.000.</li><li>Copa Várzeão: 10 clubes × R$ 300 = R$ 3.000.</li><li>Arrecadação total estimada: R$ 15.000.</li></ul>
      <div className="tabela-scroll" tabIndex={0} role="region" aria-label="Distribuição financeira estimada. Role horizontalmente para ver todos os valores.">
        <table className="regra-tabela"><thead><tr><th scope="col">Saída</th><th scope="col">Valor</th></tr></thead><tbody>
          <tr><th scope="row">Premiação da liga</th><td>R$ 6.800</td></tr>
          <tr><th scope="row">Premiação da copa</th><td>R$ 1.800</td></tr>
          <tr><th scope="row">Taxas de pagamento e custos operacionais</th><td>cerca de R$ 1.250</td></tr>
          <tr><th scope="row">Sobra estimada</th><td>R$ 5.150</td></tr>
        </tbody></table>
      </div>
      <p className="nota-regra">Observação de caixa: se a liga atravessar três meses corridos por causa de adiamentos, entra uma terceira mensalidade e a sobra aumenta. O planejamento considera duas mensalidades, que é o cenário conservador.</p>
    </section>

    <section>
      <h2>3. Elenco e inteligência artificial</h2>
      <p>Cada clube deve inscrever no mínimo {liga.minimoJogadores} e no máximo {liga.maximoJogadores} jogadores. Cada jogador só pode representar um clube por vez dentro da liga.</p>
      <p>O goleiro de todos os clubes é controlado por inteligência artificial. Além do goleiro, são permitidas até duas posições de linha com IA, totalizando no máximo três jogadores de IA em campo.</p>
      <p>Clube que não conseguir completar oito jogadores humanos no horário da partida deve solicitar adiamento. Não havendo adiamento disponível, a partida é registrada como WO.</p>
      <p>Os elencos e as estatísticas desta demonstração são ilustrativos; a escalação com IA ainda não é simulada no site.</p>
    </section>

    <section>
      <h2>4. Plataformas e versões</h2>
      <p>A primeira temporada será disputada nas versões de PS4 e Xbox One. No PS5, é necessário executar a versão de PS4 do jogo. No Xbox Series X|S, é necessário executar a versão de Xbox One. PC e as versões nativas de PS5 e Xbox Series X|S não participam.</p>
      <p>O capitão deve informar a plataforma e a versão do jogo dos integrantes na pré-inscrição. Todos os integrantes devem utilizar uma das versões permitidas para a competição.</p>
    </section>

    <section>
      <h2>5. Premiação</h2>
      <p>A premiação em dinheiro da liga é distribuída entre os cinco primeiros colocados da classificação final. Do 6º ao 10º, o prêmio é a vaga na Copa Várzeão, que tem premiação própria.</p>
      <h3>Com 20 clubes inscritos</h3>
      <div className="tabela-scroll" tabIndex={0} role="region" aria-label="Premiação da liga com 20 clubes.">
        <table className="regra-tabela regra-tabela-curta"><thead><tr><th scope="col">Colocação</th><th scope="col">Prêmio</th></tr></thead><tbody>
          <tr><th scope="row">1º</th><td>R$ 3.000</td></tr><tr><th scope="row">2º</th><td>R$ 2.000</td></tr><tr><th scope="row">3º</th><td>R$ 1.000</td></tr><tr><th scope="row">4º</th><td>R$ 500</td></tr><tr><th scope="row">5º</th><td>R$ 300</td></tr>
        </tbody></table>
      </div>
      <p>Além do dinheiro, a organização entrega o troféu de campeão e os prêmios individuais de artilheiro e de melhor jogador da temporada.</p>
      <h3>Reajuste por número de clubes</h3>
      <p>A premiação acompanha a arrecadação. A tabela é publicada desde já, para que todo capitão saiba exatamente o que está disputando antes de pagar a primeira mensalidade.</p>
      <div className="tabela-scroll" tabIndex={0} role="region" aria-label="Reajuste da premiação conforme o número de clubes. Role horizontalmente para ver todos os valores.">
        <table className="regra-tabela regra-tabela-premios"><thead><tr><th scope="col">Clubes na liga</th><th scope="col">1º</th><th scope="col">2º</th><th scope="col">3º</th><th scope="col">4º</th><th scope="col">5º</th><th scope="col">Total</th></tr></thead><tbody>
          <tr><th scope="row">20</th><td>R$ 3.000</td><td>R$ 2.000</td><td>R$ 1.000</td><td>R$ 500</td><td>R$ 300</td><td>R$ 6.800</td></tr>
          <tr><th scope="row">16 a 19</th><td>R$ 2.400</td><td>R$ 1.500</td><td>R$ 800</td><td>R$ 400</td><td>R$ 300</td><td>R$ 5.400</td></tr>
          <tr><th scope="row">12 a 15</th><td>R$ 1.800</td><td>R$ 1.100</td><td>R$ 600</td><td>R$ 300</td><td>R$ 200</td><td>R$ 4.000</td></tr>
          <tr><th scope="row">10 a 11</th><td>R$ 1.500</td><td>R$ 900</td><td>R$ 500</td><td>R$ 250</td><td>R$ 150</td><td>R$ 3.300</td></tr>
        </tbody></table>
      </div>
      <p><strong>Mínimo para realização.</strong> A temporada só é iniciada com no mínimo 10 clubes. Abaixo disso, a competição é cancelada e todos os valores pagos são devolvidos integralmente.</p>
      <p><strong>Congelamento.</strong> A faixa de premiação é definida pelo número de clubes na abertura da primeira rodada e não muda depois, mesmo que algum clube seja expulso ou desista durante a temporada.</p>
      <p><strong>Pagamento.</strong> O prêmio é pago ao capitão do clube, por Pix, em até 5 dias úteis após o encerramento da competição. A divisão interna entre os jogadores é responsabilidade do clube. Clube com mensalidade em aberto não recebe premiação enquanto a pendência existir.</p>
    </section>

    <section>
      <h2>6. Mercado e transferências</h2>
      <p>Todos os clubes começam com o mesmo valor disponível para transferências. O valor inicial e as regras de utilização serão definidos pela organização.</p>
      <p>Haverá janelas de mercado no início, no meio e no final da temporada. Movimentações devem respeitar essas janelas.</p>
      <p>O mercado demonstrativo mostra jogadores sem clube. Não há saldo, propostas ou transações de transferências implementados nesta versão.</p>
    </section>

    <section><h2>7. WO e expulsão</h2><p>O placar de uma partida decidida por WO é 1 × 0 para o adversário, com o gol atribuído a um jogador fictício. Ao acumular três WOs, o clube é expulso do campeonato.</p></section>

    <section>
      <h2>8. Súmulas e respeito</h2>
      <p>As súmulas registram os resultados e as estatísticas das partidas. O envio e a contestação de resultados seguem os prazos da seção 12.</p>
      <p>Respeito a adversários, colegas e organização é condição de participação. Ofensas, discriminação e manipulação de resultados são incompatíveis com a liga e podem gerar suspensão ou expulsão.</p>
    </section>

    <section>
      <h2>9. Organização e pré-inscrição</h2>
      <p>A organização é conduzida por {liga.organizador}, amante de futebol, programação, empreendedorismo e jogos digitais.</p>
      <p>Faça a pré-inscrição pelo WhatsApp {liga.contato}. Informe o nome do clube, o capitão, a quantidade de jogadores, as plataformas e versões do jogo e a disponibilidade durante a semana.</p>
      <p>O contato pelo WhatsApp não realiza cobrança nem conclui uma inscrição automaticamente.</p>
      <a className="botao" href={liga.preInscricaoUrl} target="_blank" rel="noopener noreferrer">Pré-inscrição do clube ↗</a>
    </section>

    <section>
      <h2>10. Copa Várzeão</h2>
      <p>Competição própria, disputada após o encerramento da liga, com campeão e troféu próprios.</p>
      <p><strong>Classificação.</strong> Disputam a copa os 10 primeiros colocados da liga. Em uma liga com menos de 16 clubes, classificam-se os 8 primeiros.</p>
      <p><strong>Inscrição.</strong> Mensalidade de R$ {liga.mensalidadeTime} por clube, referente ao mês de disputa, nas mesmas condições da liga.</p>
      <p><strong>Formato.</strong> Mata-mata em jogo único. Com 10 clubes, o 1º e o 2º colocados da liga entram diretamente nas quartas de final e os outros oito disputam a primeira fase, com o melhor classificado enfrentando o pior. Com 8 clubes, todos começam nas quartas.</p>
      <p><strong>Vantagem do mandante.</strong> Em qualquer confronto, o clube de melhor classificação na liga é o mandante. Empate no tempo normal leva à prorrogação e, persistindo, à disputa de pênaltis.</p>
      <h3>Premiação da copa</h3>
      <div className="tabela-scroll" tabIndex={0} role="region" aria-label="Premiação da Copa Várzeão.">
        <table className="regra-tabela regra-tabela-curta"><thead><tr><th scope="col">Clubes na copa</th><th scope="col">Campeão</th><th scope="col">Vice</th></tr></thead><tbody>
          <tr><th scope="row">10</th><td>R$ 1.200</td><td>R$ 600</td></tr><tr><th scope="row">8</th><td>R$ 1.000</td><td>R$ 500</td></tr>
        </tbody></table>
      </div>
      <p><strong>Elenco.</strong> Só pode atuar na copa o jogador registrado no clube até o encerramento da última janela de transferências da liga. Não há janela durante a copa.</p>
    </section>

    <section>
      <h2>11. Adiamento de partida</h2>
      <p>Cada clube tem direito a dois adiamentos por temporada, solicitados com no mínimo 12 horas de antecedência à organização e ao clube adversário.</p>
      <p>A partida adiada é remarcada em até 72 horas, em data acordada entre os capitães e confirmada pela organização. Não havendo acordo, a organização define a data e ela é obrigatória.</p>
      <p>O adiamento existe para evitar WO por imprevisto. Esgotados os dois, a ausência é registrada como WO.</p>
    </section>

    <section>
      <h2>12. Registro de resultado e contestação</h2>
      <p>Ao fim de cada partida, o capitão do clube vencedor envia à organização o placar com imagem da tela final, em até 12 horas. Em caso de empate, a responsabilidade é do mandante.</p>
      <p>O resultado registrado pela organização é o oficial. Qualquer importação automática de dados do jogo serve apenas como conferência e não substitui o registro manual.</p>
      <p><strong>Contestação.</strong> O capitão adversário tem 24 horas após a publicação do resultado para contestar, apresentando imagem ou vídeo. Passado o prazo, o resultado é definitivo.</p>
      <p>Resultado não enviado no prazo, sem justificativa aceita, é registrado como empate sem gols para ambos os clubes.</p>
    </section>

    <section>
      <h2>13. Idade mínima e responsabilidade</h2>
      <p>A participação é permitida a partir dos 16 anos. Jogadores com menos de 18 anos precisam de autorização por escrito do responsável legal, entregue à organização antes da primeira partida.</p>
      <p>O capitão é responsável por confirmar que todo o seu elenco cumpre essa condição.</p>
    </section>

    <section>
      <h2>14. Cancelamento, saída e reembolso</h2>
      <p><strong>Se a temporada não começar.</strong> Não reunido o mínimo de 10 clubes, a temporada é cancelada antes da primeira rodada e todos os valores pagos são devolvidos integralmente em até 10 dias úteis.</p>
      <p><strong>Se o clube desistir.</strong> Clube que abandonar após o início não tem direito à devolução das mensalidades pagas. Seus resultados até a desistência permanecem válidos e suas partidas restantes são registradas como WO.</p>
      <p><strong>Substituição.</strong> A organização pode convocar um clube da lista de espera para substituir clube expulso ou desistente até a quinta rodada. Depois disso, a vaga permanece vazia.</p>
    </section>

    <section>
      <h2>15. Identidade dos clubes</h2>
      <p>Nomes, escudos e uniformes devem ser originais.</p>
      <p>Não é permitido utilizar nome, escudo, uniforme ou qualquer elemento de identidade de clubes, ligas, federações ou competições reais, nem marcas registradas de terceiros.</p>
      <p>A organização pode solicitar alteração de identidade que descumpra esta condição, e o clube tem 48 horas para se adequar.</p>
    </section>
  </article>;
}
