npm create vite@4 task-base

npm install -g sass

npm install json-server

#### rodar api
# Task Base

Aplicação de exemplo para gerenciamento de tarefas (To‑Do) criada com React + Vite.

Principais tecnologias:
- React (Vite)
- Sass para estilos
- `json-server` como API REST local (usa `banco.json`)
- bibliotecas de notificação: `sonner` / `react-alert`

## Pré-requisitos
- Node.js (>= 16) e `npm`
- (opcional) `json-server` e `sass` globalmente se preferir instalar globalmente

## Instalação
Abra um terminal (cmd.exe) dentro da pasta do projeto e execute:

```cmd
npm install
```

Se preferir instalar as ferramentas globalmente (opcional):

```cmd
npm install -g sass
npm install -g json-server
```

## Executando a API (json-server)

Por padrão este projeto inclui o arquivo `banco.json` usado por `json-server`.

Se houver um script `api` no `package.json`, execute:

```cmd
npm run api
```

Se não houver, você pode iniciar a API manualmente com `npx`:

```cmd
npx json-server --watch banco.json --port 8080
```

A API ficará disponível em `http://localhost:8080/tasks`.

## Executando a aplicação (desenvolvimento)

```cmd
npm run dev
```

Abra o navegador em `http://localhost:5173` (Vite) — o endereço exato será mostrado no terminal.

## Recursos
- Adicionar tarefas
- Marcar/desmarcar tarefas como concluídas
- Remover tarefas

## Estrutura principal do projeto
- `src/` – código fonte React
	- `components/` – componentes (ex.: `AddTask.jsx`, `Tasks.jsx`, `TaskItem.jsx`)
	- `assets/` – imagens e ícones
	- `index.scss` – estilos globais

- `banco.json` – dados usados pelo `json-server`

## Dependências úteis
- `sonner` — notificações leves
- `react-alert` — alternativa para alertas
- `axios` — cliente HTTP usado nas chamadas à API

Instalação (exemplo):

```cmd
npm install sonner axios
npm install --save react-alert react-alert-template-basic
```

## Observações
- O projeto já utiliza chamadas para `http://localhost:8080/tasks`. Garanta que o `json-server` esteja rodando na porta `8080`.
- As mensagens (alerts) são usadas de forma simples no código; considere substituir por uma solução de notificação (ex.: `sonner`) para melhor UX.

## Contribuição
- Abra uma issue ou envie um PR com melhorias.

---

Se quiser, eu posso:
- Ajustar o `package.json` com scripts úteis (`api`, `start`, `build`),
- Substituir `alert()` por `sonner` para notificações melhores,
- Criar instruções de deploy.
