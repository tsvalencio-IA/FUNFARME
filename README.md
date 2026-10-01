# FUNFARM — Apresentação & Controle v1.2.0

## Firebase dedicado
Projeto: `funfarme-63e0e`
Realtime Database: `https://funfarme-63e0e-default-rtdb.firebaseio.com`

## Antes de publicar
1. Firebase Console → Authentication → Sign-in method → Anonymous → ATIVAR.
2. Realtime Database → Rules → substituir pelas regras de `database.rules.json` → Publicar.
3. Publicar a branch `main` no GitHub Pages.

## Perfis
- `apresentacao.html` — telão/PC/projetor.
- `controle.html` — celular do apresentador.
- `index.html` — escolha simples entre os dois perfis.

Não há cadastro de usuário nem tela de login. O app usa autenticação anônima automática apenas para cumprir as regras de segurança do Firebase.

## Canal
Canal padrão: `principal`.
Para criar outro canal:
- `apresentacao.html?canal=reuniao2`
- `controle.html?canal=reuniao2`

Os dois dispositivos precisam usar o mesmo `canal`.

## Caminho no Realtime Database
`funfarm_apresentacao/canais/{canal}/estado`

Campos usados:
- `slideAtual`
- `totalSlides`
- `atualizadoEm`
- `apresentacaoAtiva`

## Conteúdo
A apresentação possui 34 slides e foi ampliada para cobrir os temas relevantes da transcrição da reunião: mudanças climáticas, matriz e mapa de vulnerabilidade, cinco riscos altos, vendaval, tempestade, calor extremo, energia, descargas atmosféricas, desastres externos, saúde pública, desabastecimento, água, alagamentos, entorno, queimadas, resíduos, logística reversa, GHG, recursos naturais, estoque/NATS, biodiversidade, manutenção, patrimônio, custos, governança documental e encaminhamentos.

Trechos claramente comprometidos pelo reconhecimento automático de fala não foram transformados em afirmações categóricas sem validação.

Powered by thIAguinho Soluções Digitais
