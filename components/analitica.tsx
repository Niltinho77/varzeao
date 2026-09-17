'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const CHAVE_CONSENTIMENTO = 'varzeao-consentimento-analitica';
const EVENTO_PREFERENCIAS = 'varzeao:preferencias-analitica';

type Consentimento = 'aceito' | 'recusado' | null;

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

function informarConsentimento(consentimento: Exclude<Consentimento, null>) {
  window.clarity?.('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: consentimento === 'aceito' ? 'granted' : 'denied',
  });
}

export function Analitica() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const [consentimento, setConsentimento] = useState<Consentimento>(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const salvo = window.localStorage.getItem(CHAVE_CONSENTIMENTO);
    if (salvo === 'aceito' || salvo === 'recusado') setConsentimento(salvo);

    const abrirPreferencias = () => setConsentimento(null);
    window.addEventListener(EVENTO_PREFERENCIAS, abrirPreferencias);
    return () => window.removeEventListener(EVENTO_PREFERENCIAS, abrirPreferencias);
  }, []);

  useEffect(() => {
    if (carregado && consentimento) informarConsentimento(consentimento);
  }, [carregado, consentimento]);

  if (!projectId) return null;

  const escolher = (valor: Exclude<Consentimento, null>) => {
    window.localStorage.setItem(CHAVE_CONSENTIMENTO, valor);
    setConsentimento(valor);
    if (carregado) informarConsentimento(valor);
  };

  return (
    <>
      <Script id="clarity" strategy="afterInteractive" onLoad={() => setCarregado(true)} onReady={() => setCarregado(true)}>
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};c[a]('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'});t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script','${projectId}');`}
      </Script>

      {consentimento === null && (
        <aside className="consentimento" aria-label="Preferências de privacidade">
          <div>
            <strong>Medição de audiência</strong>
            <p>Usamos dados de navegação para contar visitas e entender quais áreas recebem mais cliques. Conteúdo sensível permanece oculto.</p>
          </div>
          <div className="consentimento-acoes">
            <button type="button" className="botao secundario" onClick={() => escolher('recusado')}>Continuar sem cookies</button>
            <button type="button" className="botao" onClick={() => escolher('aceito')}>Aceitar medição</button>
          </div>
        </aside>
      )}
    </>
  );
}

export function PreferenciasAnalitica() {
  if (!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) return null;

  return (
    <button
      type="button"
      className="preferencias-analitica"
      onClick={() => window.dispatchEvent(new Event(EVENTO_PREFERENCIAS))}
    >
      Privacidade
    </button>
  );
}
