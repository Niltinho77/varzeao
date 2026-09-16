import type { CSSProperties } from 'react';
import type { Clube } from '@/lib/types';
export function Escudo({ clube, grande = false }: { clube: Clube; grande?: boolean }) {
  const letras = clube.nome.split(' ').filter(p => !['da','do','das'].includes(p)).map(p => p[0]).slice(0,2).join('');
  return <span aria-hidden="true" className={`escudo ${grande ? 'escudo-grande' : ''}`} style={{ '--cor-clube': clube.corPrimaria, '--fundo-clube': clube.corSecundaria } as CSSProperties}><span>{letras}</span></span>;
}
