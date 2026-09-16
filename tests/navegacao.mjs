import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const navegador = await chromium.launch({channel:'chrome',headless:true});
try {
  const pagina = await navegador.newPage();
  const erros = [];
  pagina.on('pageerror',erro => erros.push(erro.message));
  for(const largura of [375,1440]) {
    await pagina.setViewportSize({width:largura,height:1000});
    for(const rota of ['/capitao','/tabela','/rodadas','/clube/vila-aurora','/mercado','/','/regras']) {
      const resposta = await pagina.goto(`http://localhost:3000${rota}`);
      assert.equal(resposta.status(),200);
      await pagina.locator('h1').waitFor();
      assert.ok(await pagina.locator('.aviso-exemplo').isVisible());
      assert.ok(await pagina.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),`Transbordamento: ${rota} em ${largura}`);
      if(rota === '/capitao') assert.equal(await pagina.getByText('Não pode ser escalado',{exact:true}).count(),4);
      if(rota === '/clube/vila-aurora') assert.equal(await pagina.getByText('Pendente',{exact:true}).count(),0);
      if(rota === '/mercado') {
        await pagina.getByRole('link',{name:'goleiro',exact:true}).click();
        await pagina.getByRole('heading',{name:'1 jogador disponível'}).waitFor();
        assert.equal(await pagina.locator('tbody tr').count(),1);
      }
      if(rota === '/tabela' && largura === 375) {
        const pontos = pagina.locator('tbody .fixa-pontos').first();
        const antes = await pontos.boundingBox();
        await pagina.locator('.tabela-scroll').evaluate(e => {e.scrollLeft=300;});
        const depois = await pontos.boundingBox();
        assert.equal(Math.round(antes.x),Math.round(depois.x));
      }
      if(rota === '/' || rota === '/capitao') await pagina.screenshot({path:`/tmp/varzeao-${rota === '/' ? 'inicio' : 'capitao'}-${largura}.png`,fullPage:true});
      console.log(`OK ${largura}px ${rota}`);
    }
  }
  await pagina.goto('http://localhost:3000/clube/nao-existe');
  assert.ok(await pagina.getByRole('heading',{name:'Fora das quatro linhas.'}).isVisible());
  assert.deepEqual(erros,[]);
} finally {await navegador.close();}
