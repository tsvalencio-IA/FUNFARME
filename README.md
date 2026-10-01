# FUNFARM — Apresentação & Controle v1.1.0

## Firebase dedicado
Projeto: `funfarme-63e0e`
Realtime Database: `https://funfarme-63e0e-default-rtdb.firebaseio.com`

## Antes de publicar
1. Firebase Console → Authentication → Sign-in method → Anonymous → ATIVAR.
2. Realtime Database → Rules → substituir pelas regras de `database.rules.json` → Publicar.
3. Publicar toda esta pasta no GitHub Pages.

## Perfis
- `apresentacao.html` — telão/PC/projetor.
- `controle.html` — celular do apresentador.
- `index.html` — escolha simples entre os dois perfis.

Não há cadastro de usuário nem tela de login. O app usa autenticação anônima automática somente para cumprir as regras de segurança do Firebase.

## Canal
Canal padrão: `principal`.
Para criar outro canal:
- `apresentacao.html?canal=reuniao2`
- `controle.html?canal=reuniao2`

Os dois dispositivos precisam usar o mesmo `canal`.

## Caminho no Realtime Database
`funfarm_apresentacao/canais/{canal}/state`

Powered by thIAguinho Soluções Digitais
