window.FUNFARM_SLIDES = [
  {
    id:'capa',type:'cover',kicker:'GESTÃO AMBIENTAL • CONTINUIDADE OPERACIONAL',
    title:'Mudanças Climáticas, Riscos e Resposta Institucional',
    subtitle:'Complexo FUNFARM',
    line:'Do improviso ao protocolo: identificar, prevenir, responder e aprender.',
    notes:['Abrir contextualizando que o tema não é apenas requisito: foi assumido como maturidade institucional.','A apresentação organiza o que foi discutido na reunião para virar ação, fluxo, treinamento e documento oficial.']
  },
  {
    id:'porque',type:'statement',icon:'fa-earth-americas',title:'Por que este trabalho agora?',
    big:'MUDANÇAS CLIMÁTICAS JÁ IMPACTAM A OPERAÇÃO',
    text:'O objetivo é analisar vulnerabilidades reais capazes de afetar assistência, infraestrutura, pessoas, acesso e continuidade dos serviços.',
    tags:['maturidade institucional','prevenção','continuidade'],
    notes:['Enfatizar que a instituição decidiu tratar o tema com visão de maturidade, não apenas para cumprir requisito.','A pergunta central é: o que pode parar ou degradar a operação e como responder rapidamente?']
  },
  {
    id:'entregaveis',type:'grid',icon:'fa-list-check',title:'Entregáveis centrais',
    cards:[
      {i:'fa-table-cells-large',t:'Matriz integrada',d:'Riscos ambientais e climáticos consolidados para o complexo.'},
      {i:'fa-map-location-dot',t:'Mapa de vulnerabilidade',d:'Priorização dos riscos por impacto e criticidade.'},
      {i:'fa-bolt',t:'Resposta rápida',d:'Fluxos claros para eventos críticos, dia e noite.'},
      {i:'fa-person-chalkboard',t:'Treinamento',d:'Cada área sabendo exatamente o que fazer e quem acionar.'},
      {i:'fa-file-shield',t:'Planos de contingência',d:'Protocolos formalizados como documentos da qualidade.'},
      {i:'fa-leaf',t:'Política ambiental',d:'Atualização da política com riscos, mapas e controles anexados.'}
    ],
    notes:['O mapa já foi apresentado e validado pela diretoria segundo a reunião.','O próximo salto é transformar o mapa em protocolos, documentos e treinamento.']
  },
  {
    id:'problema',type:'beforeafter',icon:'fa-route',title:'O problema que precisa desaparecer',
    left:{label:'HOJE',title:'“Vai ligando até alguém resolver”',items:['Responsabilidade difusa','Dependência de pessoas específicas','Perda de tempo em eventos críticos','Risco maior fora do horário comercial']},
    right:{label:'ALVO',title:'Fluxo institucional claro',items:['Quem identifica','Quem aciona','Quem avalia','Quem executa','Quem registra e encerra']},
    notes:['Usar o exemplo recorrente da queda de árvore: de dia, à noite, sobre estrutura ou bloqueando rua.','O objetivo é parar de peregrinar atrás do dono do processo.']
  },
  {
    id:'mapa',type:'process',icon:'fa-diagram-project',title:'Como o risco vira ação',
    steps:[
      {n:'01',t:'Identificar',d:'O que pode acontecer?'},
      {n:'02',t:'Classificar',d:'Qual impacto e criticidade?'},
      {n:'03',t:'Definir barreiras',d:'O que já reduz o risco?'},
      {n:'04',t:'Criar contingência',d:'Quem faz o quê quando ocorrer?'},
      {n:'05',t:'Treinar e auditar',d:'O fluxo funciona na prática?'}
    ],
    notes:['A matriz e a matriz de calor aparecem como instrumentos complementares.','A avaliação precisa considerar o quanto o evento pode paralisar a operação.']
  },
  {
    id:'top5',type:'risk5',icon:'fa-triangle-exclamation',title:'Cinco riscos classificados como altos',
    risks:[
      {i:'fa-wind',t:'Vendaval'},
      {i:'fa-cloud-bolt',t:'Tempestade severa'},
      {i:'fa-user-doctor',t:'Calor extremo • assistência'},
      {i:'fa-temperature-high',t:'Calor extremo • infraestrutura'},
      {i:'fa-plug-circle-xmark',t:'Interrupção de energia'}
    ],
    notes:['A reunião cita cinco riscos altos.','Esses riscos demandam análise imediata de barreiras e contingências.']
  },
  {
    id:'vendaval',type:'scenario',icon:'fa-wind',title:'Vendaval e queda de árvores',accent:'AMBIENTE EXTERNO',
    question:'Uma árvore caiu. O que acontece nos primeiros 5 minutos?',
    columns:[
      {t:'HORÁRIO COMERCIAL',items:['Gestor/dono do processo disponível','Compras e fornecedores acessíveis','Especialista avalia dano e necessidade de intervenção']},
      {t:'NOITE / FIM DE SEMANA',items:['Segurança vai ao local','Manutenção geral/plantão é acionada','Especialista define resposta','Fornecedor emergencial entra se necessário']}
    ],
    notes:['Destacar a fragilidade de finais de semana, feriados e recessos.','O fluxo deve contemplar dano em estrutura, rede elétrica, estacionamento, via pública e interfaces com áreas vizinhas.']
  },
  {
    id:'tempestade',type:'scenario',icon:'fa-cloud-showers-heavy',title:'Tempestade severa',accent:'INFRAESTRUTURA + ASSISTÊNCIA',
    question:'E se destelhar, quebrar vidro ou a água entrar?',
    columns:[
      {t:'RISCOS',items:['Destelhamento','Placas solares','Vidros e fachadas','Infiltração em áreas fechadas','Bloqueio de acessos']},
      {t:'CONTINGÊNCIA',items:['Rondas em áreas sem equipe','Evacuação/acolhimento','Inspeção de calhas e coberturas','Responsável por cada prédio','Comunicação rápida']}
    ],
    notes:['A discussão amplia contingência além de incêndio.','Cada unidade deve pensar onde acolher pacientes e como proteger sua operação durante chuva extrema.']
  },
  {
    id:'calor',type:'splitmetric',icon:'fa-temperature-three-quarters',title:'Calor extremo: dois impactos',
    left:{num:'01',t:'Assistencial',items:['Desidratação','Insuficiência renal','Agravos respiratórios','Impacto em pacientes e colaboradores']},
    right:{num:'02',t:'Infraestrutura',items:['Sobrecarga de equipamentos','Temperatura de armazenamento','Saneantes e substâncias','Condições ambientais inadequadas']},
    badge:'MEDIR • MONITORAR • AGIR',
    notes:['A reunião separa explicitamente impacto assistencial e impacto na infraestrutura.','Foi citado material/saneante com temperatura máxima de 45 °C, exigindo avaliação do local e medições.']
  },
  {
    id:'energia',type:'flow',icon:'fa-bolt',title:'Energia e infraestrutura crítica',
    nodes:['Árvores e rede elétrica','Monitoramento / alarme','Segurança verifica','Central abre OS','Manutenção / hotelaria','Especialista / fornecedor'],
    footer:'Contingência precisa funcionar mesmo quando o dono do processo não está presente.',
    notes:['Foi relatado fluxo já estabelecido para queda de galho em rede elétrica.','A gestão também discute poda preventiva, geradores, concessionária e monitoramento de oscilações.']
  },
  {
    id:'saude',type:'grid',icon:'fa-kit-medical',title:'Emergências em saúde pública',
    cards:[
      {i:'fa-virus',t:'Doenças sazonais',d:'Aumento de casos e necessidade de resposta coordenada.'},
      {i:'fa-water',t:'Inundações',d:'Efeitos assistenciais, sanitários e de acesso.'},
      {i:'fa-lungs',t:'Qualidade do ar',d:'Queimadas e agravos respiratórios.'},
      {i:'fa-people-group',t:'Comitê permanente',d:'Protocolos integrados em vez de mobilização apenas quando o problema acontece.'}
    ],
    notes:['A proposta discutida é evoluir de comitê acionado só na crise para uma estrutura permanente.','O documento de emergência deve permitir consulta rápida e orientar a resposta interna.']
  },
  {
    id:'residuos',type:'chain',icon:'fa-recycle',title:'Gestão de resíduos: a responsabilidade começa na origem',
    chain:[
      {i:'fa-building',t:'UNIDADE GERADORA',d:'Segregar, acondicionar, treinar e supervisionar.'},
      {i:'fa-truck',t:'TRANSPORTE',d:'Movimentação correta e rastreável.'},
      {i:'fa-industry',t:'TRATAMENTO',d:'Tratamento e destinação final adequados.'}
    ],
    notes:['A reunião critica delegar toda a responsabilidade ao serviço de limpeza/parque de resíduos.','Gestores e unidades geradoras precisam treinar, conferir e auditar o que é produzido.']
  },
  {
    id:'erroresiduo',type:'beforeafter',icon:'fa-trash-can',title:'Quando a classificação falha',
    left:{label:'ERRO',title:'Resíduo no lugar errado',items:['Comum no infectante','Reciclável no comum','Maior volume para aterro','Maior custo de tratamento']},
    right:{label:'MATURIDADE',title:'Gestão por processo',items:['Área conhece o que gera','Classificação revisada','Treinamento da equipe','Auditoria e melhoria contínua']},
    notes:['A classificação errada aumenta custo, reduz reciclagem e pode elevar risco biológico.','O olhar deve ser do processo inteiro, não apenas da coleta final.']
  },
  {
    id:'compras',type:'statement',icon:'fa-cart-shopping',title:'Sustentabilidade começa antes da compra',
    big:'DEPOIS DO CONTRATO, A LOGÍSTICA REVERSA FICA MUITO MAIS DIFÍCIL',
    text:'O solicitante precisa conhecer descarte, reciclabilidade, reutilização e possibilidade de logística reversa antes de fechar a contratação.',
    tags:['descritivo técnico','fornecedor','logística reversa','ciclo de vida'],
    notes:['A reunião relata resistência de fornecedores já contratados à logística reversa.','O tema deve entrar no descritivo e na conversa com o fornecedor antes da contratação.']
  },
  {
    id:'carbono',type:'metriccards',icon:'fa-cloud',title:'Emissões e descarbonização',
    metrics:[
      {v:'5%',t:'meta institucional citada',d:'Redução a ser detalhada por metodologia e período-base.'},
      {v:'GHG',t:'protocolo de referência',d:'Base para estruturar o inventário e as informações.'},
      {v:'↓',t:'pegada de carbono',d:'Processos mais eficientes, menos aterro e tecnologias de menor impacto.'}
    ],
    notes:['A reunião cita meta institucional de 5% e uso do GHG Protocol como referência.','Exemplos de descarbonização incluem mudanças de processo, gases refrigerantes e aumento de recicláveis.']
  },
  {
    id:'recursos',type:'grid',icon:'fa-droplet',title:'Água, energia e insumos: controle na rotina',
    cards:[
      {i:'fa-faucet-drip',t:'Água',d:'Vazamento, chamado correto, caixas d’água e continuidade.'},
      {i:'fa-lightbulb',t:'Energia',d:'Consumo, desligamento, oscilações e uso consciente.'},
      {i:'fa-boxes-stacked',t:'Estoque',d:'Material parado, vencimento e compras automáticas sem uso.'},
      {i:'fa-microchip',t:'Tecnologia',d:'Revisão e despadronização de itens obsoletos.'}
    ],
    notes:['A reunião reforça que não basta afirmar que controla: é preciso evidência, barreira e fluxo.','Estoque parado e tecnologia não utilizada também são desperdício ambiental e financeiro.']
  },
  {
    id:'biodiv',type:'scenario',icon:'fa-bug',title:'Animais, insetos e biodiversidade',accent:'PEQUENO EVENTO • GRANDE IMPACTO',
    question:'Abelha, escorpião, animal morto: quem aciona quem?',
    columns:[
      {t:'PROBLEMA',items:['Conhecimento informal','Pessoas novas sem referência','Acionamentos diferentes por setor','Demora até encontrar especialista']},
      {t:'SOLUÇÃO',items:['Fluxo institucional','Referência técnica definida','Notificação','Treinamento','Divulgação rápida']}
    ],
    notes:['Foram citados ataques de abelhas, picada de escorpião e necessidade de fluxo para animais encontrados no complexo.','A meta é formalizar o que hoje depende de saber “para quem ligar”.']
  },
  {
    id:'manutencao',type:'process',icon:'fa-screwdriver-wrench',title:'Manutenção, OS, patrimônio e custos',
    steps:[
      {n:'01',t:'Solicitação',d:'Problema bem descrito e setor correto.'},
      {n:'02',t:'Triagem',d:'Manutenção avalia e direciona.'},
      {n:'03',t:'Execução integrada',d:'Subtarefas entre elétrica, TI, oficinas e especialistas.'},
      {n:'04',t:'Patrimônio',d:'Movimentação rastreável do bem.'},
      {n:'05',t:'Custo e encerramento',d:'Material/mão de obra no centro de custo correto.'}
    ],
    notes:['A reunião aponta abertura de chamado em área errada, falta de interface entre oficinas e risco de extravio.','A rastreabilidade melhora produtividade, patrimônio e gestão de custos.']
  },
  {
    id:'documentos',type:'beforeafter',icon:'fa-folder-tree',title:'Governança documental',
    left:{label:'RISCO',title:'Documentos repetidos ou desalinhados',items:['Diretrizes e procedimentos falando a mesma coisa','Documento antigo ainda vigente','Treinamento sobre versão errada','Fluxos dispersos']},
    right:{label:'AÇÃO',title:'Revisar antes de treinar',items:['Mapear documentos vigentes','Unificar duplicidades','Obsoletar o que não serve','Atualizar e só então capacitar']},
    notes:['A reunião cita documentos repetidos no sistema documental.','Antes do treinamento, é essencial verificar o que realmente deve permanecer vigente.']
  },
  {
    id:'acao',type:'actionplan',icon:'fa-clipboard-check',title:'Plano de ação imediato',
    actions:[
      ['1','Finalizar matriz e mapa de vulnerabilidade'],
      ['2','Validar fluxos prioritários de contingência'],
      ['3','Formalizar comitê de gestão de resíduos'],
      ['4','Revisar documentos e eliminar duplicidades'],
      ['5','Definir responsáveis por prédio/unidade'],
      ['6','Treinar, simular e auditar a resposta']
    ],
    notes:['A sequência lógica é: finalizar matriz/mapa, atualizar política, anexar documentos e iniciar treinamentos.','Cada área deve trazer suas barreiras existentes e seus documentos para dentro do mapeamento.']
  },
  {
    id:'fim',type:'end',title:'Do improviso ao protocolo',subtitle:'Risco conhecido • responsabilidade definida • resposta treinada',contact:'Complexo FUNFARM',
    notes:['Encerrar reforçando maturidade e continuidade operacional.','A pergunta final para cada gestor: se acontecer hoje, sua equipe sabe exatamente o que fazer?']
  }
];
