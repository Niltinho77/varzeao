# Várzeão — demonstração

## Como rodar

Requer Node.js 20.9 ou superior e npm. Na pasta deste projeto:

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Para uma versão de produção, execute `npm run build` e depois `npm start`. `npm run check` verifica os tipos e `npm test` verifica calendário, estatísticas, classificação, mercado e liberação por mensalidade.

Com o servidor na porta 3000 e Google Chrome instalado, `npm run test:visual` verifica as sete páginas em 375 e 1440 pixels, ausência de transbordamento da página, filtro do mercado, colunas fixas da classificação e página de clube inexistente. As capturas ficam em `/tmp/varzeao-*.png`. O navegador é usado apenas nos testes, não como dependência da interface.

## Dados fictícios

`lib/types.ts` define as entidades e os retornos das consultas. `lib/data/seed/temporada.ts` contém a temporada, o mês de referência e o clube demonstrado. O nome da marca e o ano são separados: `lib/format.ts` extrai o ano de `dataInicio`. Atualizar a temporada para 2027 apresenta Várzeão 27 sem alteração das telas.

`lib/data/seed/competicao.ts` gera dados determinísticos, sem aleatoriedade: dez clubes, quinze jogadores por clube, dez jogadores livres, nove rodadas, trinta partidas encerradas e quinze agendadas. Gols e assistências são atribuídos aos onze participantes de cada súmula; reservas podem ter zero jogos. As transferências são entradas de jogadores livres antes da competição. Os jogadores do mercado ainda não atuaram nesta temporada. As mensalidades são exclusivamente do mês de referência. Os cartões são contagens agregadas, sem mecanismo de suspensão nesta demonstração.

As páginas e componentes só acessam `lib/data/index.ts`, nunca os arquivos de seed. Todas as consultas exportadas são assíncronas, com retornos tipados. A classificação é derivada dos placares, sem tabela paralela. As cópias dos retornos evitam mutação dos dados compartilhados.

## Ligação com um banco real

O único arquivo existente que precisa mudar para substituir a fonte das consultas é `lib/data/index.ts`: substituir imports dos seeds e leituras em memória por consultas, preservando assinaturas, tipos, ordenação e retornos. As páginas e componentes não precisam mudar. Podem ser adicionados `lib/data/conexao.ts` para o cliente escolhido e `.env.local` para credenciais; esses arquivos não existem nesta fase. Esquema e migrações dependem do banco escolhido. Os seeds deixam de ser usados, mas podem permanecer como exemplos e fixtures.

Ao colocar dados reais no painel, autenticação e autorização serão obrigatórias. A rota pública atual é adequada somente para dados fictícios. Isso é trabalho adicional de produto, separado da substituição da fonte das consultas. A escolha do clube virá da identidade autorizada, em vez de `clubeDemonstracao`.

## Pendente para a versão final

- A pré-inscrição pelo WhatsApp (48) 98871-6244 está configurada em `lib/liga.ts`. O link preenche uma mensagem com time, capitão, elenco, plataforma e disponibilidade; não envia automaticamente. A competição começa quando fecharem as equipes.
- Mensalidade definida: R$ 300 por clube/mês, recolhida pelo capitão junto ao elenco e paga por ele à plataforma. A liga prevê duas mensalidades e a Copa Várzeão uma mensalidade adicional para os classificados. O site não cobra nem recebe pagamentos.
- A primeira temporada oferece 20 vagas e exige no mínimo 10 clubes. Premiação, reajustes, Copa Várzeão, rebaixamento dos quatro últimos, adiamentos, registro de resultados, idade mínima, reembolso e identidade dos clubes estão publicados no regulamento. Dias e horários das rodadas e regras disciplinares detalhadas ainda precisam ser definidos.
- Elencos de 14 a 20 jogadores, goleiro obrigatoriamente IA e no máximo duas posições de linha com IA. Os dados da temporada exemplo continuam ilustrativos, com 15 jogadores por clube e sem simulação de escalação com IA.
- Janelas de transferências no início, meio e final da temporada, com valor inicial igual para todos. Valor e condições ainda não definidos; nenhum mecanismo de saldo, moeda ou proposta foi implementado.
- WO definido como 1 × 0 com gol de jogador fictício; expulsão após três WOs. Definir tratamento dos resultados após expulsão. Não foram adicionados WOs artificiais aos resultados demonstrativos.
- Grupo confirmado: versões de PS4 e Xbox One, sem PC. Em PS5 ou Xbox Series X|S, o participante deve executar a versão da geração anterior correspondente. As versões nativas da nova geração não participam.
- Projetar identidade autenticada e proteção dos dados de mensalidade antes de qualquer uso real.
- Implementar persistência, operação da liga e atualizações das súmulas em uma fase posterior.
- Especificar e implementar cobrança e pagamentos somente após autorização para essa nova fase. O botão de cobrança atual é visual e não envia nada.
- Os tipos de mensalidade distinguem pago e pendente; a base real deverá definir tratamento de ausência de registro, estorno e histórico.

As fontes livres Archivo e Archivo Condensed são carregadas pelo serviço Google Fonts, com alternativas locais caso a rede esteja indisponível. Nenhuma integração de dados externa, autenticação, pagamento, envio ou armazenamento foi implementada. Não há atualização em tempo real: os placares apresentados pertencem à temporada exemplo.
