const patologias = [
  // Coluna Vertebral
  {
    id: 1,
    nome: "Lombalgia",
    categoria: "Coluna Vertebral",
    causas: "Dor na região lombar causada por postura inadequada, sedentarismo, levantamento de peso incorreto, degeneração discal, hérnia de disco, estresse emocional.",
    tratamentos: ["Exercícios de fortalecimento lombar", "Mobilização vertebral", "Extensões lombares", "Correção postural", "Termoterapia", "Eletroterapia (TENS, ultrassom)", "Massoterapia", "RPG/Mckenzie", "Estiramentos", "Tração lombar", "Acupuntura"]
  },
  {
    id: 2,
    nome: "Cervicalgia",
    categoria: "Coluna Vertebral",
    causas: "Dor no pescoço causada por postura inadequada (uso prolongado de celular/computador), estresse muscular, doença degenerativa do disco, hérnia cervical, contraturas musculares.",
    tratamentos: ["Exercícios de alongamento cervical", "Fortalecimento da musculatura cervical", "Mobilização cervical", "Correção postural", "Massoterapia", "Tração cervical", "Eletroterapia", "RPG", "Cinesioterapia", "Liberação miofascial"]
  },
  {
    id: 3,
    nome: "Dorsalgia",
    categoria: "Coluna Vertebral",
    causas: "Dor na coluna torácica causada por postura inadequada, estresse muscular, artrose, escoliose, hipercifose, trauma.",
    tratamentos: ["Exercícios de alongamento dorsal", "Fortalecimento muscular", "Correção postural", "Massoterapia", "Mobilização vertebral", "RPG", "Eletroterapia", "Cinesioterapia"]
  },
  {
    id: 4,
    nome: "Hernia de Disco Cervical",
    categoria: "Coluna Vertebral",
    causas: "Protrusão ou extrusão do disco intervertebral cervical causada por degeneração discal, trauma, levantamento de peso incorreto, má postura.",
    tratamentos: ["Exercícios de alongamento cervical", "Fortalecimento cervical", "Mobilização suave", "Tração cervical", "RPG/Mckenzie", "Correção postural", "Eletroterapia", "Massoterapia", "Hidroterapia", "Cinesioterapia"]
  },
  {
    id: 5,
    nome: "Hernia de Disco Lombar",
    categoria: "Coluna Vertebral",
    causas: "Protrusão ou extrusão do disco intervertebral lombar causada por degeneração discal, trauma, levantamento de peso, má postura, sedentarismo.",
    tratamentos: ["Exercícios de Mckenzie", "Fortalecimento lombar", "Mobilização vertebral", "Tração lombar", "Correção postural", "Estiramentos", "Eletroterapia", "Massoterapia", "RPG", "Hidroterapia"]
  },
  {
    id: 6,
    nome: "Protusão Discal",
    categoria: "Coluna Vertebral",
    causas: "Abaulamento do disco intervertebral sem ruptura do anel fibroso, causada por degeneração, trauma, postura inadequada.",
    tratamentos: ["Exercícios de extensão lombar", "Fortalecimento do core", "Mobilização", "Correção postural", "RPG/Mckenzie", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 7,
    nome: "Discopatia Degenerativa",
    categoria: "Coluna Vertebral",
    causas: "Degeneração natural do disco intervertebral causada por envelhecimento, sobrecarga mecânica, fatores genéticos.",
    tratamentos: ["Fortalecimento muscular", "Exercícios de baixo impacto", "Hidroterapia", "Correção postural", "Eletroterapia", "Massoterapia", "RPG"]
  },
  {
    id: 8,
    nome: "Desidratação Discal",
    categoria: "Coluna Vertebral",
    causas: "Perda de água e nutrientes do disco intervertebral, causada por envelhecimento, desidratação, sobrecarga.",
    tratamentos: ["Exercícios de baixa intensidade", "Hidroterapia", "Alongamentos", "Correção postural", "Fortalecimento"]
  },
  {
    id: 9,
    nome: "Espondilolistese",
    categoria: "Coluna Vertebral",
    causas: "Deslizamento de uma vértebra sobre outra, causado por degeneração, trauma, defeito congênito.",
    tratamentos: ["Fortalecimento do core", "Estabilização vertebral", "Correção postural", "Exercícios de propriocepção", "Cinesioterapia", "Hidroterapia"]
  },
  {
    id: 10,
    nome: "Espondilite Anquilosante",
    categoria: "Coluna Vertebral",
    causas: "Doença inflamatória crônica que causa fusão das vértebras, de origem autoimune, fatores genéticos (HLA-B27).",
    tratamentos: ["Exercícios de expansão torácica", "Alongamentos", "Correção postural", "Fortalecimento", "Hidroterapia", "Exercícios respiratórios", "RPG"]
  },
  {
    id: 11,
    nome: "Escoliose",
    categoria: "Coluna Vertebral",
    causas: "Curvatura lateral da coluna vertebral, causada por alteração muscular, defeito ósseo, idiopática (principalmente em adolescentes).",
    tratamentos: ["Exercícios de reeducação postural", "Fortalecimento assimétrico", "RPG", "Cinesioterapia", "Hidroterapia", "Exercícios em Bosu"]
  },
  {
    id: 12,
    nome: "Hiperlordose Cervical",
    categoria: "Coluna Vertebral",
    causas: "Aumento excessivo da curvatura cervical, causado por postura inadequada, fraqueza muscular, desequilíbrio muscular.",
    tratamentos: ["Exercícios de correção postural", "Fortalecimento cervical", "Alongamento da musculatura anterior", "Correção postural", "RPG", "Massoterapia"]
  },
  {
    id: 13,
    nome: "Hiperlordose Lombar",
    categoria: "Coluna Vertebral",
    causas: "Aumento excessivo da curvatura lombar, causado por fraqueza abdominal, posturais, desequilíbrio muscular.",
    tratamentos: ["Fortalecimento abdominal", "Exercícios de alongamento lombar", "Correção postural", "RPG", "Massoterapia", "Cinesioterapia"]
  },
  {
    id: 14,
    nome: "Hipercifose Torácica",
    categoria: "Coluna Vertebral",
    causas: "Aumento excessivo da curvatura torácica, causado por postura inadequada, fraqueza muscular, degeneração.",
    tratamentos: ["Exercícios de correção postural", "Fortalecimento dorsal", "Alongamento peitoral", "RPG", "Cinesioterapia", "Massoterapia"]
  },
  {
    id: 15,
    nome: "Cifose",
    categoria: "Coluna Vertebral",
    causas: "Curvatura excessiva da coluna torácica, causada por posturais, osteoporose, doença de Scheuermann.",
    tratamentos: ["Exercícios de fortalecimento dorsal", "Correção postural", "RPG", "Cinesioterapia", "Hidroterapia"]
  },
  {
    id: 16,
    nome: "Estenose Spinal",
    categoria: "Coluna Vertebral",
    causas: "Estreitamento do canal spinal, causado por degeneração, hérnia de disco, artrose, espessamento ligamentar.",
    tratamentos: ["Exercícios de alongamento", "Fortalecimento do core", "Hidroterapia", "Cinesioterapia", "Correção postural", "Eletroterapia"]
  },
  {
    id: 17,
    nome: "Estenose Forami Nal",
    categoria: "Coluna Vertebral",
    causas: "Estreitamento dos forames intervertebrais, causado por degeneração, hérnia, artrose.",
    tratamentos: ["Exercícios de flexibilidade", "Fortalecimento", "Tração", "Hidroterapia", "Eletroterapia"]
  },
  {
    id: 18,
    nome: "Radiculopatia Cervical",
    categoria: "Coluna Vertebral",
    causas: "Compressão de raiz nervosa cervical, causada por hérnia de disco, estenose, trauma.",
    tratamentos: ["Exercícios de Mckenzie", "Alongamentos", "Tração cervical", "Eletroterapia", "Massoterapia", "Correção postural"]
  },
  {
    id: 19,
    nome: "Radiculopatia Lombar",
    categoria: "Coluna Vertebral",
    causas: "Compressão de raiz nervosa lombar, causada por hérnia de disco, estenose, esporão ósseo.",
    tratamentos: ["Exercícios de Mckenzie", "Tração lombar", "Alongamentos", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 20,
    nome: "Lombocruralgia",
    categoria: "Coluna Vertebral",
    causas: "Dor lombar que irradia para a face anterior da coxa, causada por hérnia discal L3-L4, compressão do nervo femoral.",
    tratamentos: ["Exercícios de alongamento", "Fortalecimento", "Tração", "Eletroterapia", "Massoterapia", "Correção postural"]
  },
  {
    id: 21,
    nome: "Cervicobraquialgia",
    categoria: "Coluna Vertebral",
    causas: "Dor cervical que irradia para o membro superior, causada por hérnia cervical, compressão nervosa, síndrome do impacto.",
    tratamentos: ["Alongamentos cervicais", "Fortalecimento cervical", "Mobilização", "Tração", "Eletroterapia", "Massoterapia", "Correção postural"]
  },
  {
    id: 22,
    nome: "Ciática",
    categoria: "Coluna Vertebral",
    causas: "Dor que irradia ao longo do nervo ciático, causada por hérnia discal, estenose, síndrome do piriforme.",
    tratamentos: ["Exercícios de alongamento do nervo ciático", "Fortalecimento", "Massoterapia", "Eletroterapia", "Hidroterapia", "Tração", "Correção postural"]
  },
  {
    id: 23,
    nome: "Dor Facetária",
    categoria: "Coluna Vertebral",
    causas: "Dor originada das articulações facetárias, causada por artrose, trauma, esforço repetitivo.",
    tratamentos: ["Exercícios de mobilização", "Fortalecimento", "Termoterapia", "Eletroterapia", "Massoterapia", "RPG"]
  },
  {
    id: 24,
    nome: "Dor Miofascial Cervical",
    categoria: "Coluna Vertebral",
    causas: "Dor em pontos-gatilho da musculatura cervical, causada por tensão, postura, trauma.",
    tratamentos: ["Liberação miofascial", "Massoterapia", "Alongamentos", "Dry needling", "Eletroterapia", "Cinesioterapia"]
  },
  {
    id: 25,
    nome: "Dor Miofascial Lombar",
    categoria: "Coluna Vertebral",
    causas: "Dor em pontos-gatilho da musculatura lombar, causada por tensão, postura, trauma.",
    tratamentos: ["Liberação miofascial", "Massoterapia", "Alongamentos", "Dry needling", "Eletroterapia", "Cinesioterapia"]
  },
  {
    id: 26,
    nome: "Torcicolo",
    categoria: "Coluna Vertebral",
    causas: "Contratura involuntária da musculatura cervical, causada por má postura, trauma, estresse, correntes de ar.",
    tratamentos: ["Alongamentos cervicais", "Massoterapia", "Calor", "Eletroterapia", "Liberação miofascial", "Cinesioterapia"]
  },
  {
    id: 27,
    nome: "Cervicalgia Estrutural",
    categoria: "Coluna Vertebral",
    causas: "Dor cervical de origem estrutural (óssea, articular), causada por artrose, degeneração, trauma.",
    tratamentos: ["Exercícios de fortalecimento", "Alongamentos", "Mobilização", "Correção postural", "Eletroterapia", "Hidroterapia"]
  },
  {
    id: 28,
    nome: "Osteoporose Vertebral",
    categoria: "Coluna Vertebral",
    causas: "Perda de densidade óssea nas vértebras, causada por envelhecimento, deficiência de cálcio, menopausa, sedentarismo.",
    tratamentos: ["Exercícios de carga", "Fortalecimento", "Hidroterapia", "Correção postural", "Cinesioterapia", "Educação postural"]
  },
  {
    id: 29,
    nome: "Fratura Vertebral por Compressão",
    categoria: "Coluna Vertebral",
    causas: "Colapso de vértebra por trauma ou osteoporose, causado por quedas, osteoporose avançada, trauma de alta energia.",
    tratamentos: ["Exercícios de acordo com fase de consolidação", "Fortalecimento suave", "Correção postural", "Hidroterapia", "Cinesioterapia", "Educação"]
  },
  {
    id: 30,
    nome: "Dor Relacionada ao Disco Intervertebral",
    categoria: "Coluna Vertebral",
    causas: "Dor originada do disco intervertebral, causada por degeneração, desidratação, lesão discal.",
    tratamentos: ["Exercícios de extensão", "Fortalecimento", "Hidroterapia", "Correção postural", "Eletroterapia"]
  },

  // Ombro
  {
    id: 31,
    nome: "Tendinite do Manguito Rotador",
    categoria: "Ombro",
    causas: "Inflamação dos tendões do manguito rotador, causada por uso excessivo, movimentos repetitivos, trauma, envelhecimento.",
    tratamentos: ["Repouso relativo", "Crioterapia", "Eletroterapia (TENS, ultrassom)", "Fortalecimento progressivo", "Alongamentos", "Massoterapia"]
  },
  {
    id: 32,
    nome: "Tendinopatia do Manguito Rotador",
    categoria: "Ombro",
    causas: "Degeneração crônica dos tendões do manguito rotador, causada por uso excessivo, envelhecimento, má biomecânica.",
    tratamentos: ["Fortalecimento excêntrico", "Exercícios de alongamento", "Eletroterapia", "Massoterapia", "Cinesioterapia", "Ondas de choque"]
  },
  {
    id: 33,
    nome: "Rotura do Manguito Rotador",
    categoria: "Ombro",
    causas: "Ruptura parcial ou total dos tendões do manguito rotador, causada por trauma, degeneração, movimentos repetitivos.",
    tratamentos: ["Exercícios de fortalecimento (após fase aguda)", "Mobilização passiva", "Cinesioterapia", "Hidroterapia", "Fortalecimento progressivo"]
  },
  {
    id: 34,
    nome: "Rotura do Tendão Supraespinhal",
    categoria: "Ombro",
    causas: "Ruptura do tendão do músculo supraespinhal, causada por trauma, degeneração, uso excessivo.",
    tratamentos: ["Fortalecimento dos rotadores", "Exercícios de alongamento", "Cinesioterapia", "Hidroterapia", "Reabilitação funcional"]
  },
  {
    id: 35,
    nome: "Rotura do Tendão Subescapular",
    categoria: "Ombro",
    causas: "Ruptura do tendão do músculo subescapular, causada por trauma, degeneração.",
    tratamentos: ["Fortalecimento do subescapular", "Exercícios de rotação interna", "Cinesioterapia", "Hidroterapia"]
  },
  {
    id: 36,
    nome: "Rotura do Tendão Infraespinhal",
    categoria: "Ombro",
    causas: "Ruptura do tendão do músculo infraespinhal, causada por trauma, degeneração.",
    tratamentos: ["Fortalecimento dos rotadores externos", "Exercícios de rotação externa", "Cinesioterapia", "Hidroterapia"]
  },
  {
    id: 37,
    nome: "Capsulite Adesiva",
    categoria: "Ombro",
    causas: "Inflamação e endurecimento da cápsula articular do ombro (ombro congelado), de origem traumática, idiopática, diabetes.",
    tratamentos: ["Mobilização articular progressiva", "Alongamentos", "Exercícios de amplitude de movimento", "Massoterapia", "Calor", "Cinesioterapia"]
  },
  {
    id: 38,
    nome: "Ombro Congelado",
    categoria: "Ombro",
    causas: "Limitação da mobilidade do ombro por inflamação capsular, causada por imobilização prolongada, trauma, doença sistêmica.",
    tratamentos: ["Mobilização progressiva", "Alongamentos passivos e ativos", "Exercícios de Pendulum", "Massoterapia", "Calor", "Hidroterapia"]
  },
  {
    id: 39,
    nome: "Síndrome do Impacto",
    categoria: "Ombro",
    causas: "Compressão das estruturas do ombro entre úmero e acrômio, causada por movimentos repetitivos overhead, alterações anatômicas.",
    tratamentos: ["Exercícios de alongamento", "Fortalecimento do manguito rotador", "Correção mecânica", "Eletroterapia", "Cinesioterapia"]
  },
  {
    id: 40,
    nome: "Impingement Subacromial",
    categoria: "Ombro",
    causas: "Compressão do tendão supraespinhal sob o acrômio, causada por anatomia, uso excessivo, fraqueza muscular.",
    tratamentos: ["Fortalecimento do manguito rotador", "Alongamentos", "Correção postural", "Eletroterapia", "Massoterapia"]
  },
  {
    id: 41,
    nome: "Bursite Subacromial",
    categoria: "Ombro",
    causas: "Inflamação da bursa subacromial, causada por atrito, trauma, sobrecarga, infecção.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Massoterapia", "Aspiração (se necessário)", "Fortalecimento"]
  },
  {
    id: 42,
    nome: "Bursite Deltoidea",
    categoria: "Ombro",
    causas: "Inflamação da bursa deltoidea, causada por trauma, pressão direta.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Massoterapia", "Fortalecimento"]
  },
  {
    id: 43,
    nome: "Luxação Glenoumeral",
    categoria: "Ombro",
    causas: "Deslocamento da cabeça do úmero da cavidade glenoidal, causada por trauma, queda sobre o membro.",
    tratamentos: ["Redução (se necessária)", "Imobilização inicial", "Mobilização progressiva", "Fortalecimento", "Reabilitação funcional"]
  },
  {
    id: 44,
    nome: "Instabilidade Glenoumeral",
    categoria: "Ombro",
    causas: "Falha dos mecanismos de estabilidade do ombro, causada por luxações prévias, laxidade ligamentar, trauma.",
    tratamentos: ["Fortalecimento do manguito rotador", "Exercícios de estabilidade", "Cinesioterapia", "Hidroterapia"]
  },
  {
    id: 45,
    nome: "Lesão de Bankart",
    categoria: "Ombro",
    causas: "Lesão do labrum articular anterior, causada por luxação anterior do ombro.",
    tratamentos: ["Fortalecimento rotacional", "Exercícios de estabilidade", "Cinesioterapia", "Reabilitação pós-cirúrgica"]
  },
  {
    id: 46,
    nome: "Lesão de Hill-Sachs",
    categoria: "Ombro",
    causas: "Impactação da cabeça umeral contra a cavidade glenoidal, causada por luxação anterior.",
    tratamentos: ["Fortalecimento", "Exercícios funcionais", "Cinesioterapia", "Reabilitação"]
  },
  {
    id: 47,
    nome: "Artrose Acromioclavicular",
    categoria: "Ombro",
    causas: "Degeneração da articulação acromioclavicular, causada por uso excessivo, trauma, envelhecimento.",
    tratamentos: ["Exercícios de alongamento", "Fortalecimento", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 48,
    nome: "Artrose Esternoclavicular",
    categoria: "Ombro",
    causas: "Degeneração da articulação esternoclavicular, causada por trauma, envelhecimento.",
    tratamentos: ["Exercícios de mobilidade", "Fortalecimento", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 49,
    nome: "Fratura de Clavícula",
    categoria: "Ombro",
    causas: "Quebra da clavícula, causada por queda, trauma direto, acidente esportivo.",
    tratamentos: ["Imobilização inicial", "Mobilização precoce", "Fortalecimento progressivo", "Exercícios funcionais", "Hidroterapia"]
  },
  {
    id: 50,
    nome: "Fratura de Úmero",
    categoria: "Ombro",
    causas: "Quebra do úmero, causada por trauma, quedas, acidentes.",
    tratamentos: ["Imobilização inicial", "Mobilização progressiva", "Fortalecimento gradual", "Exercícios funcionais", "Hidroterapia"]
  },
  {
    id: 51,
    nome: "Neuropatia do Plexo Braquial",
    categoria: "Ombro",
    causas: "Comprometimento do plexo braquial, causado por trauma, compressão, tumores.",
    tratamentos: ["Exercícios de fortalecimento", "Alongamentos", "Eletroterapia", "Massoterapia", "Cinesioterapia"]
  },

  // Cotovelo
  {
    id: 52,
    nome: "Epicondilite Lateral",
    categoria: "Cotovelo",
    causas: "Inflamação dos tendões laterais do cotovelo (cotovelo de tenista), causada por movimentos repetitivos de extensão do punho, esporte, trabalho.",
    tratamentos: ["Repouso relativo", "Crioterapia", "Eletroterapia", "Fortalecimento excêntrico", "Alongamentos", "Massoterapia", "Bandagem elástica"]
  },
  {
    id: 53,
    nome: "Cotovelo de Tenista",
    categoria: "Cotovelo",
    causas: "Epicondilite lateral causada por movimentos repetitivos do esporte, técnica incorreta, material inadequado.",
    tratamentos: ["Exercícios de fortalecimento do antebraço", "Alongamentos", "Correção da técnica", "Eletroterapia", "Massoterapia", "Repouso"]
  },
  {
    id: 54,
    nome: "Epicondilite Medial",
    categoria: "Cotovelo",
    causas: "Inflamação dos tendões mediais do cotovelo (cotovelo de golfista), causada por movimentos repetitivos de flexão, esporte, trabalho.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Fortalecimento", "Alongamentos", "Massoterapia", "Bandagem"]
  },
  {
    id: 55,
    nome: "Cotovelo de Golfista",
    categoria: "Cotovelo",
    causas: "Epicondilite medial caused by movimentos repetitivos do esporte, uso excessivo, técnica incorreta.",
    tratamentos: ["Fortalecimento do punho e antebraço", "Alongamentos", "Eletroterapia", "Massoterapia", "Repouso"]
  },
  {
    id: 56,
    nome: "Epitrocleite",
    categoria: "Cotovelo",
    causas: "Inflamação da epitróclea, causada por movimentos repetitivos de flexão.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Fortalecimento", "Massoterapia", "Alongamentos"]
  },
  {
    id: 57,
    nome: "Bursite Olecraniana",
    categoria: "Cotovelo",
    causas: "Inflamação da bursa do olécrano, causada por trauma direto, pressão, infecção.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Massagem de compressão", "Aspiração (se necessário)", "Hidroterapia"]
  },
  {
    id: 58,
    nome: "Artrose do Cotovelo",
    categoria: "Cotovelo",
    causas: "Degeneração da articulação do cotovelo, causada por envelhecimento, trauma prévio, uso excessivo.",
    tratamentos: ["Exercícios de mobilidade", "Fortalecimento", "Hidroterapia", "Eletroterapia", "Massoterapia"]
  },
  {
    id: 59,
    nome: "Contratura de Cotovelo",
    categoria: "Cotovelo",
    causas: "Limitação da amplitude de movimento do cotovelo, causada por imobilização, trauma, inflamação.",
    tratamentos: ["Mobilização progressiva", "Alongamentos", "Cinesioterapia", "Termoterapia", "Hidroterapia"]
  },
  {
    id: 60,
    nome: "Luxação de Cotovelo",
    categoria: "Cotovelo",
    causas: "Deslocamento da articulação do cotovelo, causada por trauma, queda sobre o membro estendido.",
    tratamentos: ["Redução (se necessária)", "Imobilização", "Mobilização progressiva", "Fortalecimento", "Exercícios funcionais"]
  },
  {
    id: 61,
    nome: "Fratura de Cotovelo",
    categoria: "Cotovelo",
    causas: "Quebra dos ossos do cotovelo, causada por trauma, quedas, acidentes.",
    tratamentos: ["Imobilização inicial", "Mobilização progressiva", "Fortalecimento gradual", "Exercícios funcionais", "Hidroterapia"]
  },
  {
    id: 62,
    nome: "Síndrome do Túnel Cubital",
    categoria: "Cotovelo",
    causas: "Compressão do nervo ulnar no cotovelo, causada por pressão prolongada, trauma, anatomia.",
    tratamentos: ["Exercícios de alongamento do nervo ulnar", "Fortalecimento", "Eletroterapia", "Massoterapia", "Correção postural", "Hidroterapia"]
  },
  {
    id: 63,
    nome: "Neuropatia do Ulnar",
    categoria: "Cotovelo",
    causas: "Afecção do nervo ulnar no cotovelo, causada por compressão, trauma, esforço repetitivo.",
    tratamentos: ["Alongamentos", "Fortalecimento", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },

  // Punho e Mão
  {
    id: 64,
    nome: "Síndrome do Túnel do Carpo",
    categoria: "Punho e Mão",
    causas: "Compressão do nervo mediano no punho, causada por movimentos repetitivos, retenção de líquidos, gravidez.",
    tratamentos: ["Exercícios de alongamento do nervo mediano", "Fortalecimento", "TENS", "Ultrassom", "Massoterapia", "Hidroterapia", "Órtese de punho"]
  },
  {
    id: 65,
    nome: "Tenossinovite de De Quervain",
    categoria: "Punho e Mão",
    causas: "Inflamação dos tendões do polegar no punho, causada por movimentos repetitivos do polegar, pós-parto.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Massoterapia", "Fortalecimento", "Bandagem"]
  },
  {
    id: 66,
    nome: "Dedo em Gatilho",
    categoria: "Punho e Mão",
    causas: "Bloqueio do movimento do dedo por inflamação do tendão, causada por movimentos repetitivos, trauma.",
    tratamentos: ["Exercícios de mobilização", "Alongamentos", "Massoterapia", "Calor", "Hidroterapia", "Infiltração (se necessário)"]
  },
  {
    id: 67,
    nome: "Rizartrose",
    categoria: "Punho e Mão",
    causas: "Artrose da articulação trapeziometacarpal do polegar, caused by uso excessivo, envelhecimento, trauma.",
    tratamentos: ["Exercícios de mobilidade", "Fortalecimento do polegar", "Hidroterapia", "Eletroterapia", "Massoterapia", "Proteção articular"]
  },
  {
    id: 68,
    nome: "Artrose das Mãos",
    categoria: "Punho e Mão",
    causas: "Degeneração das articulações das mãos, causada por envelhecimento, genética, uso excessivo.",
    tratamentos: ["Exercícios de mobilidade", "Hidroterapia", "Eletroterapia", "Massoterapia", "Fortalecimento"]
  },
  {
    id: 69,
    nome: "Contratura de Dupuytren",
    categoria: "Punho e Mão",
    causas: "Espessamento da fáscia palmar causando contração dos dedos, causado por fatores genéticos, alcoholism, diabetes.",
    tratamentos: ["Exercícios de alongamento", "Massoterapia", "Hidroterapia", "Cinesioterapia", "Órtese de extensão (pós-cirurgia)"]
  },
  {
    id: 70,
    nome: "Lesão de Stener",
    categoria: "Punho e Mão",
    causas: "Lesão do tendão extensor do dedo com retração, causada por trauma direto.",
    tratamentos: ["Imobilização específica", "Exercícios de mobilização progressiva", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 71,
    nome: "Luxação de Punho",
    categoria: "Punho e Mão",
    causas: "Deslocamento dos ossos do punho, caused by trauma, queda sobre a mão estendida.",
    tratamentos: ["Redução", "Imobilização", "Mobilização progressiva", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 72,
    nome: "Fratura de Escarbeck",
    categoria: "Punho e Mão",
    causas: "Fratura do escafoide (osso do punho), causada por quedas sobre a mão estendida.",
    tratamentos: ["Imobilização prolongada", "Mobilização progressiva", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 73,
    nome: "Fratura de Punho",
    categoria: "Punho e Mão",
    causas: "Fratura dos ossos do punho, caused by trauma, quedas, acidentes.",
    tratamentos: ["Imobilização inicial", "Mobilização progressiva", "Fortalecimento", "Hidroterapia", "Exercícios funcionais"]
  },
  {
    id: 74,
    nome: "Entorse de Punho",
    categoria: "Punho e Mão",
    causas: "Lesão dos ligamentos do punho, caused by trauma, quedas, torção.",
    tratamentos: ["Repouso", "Crioterapia", "Bandagem", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 75,
    nome: "Síndrome de Guyon",
    categoria: "Punho e Mão",
    causas: "Compressão do nervo ulnar no punho, causada por pressão, trauma, uso excessivo.",
    tratamentos: ["Alongamentos", "Fortalecimento", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },

  // Quadril e Pelve
  {
    id: 76,
    nome: "Coxartrose",
    categoria: "Quadril e Pelve",
    causas: "Artrose da articulação do quadril, caused by envelhecimento, uso excessivo, malformações, trauma.",
    tratamentos: ["Fortalecimento dos adutores", "Exercícios de mobilidade", "Hidroterapia", "Eletroterapia", "Massoterapia", "Alongamentos"]
  },
  {
    id: 77,
    nome: "Artrose do Quadril",
    categoria: "Quadril e Pelve",
    causas: "Degeneração da cartilagem do quadril, caused by envelhecimento, sobrecarga, malformações.",
    tratamentos: ["Fortalecimento", "Exercícios de mobilidade", "Hidroterapia", "Eletroterapia", "Massoterapia", "Alongamentos"]
  },
  {
    id: 78,
    nome: "Bursite Trocantérica",
    categoria: "Quadril e Pelve",
    causas: "Inflamação da bursa do trocânter maior, caused by fricção, trauma, uso excessivo.",
    tratamentos: ["Repouso relativo", "Crioterapia", "Eletroterapia", "Massoterapia", "Fortalecimento dos abdutores", "Alongamentos"]
  },
  {
    id: 79,
    nome: "Bursite Iliopsoas",
    categoria: "Quadril e Pelve",
    causas: "Inflamação da bursa do músculo iliopsoas, caused by uso excessivo, artrite.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 80,
    nome: "Síndrome do Piriforme",
    categoria: "Quadril e Pelve",
    causas: "Contratura ou espasmo do músculo piriforme comprimindo o nervo ciático, caused by tensão, postura, trauma.",
    tratamentos: ["Alongamentos do piriforme", "Liberação miofascial", "Massoterapia", "Eletroterapia", "Hidroterapia", "Dry needling"]
  },
  {
    id: 81,
    nome: "Pubalgia",
    categoria: "Quadril e Pelve",
    causas: "Dor na região inguinal/púbica, caused by excesso de treino, trauma, tensão muscular.",
    tratamentos: ["Repouso relativo", "Alongamentos", "Fortalecimento do CORE", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 82,
    nome: "Dor Inguinal",
    categoria: "Quadril e Pelve",
    causas: "Dor na região da virilha, caused by lesão muscular, hérnia, problema articular.",
    tratamentos: ["Alongamentos", "Fortalecimento", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 83,
    nome: "Dor Adutora",
    categoria: "Quadril e Pelve",
    causas: "Dor nos músculos adutores da coxa, caused by lesão, esforço excessivo.",
    tratamentos: ["Alongamentos", "Fortalecimento adutor", "Massoterapia", "Hidroterapia", "Eletroterapia"]
  },
  {
    id: 84,
    nome: "Síndrome de Impactação",
    categoria: "Quadril e Pelve",
    causas: "Compressão de estruturas no quadril durante movimento, caused by anatomia, uso excessivo.",
    tratamentos: ["Exercícios de mobilidade", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 85,
    nome: "Impacto Femoroacetabular",
    categoria: "Quadril e Pelve",
    causas: "Contato anormal entre fêmur e acetábulo, caused by alterações anatômicas.",
    tratamentos: ["Exercícios de mobilidade", "Fortalecimento", "Hidroterapia", "Correção biomecânica"]
  },
  {
    id: 86,
    nome: "Displasia do Quadril",
    categoria: "Quadril e Pelve",
    causas: "Alteração do desenvolvimento do quadril, caused by fatores genéticos, posição fetal.",
    tratamentos: ["Exercícios de mobilidade", "Hidroterapia", "Fortalecimento"]
  },
  {
    id: 87,
    nome: "Necrose Avascular",
    categoria: "Quadril e Pelve",
    causas: "Morte do tecido ósseo por falta de vascularização, caused by trauma, alcoholism, medicamentos.",
    tratamentos: ["Exercícios de baixo impacto", "Hidroterapia", "Fortalecimento", "Alívio de pressão"]
  },
  {
    id: 88,
    nome: "Doença de Perthes",
    categoria: "Quadril e Pelve",
    causas: "Necrose avascular da cabeça femoral em crianças, caused by vascularização insuficiente.",
    tratamentos: ["Exercícios de mobilidade", "Hidroterapia", "Fortalecimento"]
  },
  {
    id: 89,
    nome: "Luxação Congênita do Quadril",
    categoria: "Quadril e Pelve",
    causas: "Deslocamento do quadril presente ao nascimento, caused by fatores genéticos, posição fetal.",
    tratamentos: ["Exercícios de mobilidade", "Hidroterapia", "Fortalecimento"]
  },
  {
    id: 90,
    nome: "Fratura de Quadril",
    categoria: "Quadril e Pelve",
    causas: "Quebra do fêmur proximal, caused by quedas, osteoporose, trauma.",
    tratamentos: ["Mobilização precoce", "Fortalecimento progressivo", "Hidroterapia", "Exercícios funcionais"]
  },
  {
    id: 91,
    nome: "Fratura do Fêmur Proximal",
    categoria: "Quadril e Pelve",
    causas: "Fratura da região do fêmur proximal, caused by trauma, osteoporose.",
    tratamentos: ["Reabilitação pós-cirúrgica", "Mobilização progressiva", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 92,
    nome: "Fratura do Acetábulo",
    categoria: "Quadril e Pelve",
    causas: "Fratura do osso do acetábulo, caused by trauma de alta energia, quedas.",
    tratamentos: ["Imobilização inicial", "Reabilitação progressiva", "Fortalecimento", "Hidroterapia"]
  },

  // Joelho
  {
    id: 93,
    nome: "Gonartrose",
    categoria: "Joelho",
    causas: "Artrose do joelho, caused by envelhecimento, trauma, uso excessivo, malformações.",
    tratamentos: ["Fortalecimento quadríceps", "Hidroterapia", "Eletroterapia", "Massoterapia", "Alongamentos", "Exercícios de baixo impacto"]
  },
  {
    id: 94,
    nome: "Artrose do Joelho",
    categoria: "Joelho",
    causas: "Degeneração da articulação do joelho, caused by envelhecimento, sobrecarga, trauma.",
    tratamentos: ["Fortalecimento", "Exercícios de mobilidade", "Hidroterapia", "Eletroterapia", "Massoterapia", "Alongamentos"]
  },
  {
    id: 95,
    nome: "Condropatia Rotuliana",
    categoria: "Joelho",
    causas: "Lesão da cartilagem da rótula, caused by trauma, uso excessivo, desalinhamento.",
    tratamentos: ["Fortalecimento quadríceps", "Exercícios de alongamento", "Hidroterapia", "Eletroterapia"]
  },
  {
    id: 96,
    nome: "Condromalácia Patelar",
    categoria: "Joelho",
    causas: "Amolecimento da cartilagem da rótula, caused by fricção, desalinhamento, uso excessivo.",
    tratamentos: ["Fortalecimento quadríceps", "Exercícios de alongamento", "Hidroterapia", "Eletroterapia"]
  },
  {
    id: 97,
    nome: "Síndrome de Dor Patelofemoral",
    categoria: "Joelho",
    causas: "Dor na articulação entre rótula e fêmur, caused by desalinhamento, uso excessivo, fraqueza muscular.",
    tratamentos: ["Fortalecimento quadríceps", "Alongamentos", "Correção biomecânica", "Hidroterapia"]
  },
  {
    id: 98,
    nome: "Lesão do LCA",
    categoria: "Joelho",
    causas: "Lesão do ligamento cruzado anterior, caused by trauma esportivo, torção, quedas.",
    tratamentos: ["Reabilitação pós-cirúrgica ou conservativa", "Fortalecimento quadríceps", "Exercícios de estabilidade", "Hidroterapia"]
  },
  {
    id: 99,
    nome: "Lesão do LCP",
    categoria: "Joelho",
    causas: "Lesão do ligamento cruzado posterior, caused by trauma frontal, quedas.",
    tratamentos: ["Fortalecimento", "Exercícios de estabilidade", "Hidroterapia"]
  },
  {
    id: 100,
    nome: "Lesão do LCM",
    categoria: "Joelho",
    causas: "Lesão do ligamento colateral medial, caused by trauma lateral, torção.",
    tratamentos: ["Fortalecimento", "Exercícios de estabilidade", "Hidroterapia"]
  },
  {
    id: 101,
    nome: "Lesão do LCL",
    categoria: "Joelho",
    causas: "Lesão do ligamento colateral lateral, caused by trauma medial, torção.",
    tratamentos: ["Fortalecimento", "Exercícios de estabilidade", "Hidroterapia"]
  },
  {
    id: 102,
    nome: "Lesão do Ligamento Cruzado Posterior",
    categoria: "Joelho",
    causas: "Lesão do LCP, caused by trauma de alta energia, acidente.",
    tratamentos: ["Fortalecimento", "Exercícios de estabilidade", "Hidroterapia"]
  },
  {
    id: 103,
    nome: "Rotura de Menisco Medial",
    categoria: "Joelho",
    causas: "Ruptura do menisco medial, caused by trauma, torção, degeneração.",
    tratamentos: ["Fortalecimento", "Hidroterapia", "Exercícios funcionais", "Reabilitação ou pós-cirurgia"]
  },
  {
    id: 104,
    nome: "Rotura de Menisco Lateral",
    categoria: "Joelho",
    causas: "Ruptura do menisco lateral, caused by trauma, torção, degeneração.",
    tratamentos: ["Fortalecimento", "Hidroterapia", "Exercícios funcionais"]
  },
  {
    id: 105,
    nome: "Lesão Meniscal",
    categoria: "Joelho",
    causas: "Lesão nos meniscos do joelho, caused by trauma, torção, degeneração.",
    tratamentos: ["Fortalecimento", "Hidroterapia", "Exercícios funcionais"]
  },
  {
    id: 106,
    nome: "Cisto de Baker",
    categoria: "Joelho",
    causas: "Cisto na fossa poplítea, caused by acumulação de líquido sinovial, patologia articular.",
    tratamentos: ["Tratamento da causa base", "Compressão", "Eletroterapia", "Hidroterapia", "Aspiração (se necessário)"]
  },
  {
    id: 107,
    nome: "Bursite Anserina",
    categoria: "Joelho",
    causas: "Inflamação da bursa anserina, caused by fricção, uso excessivo,obesidade.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Massoterapia", "Hidroterapia"]
  },
  {
    id: 108,
    nome: "Tendinite Patelar",
    categoria: "Joelho",
    causas: "Inflamação do tendão patelar (joelho de saltador), caused by uso excessivo, saltos repetitivos.",
    tratamentos: ["Repouso", "Crioterapia", "Eletroterapia", "Fortalecimento excêntrico", "Alongamentos"]
  },
  {
    id: 109,
    nome: "Tendinopatia Patelar",
    categoria: "Joelho",
    causas: "Degeneração do tendão patelar, caused by uso excessivo, envelhecimento.",
    tratamentos: ["Fortalecimento excêntrico", "Alongamentos", "Eletroterapia", "Ondas de choque"]
  },
  {
    id: 110,
    nome: "Joelho de Saltador",
    categoria: "Joelho",
    causas: "Tendinite patelar caused by saltos repetitivos, caused by esporte, treinamento excessivo.",
    tratamentos: ["Repouso", "Fortalecimento excêntrico", "Alongamentos", "Crioterapia", "Hidroterapia"]
  },
  {
    id: 111,
    nome: "Doença de Osgood-Schlatter",
    categoria: "Joelho",
    causas: "Irritação da tuberosidade tibial em adolescentes, caused by crescimento rápido, esporte.",
    tratamentos: ["Repouso relativo", "Alongamentos", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 112,
    nome: "Doença de Sinding-Larsen",
    categoria: "Joelho",
    causas: "Irritação do polo inferior da rótula em adolescentes, caused by crescimento, esporte.",
    tratamentos: ["Repouso relativo", "Alongamentos", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 113,
    nome: "Fratura de Joelho",
    categoria: "Joelho",
    causas: "Fratura na região do joelho, caused by trauma, quedas, acidentes.",
    tratamentos: ["Imobilização", "Mobilização progressiva", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 114,
    nome: "Fratura Tibial",
    categoria: "Joelho",
    causas: "Fratura da tíbia, caused by trauma, quedas, acidentes.",
    tratamentos: ["Imobilização", "Reabilitação progressiva", "Fortalecimento"]
  },
  {
    id: 115,
    nome: "Fratura Femoral",
    categoria: "Joelho",
    causas: "Fratura do fêmur, caused by trauma de alta energia, osteoporose.",
    tratamentos: ["Reabilitação pós-cirúrgica", "Mobilização precoce", "Fortalecimento"]
  },
  {
    id: 116,
    nome: "Luxação de Joelho",
    categoria: "Joelho",
    causas: "Deslocamento da articulação do joelho, caused by trauma de alta energia.",
    tratamentos: ["Redução", "Imobilização", "Reabilitação progressiva"]
  },
  {
    id: 117,
    nome: "Instabilidade Ligamentar",
    categoria: "Joelho",
    causas: "Falha dos ligamentos do joelho, caused by lesões prévias, trauma.",
    tratamentos: ["Fortalecimento", "Exercícios de estabilidade", "Hidroterapia"]
  },
  {
    id: 118,
    nome: "Síndrome do Plica Sinovial",
    categoria: "Joelho",
    causas: "Irritação da prega sinovial do joelho, caused by trauma, uso excessivo.",
    tratamentos: ["Exercícios de mobilidade", "Hidroterapia", "Eletroterapia"]
  },

  // Tornozelo e Pé
  {
    id: 119,
    nome: "Entorse de Tornozelo",
    categoria: "Tornozelo e Pé",
    causas: "Lesão dos ligamentos do tornozelo, caused by torção, quedas, esporte.",
    tratamentos: ["Repouso", "Crioterapia", "Bandagem", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 120,
    nome: "Entorse Lateral",
    categoria: "Tornozelo e Pé",
    causas: "Lesão dos ligamentos laterais do tornozelo, caused by torção em inversão, quedas.",
    tratamentos: ["Repouso", "Crioterapia", "Bandagem", "Exercícios de alongamento", "Hidroterapia"]
  },
  {
    id: 121,
    nome: "Entorse Medial",
    categoria: "Tornozelo e Pé",
    causas: "Lesão dos ligamentos mediais do tornozelo, caused by torção em eversão.",
    tratamentos: ["Repouso", "Crioterapia", "Bandagem", "Hidroterapia"]
  },
  {
    id: 122,
    nome: "Luxação de Tornozelo",
    categoria: "Tornozelo e Pé",
    causas: "Deslocamento da articulação do tornozelo, caused by trauma, quedas.",
    tratamentos: ["Redução", "Imobilização", "Reabilitação progressiva"]
  },
  {
    id: 123,
    nome: "Instabilidade Crônica de Tornozelo",
    categoria: "Tornozelo e Pé",
    causas: "Fraqueza dos ligamentos por entorses repetidos, caused by entorses prévios.",
    tratamentos: ["Fortalecimento", "Exercícios de equilíbrio", "Hidroterapia", "Uso de órteses"]
  },
  {
    id: 124,
    nome: "Fascite Plantar",
    categoria: "Tornozelo e Pé",
    causas: "Inflamação da fáscia plantar, caused by uso excessivo, pé plano, envelhecimento.",
    tratamentos: ["Alongamentos da panturrilha", "Alongamentos da fáscia", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 125,
    nome: "Esporão Calcâneo",
    categoria: "Tornozelo e Pé",
    causas: "Proliferação óssea no calcâneo, caused by fascite plantar crônica, pressão.",
    tratamentos: ["Alongamentos", "Hidroterapia", "Eletroterapia", "Palmilhas"]
  },
  {
    id: 126,
    nome: "Fasciite Plantar Crônica",
    categoria: "Tornozelo e Pé",
    causas: "Inflamação crônica da fáscia plantar, caused by uso excessivo, posturais.",
    tratamentos: ["Alongamentos", "Hidroterapia", "Fortalecimento"]
  },
  {
    id: 127,
    nome: "Tendinopatia de Aquiles",
    categoria: "Tornozelo e Pé",
    causas: "Degeneração do tendão de Aquiles, caused by uso excessivo, envelhecimento, treinamento excessivo.",
    tratamentos: ["Fortalecimento excêntrico", "Alongamentos", "Hidroterapia"]
  },
  {
    id: 128,
    nome: "Tendinite de Aquiles",
    categoria: "Tornozelo e Pé",
    causas: "Inflamação do tendão de Aquiles, caused by uso excessivo, saltos, superfície rígida.",
    tratamentos: ["Repouso relativo", "Crioterapia", "Fortalecimento", "Alongamentos", "Hidroterapia"]
  },
  {
    id: 129,
    nome: "Ruptura do Tendão de Aquiles",
    categoria: "Tornozelo e Pé",
    causas: "Ruptura total ou parcial do tendão de Aquiles, caused by trauma, esforço máximo, degeneração.",
    tratamentos: ["Repouso", "Imobilização", "Reabilitação progressiva", "Hidroterapia", "Fortalecimento progressivo"]
  },
  {
    id: 130,
    nome: "Tendinite Tibial Posterior",
    categoria: "Tornozelo e Pé",
    causas: "Inflamação do tendão tibial posterior, caused by uso excessivo, pé plano.",
    tratamentos: ["Repouso", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 131,
    nome: "Tendinite Fibular",
    categoria: "Tornozelo e Pé",
    causas: "Inflamação dos tendões fibulares, caused by uso excessivo, instabilidade.",
    procedimentos: ["Repouso", "Fortalecimento", "Hidroterapia"]
  },
  {
    id: 132,
    nome: " Pé Plano",
    categoria: "Tornozelo e Pé",
    causas: "Colapso do arco longitudinal do pé, caused by genética, fraqueza muscular.",
    tratamentos: ["Fortalecimento dos músculos intrínsecos do pé", "Palmilhas", "Hidroterapia"]
  },
  {
    id: 133,
    nome: "Pé Cavo",
    categoria: "Tornozelo e Pé",
    causas: "Arqueamento excessivo do pé, caused by alterações neuromusculares, genética.",
    tratamientos: ["Alongamentos", "Hidroterapia", "Palmilhas"]
  },
  {
    id: 134,
    nome: "Pé Torto Congênito",
    categoria: "Tornozelo e Pé",
    causas: "Deformidade congênita do pé, caused by fatores genéticos, posição fetal.",
    tratamentos: ["Manipulações", "Gessos", "Hidroterapia"]
  },
  {
    id: 135,
    nome: "Joanetes",
    categoria: "Tornozelo e Pé",
    causas: "Desvio do hálux (hallux valgus), caused by calzado inadequado, genética, posturais.",
    tratamientos: ["Exercícios de mobilidade", "Hidroterapia"]
  },
  {
    id: 136,
    nome: "Hallux Valgus",
    categoria: "Tornozelo e Pé",
    causas: "Desvio lateral do hálux, caused by genética, calzado, posturais.",
    tratamientos: ["Alongamentos", "Hidroterapia"]
  },
  {
    id: 137,
    nome: "Hallux Rigidus",
    categoria: "Tornozelo e Pé",
    causas: "Rigidez da articulação do hálux, caused by artrose, trauma.",
    tratamentos: ["Exercícios de mobilidade", "Hidroterapia", "Fortalecimento"]
  },
  {
    id: 138,
    nome: "Metatarsalgia",
    categoria: "Tornozelo e Pé",
    causas: "Dor na região metatarsiana do pé, caused by uso excessivo, calçados, atividades.",
    tratamientos: ["Hidroterapia", "Palmilhas", "Alongamentos"]
  },
  {
    id: 139,
    nome: "Neuroma de Morton",
    categoria: "Tornozelo e Pé",
    causas: "Espessamento do nervo interdigital, caused by compressão, calçados apertados.",
    tratamentos: ["Alongamentos", "Hidroterapia"]
  },
  {
    id: 140,
    nome: "Fratura de Tornozelo",
    categoria: "Tornozelo e Pé",
    causas: "Fratura dos ossos do tornozelo, caused by trauma, torção, quedas.",
    tratamientos: ["Imobilização", "Reabilitação progressiva"]
  },
  {
    id: 141,
    nome: "Fratura do Pé",
    categoria: "Tornozelo e Pé",
    causas: "Fratura dos ossos do pé, caused by trauma, quedas, objetos caindo.",
    tratamientos: ["Imobilização", "Hidroterapia"]
  },
  {
    id: 142,
    nome: "Fratura do Calcâneo",
    categoria: "Tornozelo e Pé",
    causas: "Fratura do osso calcâneo, caused by quedas de altura, trauma.",
    tratamentos: ["Reabilitação prolongada", "Hidroterapia", "Mobilização progressiva"]
  },
  {
    id: 143,
    nome: "Fratura do Tarso",
    categoria: "Tornozelo e Pé",
    causas: "Fratura dos ossos do tarso, caused by trauma, quedas.",
    tratamientos: ["Imobilização", "Reabilitação progressiva"]
  },
  {
    id: 144,
    nome: "Doença de Sever",
    categoria: "Tornozelo e Pé",
    causas: "Irritação do calcâneo em crianças/adolescentes, caused by crescimento, esporte.",
    tratamientos: ["Repouso relativo", "Alongamentos", "Hidroterapia"]
  }
];

const categorias = [
  { id: 1, nome: "Coluna Vertebral", icon: "�脊椎", count: 30 },
  { id: 2, nome: "Ombro", icon: "💪", count: 21 },
  { id: 3, nome: "Cotovelo", icon: "🦾", count: 13 },
  { id: 4, nome: "Punho e Mão", icon: "🖐️", count: 12 },
  { id: 5, nome: "Quadril e Pelve", icon: "🦵", count: 17 },
  { id: 6, nome: "Joelho", icon: "🦿", count: 26 },
  { id: 7, nome: "Tornozelo e Pé", icon: "🦶", count: 26 }
];