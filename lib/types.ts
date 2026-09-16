export type Posicao = 'goleiro' | 'zagueiro' | 'lateral' | 'volante' | 'meia' | 'atacante';
export type Situacao = 'agendada' | 'em andamento' | 'encerrada';
export interface Temporada { id: string; nome: string; dataInicio: string; dataFim: string; status: 'em andamento' | 'encerrada'; janelaAberta: boolean }
export interface Clube { id: string; nome: string; apelido: string; corPrimaria: string; corSecundaria: string; capitaoId: string; temporadaId: string }
export interface Jogador { id: string; nome: string; posicao: Posicao; clubeId: string | null; disponivel: boolean; gols: number; assistencias: number; jogos: number; cartoes: number }
export interface Rodada { id: string; numero: number; temporadaId: string; data: string; status: Situacao }
export interface Partida { id: string; rodadaId: string; mandanteId: string; visitanteId: string; golsMandante: number | null; golsVisitante: number | null; status: Situacao; dataHora: string }
export interface Transferencia { id: string; jogadorId: string; clubeOrigemId: string | null; clubeDestinoId: string; data: string; temporadaId: string }
export interface Mensalidade { id: string; jogadorId: string; clubeId: string; mesReferencia: string; status: 'pago' | 'pendente'; dataPagamento: string | null }
export interface Capitao { id: string; nome: string; clubeId: string }
export interface LinhaTabela { clube: Clube; pontos: number; jogos: number; vitorias: number; empates: number; derrotas: number; golsPro: number; golsContra: number; saldo: number; forma: ('V' | 'E' | 'D')[] }
export interface Confronto extends Partida { mandante: Clube; visitante: Clube }
export interface RodadaCompleta extends Rodada { partidas: Confronto[] }
export interface Movimento extends Transferencia { jogador: Jogador; origem: Clube | null; destino: Clube }
export interface AtletaMensalidade { jogador: Jogador; mensalidade: Mensalidade; podeEscalar: boolean }
export interface PainelCapitao { capitao: Capitao; clube: Clube; elenco: AtletaMensalidade[]; mesReferencia: string; proximaPartida: Confronto | null }
