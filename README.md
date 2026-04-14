# 🌸 Agência Carla - Material de Ajuda

Portal de ajuda oficial para criadoras e hosts da Agência Carla.

## Objetivo

Fornecer um guia visual, simples e organizado para que as criadoras sigam corretamente o processo de instalação, cadastro e ativação do aplicativo, sem depender de atendimento manual.

## Descrição

Site estático com layout em accordion/FAQ expansível. A criadora acessa, clica no tópico e lê as instruções passo a passo. Visual feminino, responsivo e mobile-first.

## Conteúdo

Os tópicos e textos seguem o PDF oficial do tutorial da agência. Os passos cobertos são:

1. Onde baixar o aplicativo
2. Instalando no Android (com avisos importantes)
3. Instalando no iPhone
4. Colocando foto no perfil
5. Enviando o número de ID
6. Ativação do perfil e início dos ganhos

## Como abrir localmente

```bash
# Basta abrir o arquivo index.html no navegador
open index.html
# ou
double-click em index.html
```

## Como publicar na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Add New Project**
3. Importe o repositório `agencia-carla-tutorial` do GitHub
4. Deixe todas as configurações padrão (o `vercel.json` já está configurado)
5. Clique em **Deploy**
6. Pronto! O site estará publicado com HTTPS automático.

## Como editar os tópicos

Abra o arquivo `index.html` e localize a div com a classe `accordion`.
Cada bloco `<div class="accordion-item">` é um tópico. Edite:
- O número em `<span class="accordion-num">`
- O título em `<span class="accordion-title">`
- O conteúdo dentro de `<div class="accordion-body">`

## Arquivos

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura e conteúdo do site |
| `style.css` | Estilos visuais (tema claro e escuro) |
| `script.js` | Accordion interativo e toggle de tema |
| `favicon.svg` | Ícone do site |
| `vercel.json` | Configuração para deploy estático |
| `README.md` | Este arquivo |

---

> Conteúdo baseado no material oficial do tutorial da Agência Carla. 💕
