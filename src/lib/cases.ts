export type ClueCategory =
  | "epidemiology"
  | "history"
  | "clinical"
  | "labs"
  | "imaging";

export const CATEGORY_META: Record<
  ClueCategory,
  { label: string; short: string; icon: string; cost: number }
> = {
  epidemiology: { label: "Epidemiologia e Fatores de Risco", short: "Epidemiologia", icon: "🌍", cost: 5 },
  history:      { label: "Antecedentes", short: "Antecedentes", icon: "📜", cost: 8 },
  clinical:     { label: "Quadro Clínico", short: "Clínica", icon: "🩺", cost: 12 },
  labs:         { label: "Laboratório", short: "Labs", icon: "🧪", cost: 15 },
  imaging:      { label: "Imagem e Charada Final", short: "Imagem", icon: "🩻", cost: 20 },
};

export const CATEGORY_ORDER: ClueCategory[] = [
  "epidemiology",
  "history",
  "clinical",
  "labs",
  "imaging",
];

export interface MedicalCase {
  id: string;
  diagnosis: string;
  aliases: string[];
  isPremium: boolean;
  clues: Record<ClueCategory, string[]>;
  visualClue: {
    prompt: string;
    imageUrl?: string;
    caption: string;
  };
}

export const SEED_CASES: MedicalCase[] = [
  {
    id: "sepse-choque-septico",
    diagnosis: "Sepse / choque séptico",
    aliases: [
      "sepse / choque septico",
      "sepse / choque séptico",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Uma das principais causas de mortalidade em unidades de urgência e UTI no mundo todo.",
        "Mais comum em idosos, imunossuprimidos e pacientes com dispositivos invasivos (cateter, sonda vesical).",
      ],
      history: [
        "Paciente com infecção urinária de repetição, sem tratamento adequado nos últimos dias.",
      ],
      clinical: [
        "Chega ao PS com febre, calafrios e confusão mental aguda.",
        "PA 78x40, FC 128, extremidades frias e tempo de enchimento capilar >3s.",
      ],
      labs: [
        "Lactato venoso 4,2 mmol/L, leucocitose com desvio à esquerda, PCR muito elevada.",
      ],
      imaging: [
        "ex. RX ou USG mostrando o foco infeccioso",
        "qSOFA positivo (FR≥22, PAS≤100, alteração de consciência) + foco urinário confirmado.",
      ],
    },
    visualClue: {
      prompt: "ex. RX ou USG mostrando o foco infeccioso",
      caption: "Sepse / choque séptico",
    },
  },
  {
    id: "infarto-agudo-do-miocardio-com-supra-de-st",
    diagnosis: "Infarto agudo do miocárdio com supra de ST",
    aliases: [
      "infarto agudo do miocardio com supra de st",
      "infarto agudo do miocárdio com supra de st",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa de morte cardiovascular aguda, mais comum em homens acima dos 45 anos.",
        "Tabagismo, dislipidemia, hipertensão e diabetes mal controlados.",
      ],
      history: [
        "Histórico familiar de doença coronariana precoce; paciente sedentário.",
      ],
      clinical: [
        "Dor torácica em aperto, retroesternal, iniciada em repouso há 40 minutos.",
        "Dor irradia para o braço esquerdo e mandíbula, associada a sudorese fria e náusea.",
      ],
      labs: [
        "Troponina ultrassensível elevada e em ascensão em dosagens seriadas.",
      ],
      imaging: [
        "ECG mostrando supradesnivelamento de ST",
        "Supra de ST ≥1mm em duas derivações contíguas de parede inferior (DII, DIII, aVF).",
      ],
    },
    visualClue: {
      prompt: "ECG mostrando supradesnivelamento de ST",
      caption: "Infarto agudo do miocárdio com supra de ST",
    },
  },
  {
    id: "tromboembolismo-pulmonar",
    diagnosis: "Tromboembolismo pulmonar (TEP)",
    aliases: [
      "tromboembolismo pulmonar (tep)",
      "tep",
      "tromboembolismo pulmonar",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa importante e subdiagnosticada de morte súbita em pacientes hospitalizados.",
        "Imobilização prolongada, cirurgia recente, uso de anticoncepcional oral, neoplasia ativa.",
      ],
      history: [
        "Pós-operatório de cirurgia ortopédica há 10 dias, acamado.",
      ],
      clinical: [
        "Dispneia súbita associada a dor torácica pleurítica.",
        "Taquicardia, taquipneia, dessaturação, panturrilha direita edemaciada e dolorosa.",
      ],
      labs: [
        "D-dímero muito elevado; gasometria com hipoxemia e alcalose respiratória.",
      ],
      imaging: [
        "angioTC de tórax com falha de enchimento em artéria pulmonar",
        "Escore de Wells alto + sinal clássico de McConnell no ecocardiograma (hipocinesia de VD com poupança do ápice).",
      ],
    },
    visualClue: {
      prompt: "angioTC de tórax com falha de enchimento em artéria pulmonar",
      caption: "Tromboembolismo pulmonar (TEP)",
    },
  },
  {
    id: "avc-isquemico",
    diagnosis: "AVC isquêmico",
    aliases: [
      "avc isquemico",
      "avc isquêmico",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Segunda maior causa de morte no mundo e principal causa de incapacidade em adultos.",
        "Fibrilação atrial não anticoagulada, hipertensão, estenose carotídea.",
      ],
      history: [
        "Paciente com FA crônica em uso irregular de anticoagulante.",
      ],
      clinical: [
        "Início súbito de fraqueza em dimídio direito, notado pela família há 1 hora.",
        "Desvio de rima, disartria e afasia de expressão associados.",
      ],
      labs: [
        "Glicemia capilar normal (importante excluir hipoglicemia como diferencial).",
      ],
      imaging: [
        "TC de crânio sem sangramento, ou angioTC com oclusão de grande vaso",
        "NIHSS elevado, dentro da janela trombolítica (<4,5h), sem contraindicações — candidato a trombólise.",
      ],
    },
    visualClue: {
      prompt: "TC de crânio sem sangramento, ou angioTC com oclusão de grande vaso",
      caption: "AVC isquêmico",
    },
  },
  {
    id: "cetoacidose-diabetica",
    diagnosis: "Cetoacidose diabética",
    aliases: [
      "cetoacidose diabetica",
      "cetoacidose diabética",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Complicação aguda mais comum em pacientes com diabetes tipo 1, mas pode ocorrer no tipo 2.",
        "Infecção concomitante, má aderência à insulinoterapia, uso de corticoide.",
      ],
      history: [
        "Adolescente diabético tipo 1 que parou de aplicar insulina há 2 dias.",
      ],
      clinical: [
        "Dor abdominal difusa, náuseas e vômitos, poliúria e polidipsia.",
        "Hálito cetônico, respiração de Kussmaul, desidratação importante.",
      ],
      labs: [
        "Glicemia >250, gasometria com acidose metabólica de ânion gap elevado, cetonemia/cetonúria positivas.",
      ],
      imaging: [
        "ex. RX de tórax para excluir foco infeccioso desencadeante",
        "pH <7,3 + bicarbonato <18 + cetonas positivas + hiperglicemia = tríade diagnóstica fechada.",
      ],
    },
    visualClue: {
      prompt: "ex. RX de tórax para excluir foco infeccioso desencadeante",
      caption: "Cetoacidose diabética",
    },
  },
  {
    id: "pneumonia-adquirida-na-comunidade-grave",
    diagnosis: "Pneumonia adquirida na comunidade grave",
    aliases: [
      "pneumonia adquirida na comunidade grave",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa infecciosa de internação em adultos, mais grave em idosos e imunossuprimidos.",
        "Tabagismo, DPOC prévia, etilismo, institucionalização recente.",
      ],
      history: [
        "Idoso institucionalizado, com quadro gripal há 5 dias que piorou.",
      ],
      clinical: [
        "Tosse produtiva, febre alta e dispneia progressiva.",
        "Estertores crepitantes localizados, FR 32irpm, confusão mental nova.",
      ],
      labs: [
        "Leucocitose com desvio, PCR elevada, ureia elevada (componente do CURB-65).",
      ],
      imaging: [
        "RX de tórax com consolidação lobar",
        "CURB-65 ≥3 — indicação de internação em UTI, cobertura para germes atípicos e típicos.",
      ],
    },
    visualClue: {
      prompt: "RX de tórax com consolidação lobar",
      caption: "Pneumonia adquirida na comunidade grave",
    },
  },
  {
    id: "insuficiencia-cardiaca-descompensada",
    diagnosis: "Insuficiência cardíaca descompensada",
    aliases: [
      "insuficiencia cardiaca descompensada",
      "insuficiência cardíaca descompensada",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa de internação em maiores de 65 anos no mundo.",
        "HAS de longa data, cardiopatia isquêmica prévia, má aderência a diuréticos.",
      ],
      history: [
        "Paciente com ICFEr conhecida, parou de tomar furosemida há uma semana.",
      ],
      clinical: [
        "Dispneia progressiva aos esforços, ortopneia e edema de membros inferiores.",
        "Turgência jugular patológica, estertores bibasais, terceira bulha (B3).",
      ],
      labs: [
        "BNP/NT-proBNP muito elevado.",
      ],
      imaging: [
        "RX de tórax com congestão pulmonar/cardiomegalia",
        "Perfil hemodinâmico 'quente e úmido' — congestão sem baixo débito, responde bem a diurético IV.",
      ],
    },
    visualClue: {
      prompt: "RX de tórax com congestão pulmonar/cardiomegalia",
      caption: "Insuficiência cardíaca descompensada",
    },
  },
  {
    id: "dpoc-exacerbado",
    diagnosis: "DPOC exacerbado",
    aliases: [
      "dpoc exacerbado",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Quarta causa de morte no mundo, fortemente associada ao tabagismo.",
        "Tabagismo de longa data (carga tabágica alta), exposição ocupacional a poeira/fumaça.",
      ],
      history: [
        "DPOC GOLD conhecido, uso domiciliar de broncodilatador, piora após resfriado.",
      ],
      clinical: [
        "Piora da dispneia habitual, aumento do volume e purulência do escarro.",
        "Uso de musculatura acessória, sibilos difusos, tórax em tonel.",
      ],
      labs: [
        "Gasometria com acidose respiratória e retenção de CO2 (hipercapnia).",
      ],
      imaging: [
        "RX de tórax com hiperinsuflação, retificação de cúpulas",
        "Critérios de Anthonisen (dispneia + volume + purulência do escarro) = indicação de antibiótico.",
      ],
    },
    visualClue: {
      prompt: "RX de tórax com hiperinsuflação, retificação de cúpulas",
      caption: "DPOC exacerbado",
    },
  },
  {
    id: "apendicite-aguda",
    diagnosis: "Apendicite aguda",
    aliases: [
      "apendicite aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa de abdome agudo cirúrgico em jovens, pico entre 10-30 anos.",
        "Obstrução do lúmen apendicular por fecalito ou hiperplasia linfoide.",
      ],
      history: [
        "Sem antecedentes relevantes, jovem previamente hígido.",
      ],
      clinical: [
        "Dor abdominal iniciada em região periumbilical, migrando para fossa ilíaca direita.",
        "Sinal de Blumberg positivo, anorexia, náuseas, febre baixa.",
      ],
      labs: [
        "Leucocitose leve a moderada com desvio à esquerda.",
      ],
      imaging: [
        "USG ou TC com apêndice espessado >6-7mm",
        "Escore de Alvarado alto + sinal de Rovsing positivo — indicação cirúrgica praticamente confirmada.",
      ],
    },
    visualClue: {
      prompt: "USG ou TC com apêndice espessado >6-7mm",
      caption: "Apendicite aguda",
    },
  },
  {
    id: "colecistite-aguda",
    diagnosis: "Colecistite aguda",
    aliases: [
      "colecistite aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Mais comum em mulheres, mais frequente após os 40 anos.",
        "Os 4 F's: female, forty, fertile, fat (obesidade).",
      ],
      history: [
        "Colelitíase conhecida, episódios prévios de cólica biliar após alimentação gordurosa.",
      ],
      clinical: [
        "Dor em hipocôndrio direito, contínua, há mais de 6 horas, com febre.",
        "Sinal de Murphy positivo (parada da inspiração à palpação do hipocôndrio direito).",
      ],
      labs: [
        "Leucocitose e discreta elevação de enzimas hepáticas/bilirrubinas.",
      ],
      imaging: [
        "USG com espessamento de parede vesicular >3mm e líquido perivesicular",
        "Cálculo impactado no infundíbulo/ducto cístico à USG + sinal de Murphy ultrassonográfico positivo.",
      ],
    },
    visualClue: {
      prompt: "USG com espessamento de parede vesicular >3mm e líquido perivesicular",
      caption: "Colecistite aguda",
    },
  },
  {
    id: "obstrucao-intestinal-mecanica",
    diagnosis: "Obstrução intestinal mecânica",
    aliases: [
      "obstrucao intestinal mecanica",
      "obstrução intestinal mecânica",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa comum de internação cirúrgica de urgência em adultos com cirurgia abdominal prévia.",
        "Bridas/aderências pós-cirúrgicas são a causa mais frequente no intestino delgado.",
      ],
      history: [
        "Laparotomia prévia há anos, sem outras comorbidades.",
      ],
      clinical: [
        "Dor abdominal em cólica, distensão progressiva, parada de eliminação de gases e fezes.",
        "Vômitos que evoluem de biliosos para fecaloides, ruídos hidroaéreos aumentados (timbre metálico).",
      ],
      labs: [
        "Distúrbio hidroeletrolítico por vômitos repetidos, alcalose metabólica hipoclorêmica.",
      ],
      imaging: [
        "RX de abdome em pé com níveis hidroaéreos e distensão de alças",
        "Alças de delgado distendidas em 'empilhamento de moedas', sem gás distal — obstrução completa.",
      ],
    },
    visualClue: {
      prompt: "RX de abdome em pé com níveis hidroaéreos e distensão de alças",
      caption: "Obstrução intestinal mecânica",
    },
  },
  {
    id: "pre-eclampsia-grave",
    diagnosis: "Pré-eclâmpsia grave",
    aliases: [
      "pre-eclampsia grave",
      "pré-eclâmpsia grave",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Complicação hipertensiva específica da gestação, principal causa de morte materna evitável.",
        "Primigesta, gestação múltipla, obesidade, história prévia de pré-eclâmpsia.",
      ],
      history: [
        "Gestante de 34 semanas, pré-natal com poucas consultas.",
      ],
      clinical: [
        "Cefaleia holocraniana intensa e escotomas visuais.",
        "PA 168x112, dor em epigástrio/hipocôndrio direito, reflexos exaltados.",
      ],
      labs: [
        "Proteinúria significativa, plaquetopenia, elevação de transaminases (pensar em síndrome HELLP).",
      ],
      imaging: [
        "USG obstétrico com Doppler de artérias uterinas alterado",
        "PA≥160x110 + sintomas de iminência de eclâmpsia (cefaleia+escotomas+epigastralgia) = pré-eclâmpsia grave, indicação de sulfato de magnésio.",
      ],
    },
    visualClue: {
      prompt: "USG obstétrico com Doppler de artérias uterinas alterado",
      caption: "Pré-eclâmpsia grave",
    },
  },
  {
    id: "descolamento-prematuro-de-placenta",
    diagnosis: "Descolamento prematuro de placenta (DPP)",
    aliases: [
      "descolamento prematuro de placenta (dpp)",
      "dpp",
      "descolamento prematuro de placenta",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência obstétrica com alta morbimortalidade materno-fetal, geralmente no 3º trimestre.",
        "Hipertensão gestacional, trauma abdominal, uso de cocaína, tabagismo.",
      ],
      history: [
        "Gestante hipertensa crônica, sofreu trauma abdominal leve há poucas horas.",
      ],
      clinical: [
        "Dor abdominal súbita e intensa, sangramento vaginal escuro.",
        "Útero hipertônico, taquissistolia, sofrimento fetal agudo ao monitoramento.",
      ],
      labs: [
        "Queda de fibrinogênio e plaquetas, sinais de coagulopatia associada.",
      ],
      imaging: [
        "USG mostrando coágulo retroplacentário — atenção: exame pode ser normal",
        "Tríade dor abdominal + sangramento + hipertonia uterina em gestante hipertensa = indicação de parto imediato.",
      ],
    },
    visualClue: {
      prompt: "USG mostrando coágulo retroplacentário — atenção: exame pode ser normal",
      caption: "Descolamento prematuro de placenta (DPP)",
    },
  },
  {
    id: "bronquiolite-viral-aguda",
    diagnosis: "Bronquiolite viral aguda",
    aliases: [
      "bronquiolite viral aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa de internação respiratória em lactentes, pico sazonal no outono/inverno.",
        "Prematuridade, cardiopatia congênita, ausência de aleitamento materno.",
      ],
      history: [
        "Lactente de 4 meses, irmão mais velho com resfriado na última semana.",
      ],
      clinical: [
        "Coriza e tosse há 3 dias, evoluindo com dificuldade respiratória.",
        "Sibilos difusos, tiragem subcostal, batimento de asa de nariz.",
      ],
      labs: [
        "Teste rápido positivo para vírus sincicial respiratório (VSR).",
      ],
      imaging: [
        "RX de tórax com hiperinsuflação e infiltrado peribrônquico",
        "Primeiro episódio de sibilância em lactente <2 anos com pródromo viral = bronquiolite, manejo é essencialmente suportivo.",
      ],
    },
    visualClue: {
      prompt: "RX de tórax com hiperinsuflação e infiltrado peribrônquico",
      caption: "Bronquiolite viral aguda",
    },
  },
  {
    id: "invaginacao-intestinal",
    diagnosis: "Invaginação intestinal",
    aliases: [
      "invaginacao intestinal",
      "invaginação intestinal",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa mais comum de obstrução intestinal em lactentes entre 6 meses e 2 anos.",
        "Infecção viral recente (hiperplasia de placas de Peyer atuando como ponto de partida).",
      ],
      history: [
        "Lactente previamente hígido, quadro de gastroenterite na semana anterior.",
      ],
      clinical: [
        "Choro súbito e intenso em crises, com flexão das pernas sobre o abdome.",
        "Entre as crises a criança fica letárgica; massa palpável em hipocôndrio direito.",
      ],
      labs: [
        "Exames laboratoriais geralmente inespecíficos nas fases iniciais.",
      ],
      imaging: [
        "USG abdominal com sinal do alvo (target sign)",
        "Tríade dor em cólica + massa abdominal + fezes 'em geleia de framboesa' — redução por enema é primeira linha.",
      ],
    },
    visualClue: {
      prompt: "USG abdominal com sinal do alvo (target sign)",
      caption: "Invaginação intestinal",
    },
  },
  {
    id: "meningite-bacteriana",
    diagnosis: "Meningite bacteriana",
    aliases: [
      "meningite bacteriana",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência infecciosa com necessidade de antibiótico empírico imediato, alta letalidade se não tratada.",
        "Ausência de vacinação (meningocócica, pneumocócica), imunossupressão.",
      ],
      history: [
        "Adolescente sem histórico vacinal completo, contato próximo com caso similar recente.",
      ],
      clinical: [
        "Febre alta, cefaleia intensa e rigidez de nuca de início rápido.",
        "Sinais de Kernig e Brudzinski positivos, fotofobia, petéquias em tronco.",
      ],
      labs: [
        "Líquor turvo, com pleocitose neutrofílica, glicorraquia baixa e proteinorraquia alta.",
      ],
      imaging: [
        "TC de crânio antes da punção se houver sinais de hipertensão intracraniana",
        "Petéquias/púrpura + rigidez de nuca + febre em adolescente = pensar em meningococcemia, antibiótico não pode esperar exame de imagem.",
      ],
    },
    visualClue: {
      prompt: "TC de crânio antes da punção se houver sinais de hipertensão intracraniana",
      caption: "Meningite bacteriana",
    },
  },
  {
    id: "anafilaxia",
    diagnosis: "Anafilaxia",
    aliases: [
      "anafilaxia",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Reação de hipersensibilidade grave, com incidência crescente, potencialmente fatal em minutos.",
        "Atopia prévia, exposição conhecida a alérgeno (picada de inseto, alimento, medicamento).",
      ],
      history: [
        "Alergia conhecida a camarão, ingeriu alimento em restaurante há 15 minutos.",
      ],
      clinical: [
        "Início súbito de urticária generalizada e sensação de 'garganta fechando'.",
        "Estridor, sibilância, hipotensão, edema de lábios e língua.",
      ],
      labs: [
        "Triptase sérica elevada (quando dosada, geralmente retrospectivamente).",
      ],
      imaging: [
        "não é essencial para o diagnóstico — clínico",
        "Envolvimento cutâneo + respiratório + cardiovascular após exposição a alérgeno = adrenalina IM imediata, sem esperar mais exames.",
      ],
    },
    visualClue: {
      prompt: "não é essencial para o diagnóstico — clínico",
      caption: "Anafilaxia",
    },
  },
  {
    id: "sindrome-de-wellens",
    diagnosis: "Síndrome de Wellens",
    aliases: [
      "sindrome de wellens",
      "síndrome de wellens",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Padrão eletrocardiográfico de alto risco, encontrado em cerca de 10-15% dos pacientes com síndrome coronariana aguda sem supra de ST.",
        "Mesmos fatores de risco cardiovascular clássicos: tabagismo, dislipidemia, hipertensão.",
      ],
      history: [
        "Paciente com dor torácica anginosa que já cessou no momento da avaliação.",
      ],
      clinical: [
        "Relata episódio de dor torácica opressiva há algumas horas, atualmente assintomático.",
        "Exame físico praticamente normal no momento da consulta, sem dor à reavaliação.",
      ],
      labs: [
        "Troponina discretamente elevada ou ainda negativa, apesar do ECG chamativo.",
      ],
      imaging: [
        "ECG com ondas T bifásicas ou profundamente invertidas em V2-V3",
        "Padrão de onda T em V2-V3 que indica estenose crítica proximal de descendente anterior — angioplastia não deve ser adiada mesmo assintomático.",
      ],
    },
    visualClue: {
      prompt: "ECG com ondas T bifásicas ou profundamente invertidas em V2-V3",
      caption: "Síndrome de Wellens",
    },
  },
  {
    id: "taquicardia-por-reentrada-nodal",
    diagnosis: "Taquicardia por reentrada nodal (AVNRT)",
    aliases: [
      "taquicardia por reentrada nodal (avnrt)",
      "avnrt",
      "taquicardia por reentrada nodal",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Taquicardia supraventricular paroxística mais comum, mais frequente em mulheres jovens sem cardiopatia estrutural.",
        "Reentrada nodal por via dupla (via rápida e via lenta) no nó AV — geralmente sem cardiopatia de base.",
      ],
      history: [
        "Episódios semelhantes prévios, resolvidos espontaneamente ou com manobra vagal.",
      ],
      clinical: [
        "Palpitações de início e término súbitos, taquicardia percebida como 'coração disparado'.",
        "FC regular entre 150-220bpm; sinal de 'frog sign' (pulsação jugular visível) pode estar presente.",
      ],
      labs: [
        "Exames laboratoriais geralmente normais; função tireoidiana deve ser avaliada para descartar causa secundária.",
      ],
      imaging: [
        "ECG com QRS estreito e regular, onda P retrógrada ou 'escondida' no QRS",
        "Taquicardia de QRS estreito que reverte com adenosina IV — reentrada confinada ao nó AV.",
      ],
    },
    visualClue: {
      prompt: "ECG com QRS estreito e regular, onda P retrógrada ou 'escondida' no QRS",
      caption: "Taquicardia por reentrada nodal (AVNRT)",
    },
  },
  {
    id: "taquicardia-por-reentrada-av",
    diagnosis: "Taquicardia por reentrada AV (WPW/AVRT)",
    aliases: [
      "taquicardia por reentrada av (wpw/avrt)",
      "wpw/avrt",
      "taquicardia por reentrada av",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Taquiarritmia por via acessória, associada à síndrome de Wolff-Parkinson-White.",
        "Presença de feixe acessório (via anômala) conectando átrio e ventrículo fora do nó AV.",
      ],
      history: [
        "ECG basal prévio já mostrava pré-excitação, achado incidental em exame de rotina.",
      ],
      clinical: [
        "Palpitações súbitas associadas a tontura, ocasionalmente síncope.",
        "Taquicardia regular de início abrupto; atenção ao risco de fibrilação atrial pré-excitada.",
      ],
      labs: [
        "Sem alterações laboratoriais específicas.",
      ],
      imaging: [
        "ECG basal com PR curto e onda delta (empastamento inicial do QRS)",
        "PR curto + onda delta em ritmo sinusal = pré-excitação — cuidado ao usar bloqueadores do nó AV se houver FA associada.",
      ],
    },
    visualClue: {
      prompt: "ECG basal com PR curto e onda delta (empastamento inicial do QRS)",
      caption: "Taquicardia por reentrada AV (WPW/AVRT)",
    },
  },
  {
    id: "hipotermia-acidental",
    diagnosis: "Hipotermia acidental (onda de Osborn)",
    aliases: [
      "hipotermia acidental (onda de osborn)",
      "onda de osborn",
      "hipotermia acidental",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência ambiental mais comum em extremos de idade e em situações de exposição ao frio ou imersão.",
        "Idade avançada, uso de álcool, intoxicação, permanência prolongada ao relento no frio.",
      ],
      history: [
        "Paciente encontrado ao relento em baixa temperatura, etilista crônico.",
      ],
      clinical: [
        "Confusão mental, tremores que cessam com o agravamento da hipotermia.",
        "Bradicardia, rigidez muscular, pele fria, nível de consciência rebaixado.",
      ],
      labs: [
        "Temperatura central baixa (retal/esofágica); gasometria pode mostrar acidose.",
      ],
      imaging: [
        "ECG com onda J (Osborn) no ponto J, mais evidente nas derivações inferiores e precordiais laterais",
        "Onda de Osborn proeminente + temperatura central <32°C = reaquecimento cuidadoso, risco de fibrilação ventricular com manipulação brusca.",
      ],
    },
    visualClue: {
      prompt: "ECG com onda J (Osborn) no ponto J, mais evidente nas derivações inferiores e precordiais laterais",
      caption: "Hipotermia acidental (onda de Osborn)",
    },
  },
  {
    id: "pericardite-aguda",
    diagnosis: "Pericardite aguda",
    aliases: [
      "pericardite aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa comum de dor torácica em jovens, frequentemente de etiologia viral/idiopática.",
        "Infecção viral recente do trato respiratório, doenças autoimunes, pós-IAM (síndrome de Dressler).",
      ],
      history: [
        "Quadro gripal na última semana, sem antecedentes cardiovasculares.",
      ],
      clinical: [
        "Dor torácica pleurítica que piora ao deitar e melhora ao inclinar o tronco para frente.",
        "Atrito pericárdico à ausculta, febre baixa associada.",
      ],
      labs: [
        "PCR e VHS elevados; troponina pode estar discretamente alterada se houver miopericardite.",
      ],
      imaging: [
        "ECG com supradesnivelamento difuso do segmento ST côncavo e infradesnivelamento de PR",
        "Supra de ST difuso e côncavo (sem imagem em espelho) + infra de PR = pericardite, não confundir com IAM.",
      ],
    },
    visualClue: {
      prompt: "ECG com supradesnivelamento difuso do segmento ST côncavo e infradesnivelamento de PR",
      caption: "Pericardite aguda",
    },
  },
  {
    id: "lesao-renal-aguda-pre-renal",
    diagnosis: "Lesão renal aguda pré-renal",
    aliases: [
      "lesao renal aguda pre-renal",
      "lesão renal aguda pré-renal",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa mais comum de lesão renal aguda em pacientes hospitalizados, potencialmente reversível.",
        "Desidratação, uso de diuréticos, IECA/BRA associados a AINE (tríade nefrotóxica).",
      ],
      history: [
        "Diarreia importante nos últimos dias, uso contínuo de losartana e ibuprofeno.",
      ],
      clinical: [
        "Redução do volume urinário e tontura postural.",
        "Hipotensão, mucosas secas, turgor cutâneo diminuído.",
      ],
      labs: [
        "Ureia/creatinina elevadas com relação ureia/creatinina >40, fração de excreção de sódio <1%.",
      ],
      imaging: [
        "USG renal geralmente sem alterações estruturais",
        "FeNa <1% + sedimento urinário benigno + melhora após reposição volêmica = pré-renal, sem necrose tubular estabelecida.",
      ],
    },
    visualClue: {
      prompt: "USG renal geralmente sem alterações estruturais",
      caption: "Lesão renal aguda pré-renal",
    },
  },
  {
    id: "necrose-tubular-aguda",
    diagnosis: "Necrose tubular aguda",
    aliases: [
      "necrose tubular aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa de lesão renal aguda intrínseca em ambiente hospitalar, especialmente em UTI.",
        "Hipotensão prolongada, uso de contraste iodado, aminoglicosídeos, rabdomiólise.",
      ],
      history: [
        "Cirurgia de grande porte recente com período de hipotensão intraoperatória.",
      ],
      clinical: [
        "Oligúria persistente apesar de reposição volêmica adequada.",
        "Sinais de sobrecarga volêmica podem surgir com a progressão do quadro.",
      ],
      labs: [
        "FeNa >2%, cilindros granulosos 'em lama marrom' (muddy brown casts) no sedimento urinário.",
      ],
      imaging: [
        "USG renal geralmente normal, usado principalmente para excluir causa obstrutiva",
        "Cilindros granulosos pigmentados + FeNa elevada + não responde a volume = necrose tubular aguda estabelecida.",
      ],
    },
    visualClue: {
      prompt: "USG renal geralmente normal, usado principalmente para excluir causa obstrutiva",
      caption: "Necrose tubular aguda",
    },
  },
  {
    id: "sindrome-nefrotica",
    diagnosis: "Síndrome nefrótica",
    aliases: [
      "sindrome nefrotica",
      "síndrome nefrótica",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Em adultos, a causa mais comum é a glomeruloesclerose segmentar e focal; em crianças, doença de lesões mínimas.",
        "Diabetes mellitus de longa data (nefropatia diabética) é causa importante em adultos.",
      ],
      history: [
        "Diabético tipo 2 há 15 anos, controle glicêmico inadequado.",
      ],
      clinical: [
        "Edema periorbitário matinal, progressivo, depois generalizado.",
        "Anasarca, espuma na urina relatada pelo paciente.",
      ],
      labs: [
        "Proteinúria maciça (>3,5g/24h), hipoalbuminemia, hiperlipidemia.",
      ],
      imaging: [
        "USG renal e considerar biópsia renal para definição etiológica",
        "Proteinúria nefrótica + hipoalbuminemia + edema + hiperlipidemia = tétrade clássica da síndrome nefrótica.",
      ],
    },
    visualClue: {
      prompt: "USG renal e considerar biópsia renal para definição etiológica",
      caption: "Síndrome nefrótica",
    },
  },
  {
    id: "carcinoma-de-celulas-renais",
    diagnosis: "Carcinoma de células renais",
    aliases: [
      "carcinoma de celulas renais",
      "carcinoma de células renais",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Neoplasia renal maligna mais comum no adulto, pico de incidência entre 60-70 anos.",
        "Tabagismo, obesidade, hipertensão, doença renal cística adquirida em pacientes dialíticos.",
      ],
      history: [
        "Achado incidental em exame de imagem realizado por outro motivo.",
      ],
      clinical: [
        "Frequentemente assintomático; quando sintomático, hematúria indolor.",
        "Tríade clássica (dor lombar, massa palpável, hematúria) presente em minoria dos casos, geralmente doença avançada.",
      ],
      labs: [
        "Policitemia pode ocorrer por produção ectópica de eritropoetina.",
      ],
      imaging: [
        "TC com lesão renal cística complexa — classificar pela classificação de Bosniak",
        "Lesão cística Bosniak IV (componente sólido captante de contraste) = alto risco de malignidade, indicação cirúrgica.",
      ],
    },
    visualClue: {
      prompt: "TC com lesão renal cística complexa — classificar pela classificação de Bosniak",
      caption: "Carcinoma de células renais",
    },
  },
  {
    id: "neuralgia-do-trigemeo",
    diagnosis: "Neuralgia do trigêmeo",
    aliases: [
      "neuralgia do trigemeo",
      "neuralgia do trigêmeo",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Mais comum em mulheres acima dos 50 anos; causa mais frequente de dor facial neuropática.",
        "Compressão vascular do nervo trigêmeo na fossa posterior; esclerose múltipla em pacientes mais jovens.",
      ],
      history: [
        "Sem antecedentes relevantes de trauma facial ou odontológico recente.",
      ],
      clinical: [
        "Dor facial em choque elétrico, unilateral, de curtíssima duração.",
        "Zonas de gatilho na face que desencadeiam a dor ao toque leve, mastigação ou barbear.",
      ],
      labs: [
        "Exames laboratoriais não contribuem para o diagnóstico, que é clínico.",
      ],
      imaging: [
        "RM de crânio para excluir causa secundária e avaliar compressão vascular",
        "Dor paroxística em choque, unilateral, restrita a território do V par, com zona de gatilho = neuralgia do trigêmeo clássica.",
      ],
    },
    visualClue: {
      prompt: "RM de crânio para excluir causa secundária e avaliar compressão vascular",
      caption: "Neuralgia do trigêmeo",
    },
  },
  {
    id: "sindrome-complexa-de-dor-regional",
    diagnosis: "Síndrome complexa de dor regional (SDRC)",
    aliases: [
      "sindrome complexa de dor regional (sdrc)",
      "síndrome complexa de dor regional (sdrc)",
      "sdrc",
      "sindrome complexa de dor regional",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Mais comum em membros superiores, geralmente após trauma ou cirurgia, predomínio no sexo feminino.",
        "Imobilização prolongada, fratura de punho, cirurgia ortopédica prévia no membro afetado.",
      ],
      history: [
        "Fratura de rádio distal há 2 meses, com imobilização prolongada.",
      ],
      clinical: [
        "Dor desproporcional ao trauma inicial, persistente após a lesão já ter cicatrizado.",
        "Alterações tróficas: pele brilhante, alteração de temperatura e cor, edema, hipersensibilidade ao toque (alodinia).",
      ],
      labs: [
        "Exames laboratoriais geralmente normais; diagnóstico é clínico (critérios de Budapeste).",
      ],
      imaging: [
        "cintilografia óssea trifásica ou RX com desmineralização em mosqueado",
        "Dor desproporcional + alterações autonômicas/tróficas + alodinia após trauma = SDRC, critérios de Budapeste fecham diagnóstico.",
      ],
    },
    visualClue: {
      prompt: "cintilografia óssea trifásica ou RX com desmineralização em mosqueado",
      caption: "Síndrome complexa de dor regional (SDRC)",
    },
  },
  {
    id: "neuralgia-pos-herpetica",
    diagnosis: "Neuralgia pós-herpética",
    aliases: [
      "neuralgia pos-herpetica",
      "neuralgia pós-herpética",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Complicação mais comum do herpes zoster, mais frequente em idosos.",
        "Idade avançada, imunossupressão, dor intensa na fase aguda do zoster.",
      ],
      history: [
        "Episódio de herpes zoster torácico há 3 meses, lesões já cicatrizadas.",
      ],
      clinical: [
        "Dor em queimação persistente no dermátomo previamente acometido pelas vesículas.",
        "Alodinia mecânica na área afetada, sem lesões cutâneas ativas.",
      ],
      labs: [
        "Sem correlato laboratorial específico; diagnóstico clínico baseado em história de zoster prévio.",
      ],
      imaging: [
        "geralmente dispensável, diagnóstico é clínico",
        "Dor neuropática em dermátomo >3 meses após resolução das lesões vesiculares = neuralgia pós-herpética.",
      ],
    },
    visualClue: {
      prompt: "geralmente dispensável, diagnóstico é clínico",
      caption: "Neuralgia pós-herpética",
    },
  },
  {
    id: "estenose-espinhal-lombar",
    diagnosis: "Estenose espinhal lombar",
    aliases: [
      "estenose espinhal lombar",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa comum de dor lombar e claudicação neurogênica em idosos.",
        "Espondilose degenerativa, hérnias discais múltiplas, espondilolistese.",
      ],
      history: [
        "Dor lombar crônica de longa data, com piora progressiva da capacidade de caminhar.",
      ],
      clinical: [
        "Dor e dormência em membros inferiores que piora ao caminhar e melhora ao sentar ou inclinar-se para frente.",
        "Claudicação neurogênica — sintomas aliviados na flexão da coluna (posição de 'carrinho de supermercado').",
      ],
      labs: [
        "Sem correlato laboratorial específico.",
      ],
      imaging: [
        "RM de coluna lombar com redução do canal vertebral e compressão do saco tecal",
        "Melhora da dor em flexão + piora em extensão/caminhada = claudicação neurogênica, típica de estenose de canal.",
      ],
    },
    visualClue: {
      prompt: "RM de coluna lombar com redução do canal vertebral e compressão do saco tecal",
      caption: "Estenose espinhal lombar",
    },
  },
  {
    id: "fibromialgia",
    diagnosis: "Fibromialgia",
    aliases: [
      "fibromialgia",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Síndrome de dor crônica generalizada, predomínio marcante no sexo feminino.",
        "Estresse crônico, distúrbios do sono, história de trauma físico ou emocional.",
      ],
      history: [
        "Fadiga crônica e distúrbio do sono de longa data, sem doença reumatológica definida.",
      ],
      clinical: [
        "Dor difusa generalizada há mais de 3 meses, associada a fadiga importante.",
        "Múltiplos pontos dolorosos à palpação, sono não reparador, dificuldade de concentração ('fibro fog').",
      ],
      labs: [
        "Exames laboratoriais e provas inflamatórias tipicamente normais — diagnóstico de exclusão.",
      ],
      imaging: [
        "geralmente não contribui, usada para excluir diferenciais reumatológicos",
        "Dor difusa >3 meses + provas inflamatórias normais + múltiplos tender points = fibromialgia, sem substrato inflamatório objetivo.",
      ],
    },
    visualClue: {
      prompt: "geralmente não contribui, usada para excluir diferenciais reumatológicos",
      caption: "Fibromialgia",
    },
  },
  {
    id: "pancreatite-aguda-biliar",
    diagnosis: "Pancreatite aguda biliar",
    aliases: [
      "pancreatite aguda biliar",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa mais comum de pancreatite aguda junto com a etiologia alcoólica.",
        "Colelitíase conhecida, obesidade, sexo feminino.",
      ],
      history: [
        "Colelitíase assintomática identificada em USG prévio.",
      ],
      clinical: [
        "Dor abdominal intensa em faixa, irradiando para o dorso, após refeição gordurosa.",
        "Náuseas, vômitos, dor à palpação de epigástrio, sinais de Cullen/Grey-Turner em casos graves.",
      ],
      labs: [
        "Amilase e lipase elevadas (lipase mais específica), acima de 3x o limite superior da normalidade.",
      ],
      imaging: [
        "TC de abdome com contraste mostrando edema/necrose pancreática, ou USG evidenciando colelitíase",
        "Dor em faixa + lipase >3x LSN + colelitíase à USG = pancreatite aguda biliar, avaliar critérios de gravidade (Ranson/BISAP).",
      ],
    },
    visualClue: {
      prompt: "TC de abdome com contraste mostrando edema/necrose pancreática, ou USG evidenciando colelitíase",
      caption: "Pancreatite aguda biliar",
    },
  },
  {
    id: "hemorragia-digestiva-alta-varicosa",
    diagnosis: "Hemorragia digestiva alta varicosa",
    aliases: [
      "hemorragia digestiva alta varicosa",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Complicação grave da hipertensão portal, principal causa de HDA em pacientes cirróticos.",
        "Cirrose hepática de qualquer etiologia, hipertensão portal, varizes esofágicas conhecidas.",
      ],
      history: [
        "Cirrose por etilismo crônico, sem uso regular de betabloqueador não seletivo.",
      ],
      clinical: [
        "Hematêmese volumosa associada a melena.",
        "Sinais de hepatopatia crônica (icterícia, ascite, aranhas vasculares), instabilidade hemodinâmica.",
      ],
      labs: [
        "Queda importante de hemoglobina, plaquetopenia e coagulopatia associadas à hepatopatia.",
      ],
      imaging: [
        "endoscopia digestiva alta evidenciando varizes esofágicas sangrantes",
        "Hematêmese + estigmas de hepatopatia crônica + varizes à EDA = HDA varicosa, terlipressina/octreotide + ligadura elástica.",
      ],
    },
    visualClue: {
      prompt: "endoscopia digestiva alta evidenciando varizes esofágicas sangrantes",
      caption: "Hemorragia digestiva alta varicosa",
    },
  },
  {
    id: "torcao-testicular",
    diagnosis: "Torção testicular",
    aliases: [
      "torcao testicular",
      "torção testicular",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência urológica mais comum em adolescentes, com pico bimodal (neonatal e puberdade).",
        "Anomalia de fixação testicular ('deformidade em badalo de sino').",
      ],
      history: [
        "Episódios prévios de dor testicular autolimitada (torção intermitente).",
      ],
      clinical: [
        "Dor testicular súbita e intensa, unilateral, associada a náuseas e vômitos.",
        "Testículo elevado e horizontalizado, reflexo cremastérico ausente.",
      ],
      labs: [
        "Exames laboratoriais não auxiliam no diagnóstico — o tempo é essencial.",
      ],
      imaging: [
        "USG doppler testicular com ausência de fluxo sanguíneo ao testículo afetado",
        "Dor testicular aguda + ausência de reflexo cremastérico + doppler sem fluxo = torção, exploração cirúrgica não deve esperar imagem se suspeita alta.",
      ],
    },
    visualClue: {
      prompt: "USG doppler testicular com ausência de fluxo sanguíneo ao testículo afetado",
      caption: "Torção testicular",
    },
  },
  {
    id: "diverticulite-aguda",
    diagnosis: "Diverticulite aguda",
    aliases: [
      "diverticulite aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Complicação mais comum da doença diverticular, mais frequente no cólon sigmoide.",
        "Dieta pobre em fibras, obesidade, sedentarismo, idade avançada.",
      ],
      history: [
        "Episódios prévios de dor em fossa ilíaca esquerda, resolvidos sem investigação.",
      ],
      clinical: [
        "Dor em fossa ilíaca esquerda associada a febre e alteração do hábito intestinal.",
        "Dor à palpação em quadrante inferior esquerdo, possível massa palpável em casos complicados.",
      ],
      labs: [
        "Leucocitose com desvio à esquerda.",
      ],
      imaging: [
        "TC de abdome com espessamento de parede do sigmoide e borramento da gordura pericólica",
        "Dor em FIE + febre + TC com divertículos inflamados e borramento pericólico = diverticulite, classificar gravidade por Hinchey se houver complicação.",
      ],
    },
    visualClue: {
      prompt: "TC de abdome com espessamento de parede do sigmoide e borramento da gordura pericólica",
      caption: "Diverticulite aguda",
    },
  },
  {
    id: "gravidez-ectopica-rota",
    diagnosis: "Gravidez ectópica rota",
    aliases: [
      "gravidez ectopica rota",
      "gravidez ectópica rota",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Principal causa de morte materna no primeiro trimestre quando não diagnosticada a tempo.",
        "Doença inflamatória pélvica prévia, cirurgia tubária, uso de DIU, fertilização in vitro.",
      ],
      history: [
        "Atraso menstrual de 6 semanas, teste de gravidez positivo, sem pré-natal iniciado.",
      ],
      clinical: [
        "Dor abdominal súbita e intensa em fossa ilíaca, associada a sangramento vaginal escasso.",
        "Sinais de irritação peritoneal, hipotensão e taquicardia por hemoperitônio.",
      ],
      labs: [
        "Beta-hCG positivo, porém com curva de crescimento inadequada para a idade gestacional esperada.",
      ],
      imaging: [
        "USG transvaginal sem saco gestacional intrauterino, com líquido livre em fundo de saco",
        "Beta-hCG positivo + útero vazio à USG + líquido livre abundante = gravidez ectópica rota, indicação cirúrgica de urgência.",
      ],
    },
    visualClue: {
      prompt: "USG transvaginal sem saco gestacional intrauterino, com líquido livre em fundo de saco",
      caption: "Gravidez ectópica rota",
    },
  },
  {
    id: "doenca-de-kawasaki",
    diagnosis: "Doença de Kawasaki",
    aliases: [
      "doenca de kawasaki",
      "doença de kawasaki",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Vasculite aguda mais comum em crianças, principal causa de cardiopatia adquirida na infância em países desenvolvidos.",
        "Mais comum em crianças menores de 5 anos, maior incidência na população asiática.",
      ],
      history: [
        "Sem antecedentes relevantes, criança previamente hígida.",
      ],
      clinical: [
        "Febre alta persistente há mais de 5 dias, refratária a antitérmicos.",
        "Conjuntivite não exsudativa, exantema polimorfo, língua em framboesa, edema de extremidades, adenopatia cervical.",
      ],
      labs: [
        "Elevação de provas inflamatórias (PCR/VHS), plaquetose que surge geralmente na segunda semana.",
      ],
      imaging: [
        "ecocardiograma avaliando aneurismas de coronárias",
        "Febre ≥5 dias + pelo menos 4 dos 5 critérios clínicos = Kawasaki, imunoglobulina IV nos primeiros 10 dias reduz risco de aneurisma coronariano.",
      ],
    },
    visualClue: {
      prompt: "ecocardiograma avaliando aneurismas de coronárias",
      caption: "Doença de Kawasaki",
    },
  },
  {
    id: "tamponamento-cardiaco",
    diagnosis: "Tamponamento cardíaco",
    aliases: [
      "tamponamento cardiaco",
      "tamponamento cardíaco",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência cardiovascular que pode evoluir rapidamente para choque obstrutivo e óbito.",
        "Neoplasia com derrame pericárdico maligno, pericardite, trauma torácico penetrante.",
      ],
      history: [
        "Paciente oncológico com derrame pericárdico já conhecido em investigação.",
      ],
      clinical: [
        "Dispneia progressiva e sensação de peso no peito.",
        "Tríade de Beck: hipotensão, turgência jugular e bulhas abafadas; pulso paradoxal presente.",
      ],
      labs: [
        "BNP pode estar elevado, mas o diagnóstico é essencialmente clínico e ecocardiográfico.",
      ],
      imaging: [
        "ecocardiograma com derrame pericárdico volumoso e colapso diastólico de VD",
        "Pulso paradoxal >10mmHg + colapso de câmaras direitas ao eco = indicação de pericardiocentese de urgência.",
      ],
    },
    visualClue: {
      prompt: "ecocardiograma com derrame pericárdico volumoso e colapso diastólico de VD",
      caption: "Tamponamento cardíaco",
    },
  },
  {
    id: "disseccao-aortica-aguda",
    diagnosis: "Dissecção aórtica aguda",
    aliases: [
      "disseccao aortica aguda",
      "dissecção aórtica aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência vascular catastrófica, mortalidade aumenta a cada hora sem tratamento.",
        "Hipertensão mal controlada, doenças do tecido conjuntivo (Marfan), uso de cocaína.",
      ],
      history: [
        "Hipertenso de longa data, em uso irregular de anti-hipertensivos.",
      ],
      clinical: [
        "Dor torácica súbita, lancinante, 'em rasgão', irradiando para o dorso.",
        "Assimetria de pulsos e de PA entre os membros superiores.",
      ],
      labs: [
        "D-dímero elevado (baixo valor preditivo negativo isolado nessa suspeita).",
      ],
      imaging: [
        "angioTC de aorta com flap de dissecção visível",
        "Dor 'em rasgão' migratória + assimetria de pulsos + alargamento de mediastino no RX = dissecção até prova em contrário.",
      ],
    },
    visualClue: {
      prompt: "angioTC de aorta com flap de dissecção visível",
      caption: "Dissecção aórtica aguda",
    },
  },
  {
    id: "fibrilacao-atrial-com-resposta-ventricular-rapida",
    diagnosis: "Fibrilação atrial com resposta ventricular rápida",
    aliases: [
      "fibrilacao atrial com resposta ventricular rapida",
      "fibrilação atrial com resposta ventricular rápida",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Arritmia sustentada mais comum na prática clínica, prevalência cresce muito com a idade.",
        "Hipertensão, hipertireoidismo, valvopatia mitral, etilismo agudo ('holiday heart').",
      ],
      history: [
        "Hipertenso de longa data, ingestão alcoólica excessiva no fim de semana.",
      ],
      clinical: [
        "Palpitações irregulares associadas a mal-estar e dispneia leve.",
        "Pulso irregularmente irregular, com déficit de pulso à ausculta cardíaca.",
      ],
      labs: [
        "TSH deve sempre ser solicitado para investigar hipertireoidismo como causa.",
      ],
      imaging: [
        "ECG sem onda P identificável, intervalos RR irregulares",
        "Ausência de onda P + RR irregularmente irregular = FA; sempre calcular CHA2DS2-VASc antes de decidir sobre anticoagulação.",
      ],
    },
    visualClue: {
      prompt: "ECG sem onda P identificável, intervalos RR irregulares",
      caption: "Fibrilação atrial com resposta ventricular rápida",
    },
  },
  {
    id: "bloqueio-atrioventricular-total",
    diagnosis: "Bloqueio atrioventricular total (BAVT)",
    aliases: [
      "bloqueio atrioventricular total (bavt)",
      "bavt",
      "bloqueio atrioventricular total",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Distúrbio de condução grave, mais comum em idosos por doença degenerativa do sistema de condução.",
        "Uso de betabloqueador ou bloqueador de canal de cálcio em doses excessivas, IAM de parede inferior.",
      ],
      history: [
        "Idoso em uso de múltiplos anti-hipertensivos, episódios recentes de tontura.",
      ],
      clinical: [
        "Síncope súbita, sem pródromos, com recuperação espontânea da consciência.",
        "Bradicardia importante, fadiga e intolerância a esforços.",
      ],
      labs: [
        "Eletrólitos (principalmente potássio) devem ser avaliados como causa reversível.",
      ],
      imaging: [
        "ECG com dissociação completa entre ondas P e complexos QRS",
        "Ondas P 'marchando' no seu próprio ritmo, sem relação com o QRS = BAVT, indicação de marcapasso definitivo.",
      ],
    },
    visualClue: {
      prompt: "ECG com dissociação completa entre ondas P e complexos QRS",
      caption: "Bloqueio atrioventricular total (BAVT)",
    },
  },
  {
    id: "torsades-de-pointes-sindrome-do-qt-longo",
    diagnosis: "Torsades de pointes / síndrome do QT longo",
    aliases: [
      "torsades de pointes / sindrome do qt longo",
      "torsades de pointes / síndrome do qt longo",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Arritmia ventricular potencialmente fatal, pode ser congênita ou adquirida.",
        "Uso de medicamentos que prolongam QT (antiarrítmicos, alguns antibióticos, antipsicóticos), distúrbios eletrolíticos.",
      ],
      history: [
        "Em uso de múltiplos medicamentos que prolongam o intervalo QT, hipomagnesemia recente.",
      ],
      clinical: [
        "Palpitações seguidas de síncope súbita ou quase-síncope.",
        "Durante o episódio, pulso rápido e irregular, pode evoluir para parada cardíaca.",
      ],
      labs: [
        "Hipocalemia e hipomagnesemia frequentemente associadas, favorecendo o gatilho.",
      ],
      imaging: [
        "ECG com QRS de amplitude e eixo que 'giram' em torno da linha de base",
        "QT longo prévio + arritmia com morfologia 'em torção' = torsades; tratamento agudo é sulfato de magnésio IV.",
      ],
    },
    visualClue: {
      prompt: "ECG com QRS de amplitude e eixo que 'giram' em torno da linha de base",
      caption: "Torsades de pointes / síndrome do QT longo",
    },
  },
  {
    id: "taquicardia-ventricular-monomorfica-sustentada",
    diagnosis: "Taquicardia ventricular monomórfica sustentada",
    aliases: [
      "taquicardia ventricular monomorfica sustentada",
      "taquicardia ventricular monomórfica sustentada",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Arritmia ventricular grave, principal causa é doença cardíaca estrutural prévia.",
        "Infarto do miocárdio prévio com cicatriz, cardiomiopatia dilatada.",
      ],
      history: [
        "IAM prévio há 2 anos, com disfunção ventricular residual conhecida.",
      ],
      clinical: [
        "Palpitações intensas de início súbito, associadas a tontura.",
        "Pode cursar com instabilidade hemodinâmica dependendo da frequência e função ventricular de base.",
      ],
      labs: [
        "Eletrólitos e função renal avaliados para excluir causas reversíveis.",
      ],
      imaging: [
        "ECG com QRS alargado, complexos monomórficos, dissociação AV ocasional",
        "QRS largo e regular, com dissociação AV ou complexos de fusão = TV até prova em contrário; se instável, cardioversão elétrica imediata.",
      ],
    },
    visualClue: {
      prompt: "ECG com QRS alargado, complexos monomórficos, dissociação AV ocasional",
      caption: "Taquicardia ventricular monomórfica sustentada",
    },
  },
  {
    id: "sindrome-de-compressao-medular-metastatica",
    diagnosis: "Síndrome de compressão medular metastática",
    aliases: [
      "sindrome de compressao medular metastatica",
      "síndrome de compressão medular metastática",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência oncológica que exige diagnóstico e tratamento em poucas horas para evitar déficit permanente.",
        "Neoplasias com alto potencial de metástase óssea: mama, próstata, pulmão, mieloma.",
      ],
      history: [
        "Paciente com câncer de próstata metastático em acompanhamento oncológico.",
      ],
      clinical: [
        "Dor lombar progressiva, pior à noite e ao deitar, associada a fraqueza nas pernas.",
        "Nível sensitivo definido no exame neurológico, hiperreflexia abaixo da lesão, retenção urinária.",
      ],
      labs: [
        "Cálcio pode estar elevado se houver doença óssea metastática extensa associada.",
      ],
      imaging: [
        "RM de coluna com lesão metastática comprimindo o saco tecal",
        "Dor + nível sensitivo + disfunção esfincteriana em paciente oncológico = corticoide em altas doses imediato + RM de urgência.",
      ],
    },
    visualClue: {
      prompt: "RM de coluna com lesão metastática comprimindo o saco tecal",
      caption: "Síndrome de compressão medular metastática",
    },
  },
  {
    id: "sindrome-de-lise-tumoral",
    diagnosis: "Síndrome de lise tumoral",
    aliases: [
      "sindrome de lise tumoral",
      "síndrome de lise tumoral",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência oncológica metabólica, mais comum após início de quimioterapia em tumores de alta carga celular.",
        "Linfomas de alto grau e leucemias agudas com massa tumoral volumosa.",
      ],
      history: [
        "Iniciou quimioterapia para linfoma de Burkitt há 48 horas.",
      ],
      clinical: [
        "Náuseas, cãibras musculares e diminuição do volume urinário.",
        "Pode evoluir com arritmias cardíacas por distúrbio eletrolítico grave.",
      ],
      labs: [
        "Hipercalemia, hiperfosfatemia, hiperuricemia e hipocalcemia — lise maciça de células tumorais.",
      ],
      imaging: [
        "ECG mostrando alterações de hipercalemia — ondas T apiculadas",
        "Tétrade K↑, P↑, ácido úrico↑, Ca↓ após quimioterapia = lise tumoral, prevenção é com hidratação e rasburicase antes do tratamento.",
      ],
    },
    visualClue: {
      prompt: "ECG mostrando alterações de hipercalemia — ondas T apiculadas",
      caption: "Síndrome de lise tumoral",
    },
  },
  {
    id: "sindrome-do-tunel-do-carpo",
    diagnosis: "Síndrome do túnel do carpo",
    aliases: [
      "sindrome do tunel do carpo",
      "síndrome do túnel do carpo",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Neuropatia compressiva periférica mais comum, mais prevalente em mulheres de meia-idade.",
        "Movimentos repetitivos, gestação, hipotireoidismo, diabetes.",
      ],
      history: [
        "Trabalho que exige digitação intensa e repetitiva há anos.",
      ],
      clinical: [
        "Dormência e formigamento em polegar, indicador e médio, pior à noite.",
        "Sinal de Tinel e sinal de Phalen positivos; fraqueza da preensão em casos avançados.",
      ],
      labs: [
        "Eletroneuromiografia confirma redução da velocidade de condução do nervo mediano.",
      ],
      imaging: [
        "USG de punho mostrando espessamento do nervo mediano no túnel do carpo",
        "Poupa o 5º dedo (território do nervo ulnar) — distribuição sensitiva fecha o diagnóstico de compressão do mediano.",
      ],
    },
    visualClue: {
      prompt: "USG de punho mostrando espessamento do nervo mediano no túnel do carpo",
      caption: "Síndrome do túnel do carpo",
    },
  },
  {
    id: "crise-convulsiva-febril",
    diagnosis: "Crise convulsiva febril",
    aliases: [
      "crise convulsiva febril",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Tipo mais comum de convulsão na infância, ocorre entre 6 meses e 5 anos.",
        "História familiar de convulsão febril, elevação rápida da temperatura corporal.",
      ],
      history: [
        "Criança previamente hígida, sem história de epilepsia.",
      ],
      clinical: [
        "Episódio de convulsão associado a febre alta de início recente.",
        "Crise tônico-clônica generalizada, com duração menor que 15 minutos, recuperação completa da consciência depois.",
      ],
      labs: [
        "Investigação direcionada à causa da febre — exames neurológicos específicos não são rotineiros na crise simples.",
      ],
      imaging: [
        "não indicada de rotina na convulsão febril simples",
        "Crise única, generalizada, <15min, sem recorrência em 24h = convulsão febril simples, não precisa de EEG nem investigação de imagem de rotina.",
      ],
    },
    visualClue: {
      prompt: "não indicada de rotina na convulsão febril simples",
      caption: "Crise convulsiva febril",
    },
  },
  {
    id: "estenose-hipertrofica-do-piloro",
    diagnosis: "Estenose hipertrófica do piloro",
    aliases: [
      "estenose hipertrofica do piloro",
      "estenose hipertrófica do piloro",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Causa cirúrgica mais comum de vômitos em lactentes, mais frequente em meninos primogênitos.",
        "História familiar positiva, uso de certos antibióticos macrolídeos no período neonatal.",
      ],
      history: [
        "Lactente de 4 semanas, nascido a termo, ganho de peso inadequado nas últimas semanas.",
      ],
      clinical: [
        "Vômitos em jato, não biliosos, logo após as mamadas, progressivamente mais frequentes.",
        "Oliva pilórica palpável em epigástrio, ondas peristálticas visíveis no abdome.",
      ],
      labs: [
        "Alcalose metabólica hipoclorêmica e hipocalêmica, por perda de ácido clorídrico nos vômitos.",
      ],
      imaging: [
        "USG abdominal com espessamento e alongamento do piloro",
        "Vômitos em jato não biliosos + alcalose hipoclorêmica + oliva palpável = piloromiotomia é o tratamento definitivo.",
      ],
    },
    visualClue: {
      prompt: "USG abdominal com espessamento e alongamento do piloro",
      caption: "Estenose hipertrófica do piloro",
    },
  },
  {
    id: "nefrolitiase-colica-renal",
    diagnosis: "Nefrolitíase / cólica renal",
    aliases: [
      "nefrolitiase / colica renal",
      "nefrolitíase / cólica renal",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Condição muito comum, com pico de incidência entre 30-50 anos, mais frequente em homens.",
        "Baixa ingesta hídrica, dieta rica em sódio e proteína animal, história familiar.",
      ],
      history: [
        "Episódios prévios semelhantes, sem investigação metabólica completa.",
      ],
      clinical: [
        "Dor lombar em cólica, de forte intensidade, irradiando para a região inguinal.",
        "Paciente agitado, sem posição de conforto, náuseas associadas, hematúria microscópica.",
      ],
      labs: [
        "Sumário de urina com hematúria; função renal deve ser avaliada, principalmente se rim único ou bilateral.",
      ],
      imaging: [
        "TC de abdome sem contraste mostrando cálculo em topografia ureteral",
        "Dor em cólica + hematúria + cálculo <5mm no ureter distal = manejo conservador com analgesia costuma ser suficiente.",
      ],
    },
    visualClue: {
      prompt: "TC de abdome sem contraste mostrando cálculo em topografia ureteral",
      caption: "Nefrolitíase / cólica renal",
    },
  },
  {
    id: "pielonefrite-aguda",
    diagnosis: "Pielonefrite aguda",
    aliases: [
      "pielonefrite aguda",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Infecção do trato urinário alto, mais comum em mulheres jovens sexualmente ativas.",
        "ITU de repetição, gestação, anormalidades anatômicas do trato urinário, diabetes.",
      ],
      history: [
        "Episódio de cistite há poucos dias, tratado de forma incompleta.",
      ],
      clinical: [
        "Febre alta com calafrios, dor lombar unilateral, disúria associada.",
        "Punho-percussão lombar (Giordano) positiva do lado acometido.",
      ],
      labs: [
        "Leucocitúria, nitrito positivo, leucocitose com desvio à esquerda.",
      ],
      imaging: [
        "USG de rins e vias urinárias para excluir obstrução/abscesso",
        "Febre + Giordano positivo + leucocitúria = pielonefrite; sempre avaliar sinais de sepse e necessidade de internação.",
      ],
    },
    visualClue: {
      prompt: "USG de rins e vias urinárias para excluir obstrução/abscesso",
      caption: "Pielonefrite aguda",
    },
  },
  {
    id: "cefaleia-em-salvas",
    diagnosis: "Cefaleia em salvas",
    aliases: [
      "cefaleia em salvas",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Uma das cefaleias primárias mais incapacitantes, mais comum em homens.",
        "Tabagismo, uso de álcool durante os períodos de crise, ritmo circadiano alterado.",
      ],
      history: [
        "Episódios em 'salvas' que se repetem na mesma época do ano, com períodos de remissão.",
      ],
      clinical: [
        "Dor periorbitária unilateral, de intensidade excruciante, com duração de 15 a 180 minutos.",
        "Lacrimejamento, congestão nasal e ptose/miose ipsilaterais durante a crise (sinais autonômicos).",
      ],
      labs: [
        "Exames laboratoriais normais — diagnóstico é clínico.",
      ],
      imaging: [
        "RM de crânio normal, usada para excluir causas secundárias",
        "Dor unilateral periorbitária excruciante + sinais autonômicos ipsilaterais + padrão em salvas = oxigênio a 100% é primeira linha na crise aguda.",
      ],
    },
    visualClue: {
      prompt: "RM de crânio normal, usada para excluir causas secundárias",
      caption: "Cefaleia em salvas",
    },
  },
  {
    id: "enxaqueca-com-aura",
    diagnosis: "Enxaqueca com aura",
    aliases: [
      "enxaqueca com aura",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Cefaleia primária muito prevalente, três vezes mais comum em mulheres.",
        "História familiar positiva, uso de anticoncepcional oral, jejum prolongado, privação de sono.",
      ],
      history: [
        "Crises recorrentes desde a adolescência, piora perimenstrual.",
      ],
      clinical: [
        "Cefaleia pulsátil unilateral, precedida por alterações visuais (escotomas cintilantes).",
        "Fotofobia, fonofobia e náuseas associadas; aura dura entre 5 e 60 minutos antes da dor.",
      ],
      labs: [
        "Exames laboratoriais normais — diagnóstico é clínico.",
      ],
      imaging: [
        "RM de crânio normal, reservada para sinais de alarme",
        "Aura visual totalmente reversível seguida de cefaleia pulsátil unilateral = enxaqueca com aura; triptanos são primeira linha na crise.",
      ],
    },
    visualClue: {
      prompt: "RM de crânio normal, reservada para sinais de alarme",
      caption: "Enxaqueca com aura",
    },
  },
  {
    id: "sindrome-da-dor-miofascial",
    diagnosis: "Síndrome da dor miofascial",
    aliases: [
      "sindrome da dor miofascial",
      "síndrome da dor miofascial",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Uma das causas mais comuns de dor musculoesquelética regional atendida em ambulatórios de dor.",
        "Postura inadequada prolongada, sobrecarga muscular repetitiva, estresse.",
      ],
      history: [
        "Trabalho com postura fixa prolongada, sem trauma associado.",
      ],
      clinical: [
        "Dor muscular regional, com pontos específicos que reproduzem dor referida à palpação.",
        "Presença de 'pontos-gatilho' (trigger points) palpáveis, com banda tensa muscular.",
      ],
      labs: [
        "Provas inflamatórias normais — diferencia de causas inflamatórias sistêmicas.",
      ],
      imaging: [
        "sem alteração estrutural esperada nos exames de imagem convencionais",
        "Ponto-gatilho que reproduz dor referida característica à palpação = dor miofascial; agulhamento seco é uma opção terapêutica.",
      ],
    },
    visualClue: {
      prompt: "sem alteração estrutural esperada nos exames de imagem convencionais",
      caption: "Síndrome da dor miofascial",
    },
  },
  {
    id: "neuropatia-diabetica-periferica-dolorosa",
    diagnosis: "Neuropatia diabética periférica dolorosa",
    aliases: [
      "neuropatia diabetica periferica dolorosa",
      "neuropatia diabética periférica dolorosa",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Complicação crônica mais comum do diabetes mellitus de longa duração.",
        "Diabetes mal controlado por muitos anos, neuropatia relacionada ao tempo de doença.",
      ],
      history: [
        "Diabético tipo 2 há mais de 10 anos, controle glicêmico inadequado.",
      ],
      clinical: [
        "Dor em queimação e formigamento em extremidades, em padrão 'em bota e luva'.",
        "Piora noturna característica, perda de sensibilidade vibratória e ao monofilamento.",
      ],
      labs: [
        "Hemoglobina glicada elevada, refletindo controle glicêmico inadequado ao longo do tempo.",
      ],
      imaging: [
        "eletroneuromiografia mostrando padrão de polineuropatia sensitivo-motora",
        "Dor simétrica distal 'em bota e luva' em diabético de longa data = neuropatia diabética; duloxetina e pregabalina são primeira linha.",
      ],
    },
    visualClue: {
      prompt: "eletroneuromiografia mostrando padrão de polineuropatia sensitivo-motora",
      caption: "Neuropatia diabética periférica dolorosa",
    },
  },
  {
    id: "hemorragia-subaracnoidea",
    diagnosis: "Hemorragia subaracnóidea",
    aliases: [
      "hemorragia subaracnoidea",
      "hemorragia subaracnóidea",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Emergência neurológica grave, principal causa é ruptura de aneurisma cerebral.",
        "Hipertensão não controlada, tabagismo, doença renal policística, história familiar de aneurisma.",
      ],
      history: [
        "Hipertensa, sem outras comorbidades relevantes conhecidas.",
      ],
      clinical: [
        "Cefaleia súbita e intensa, descrita como 'a pior dor de cabeça da vida' (thunderclap).",
        "Rigidez de nuca, náuseas e vômitos, possível rebaixamento do nível de consciência.",
      ],
      labs: [
        "Se a TC for normal e a suspeita persistir, punção lombar pode mostrar xantocromia.",
      ],
      imaging: [
        "TC de crânio sem contraste mostrando sangue nos espaços subaracnóideos",
        "Cefaleia thunderclap + sangue nas cisternas basais na TC = HSA; angiografia deve localizar o aneurisma para tratamento urgente.",
      ],
    },
    visualClue: {
      prompt: "TC de crânio sem contraste mostrando sangue nos espaços subaracnóideos",
      caption: "Hemorragia subaracnóidea",
    },
  },
  {
    id: "crise-asmatica-grave",
    diagnosis: "Crise asmática grave",
    aliases: [
      "crise asmatica grave",
      "crise asmática grave",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Doença respiratória crônica muito prevalente, com exacerbações que podem ser fatais se mal manejadas.",
        "Exposição a alérgenos, infecção viral respiratória, má aderência ao tratamento de manutenção.",
      ],
      history: [
        "Asmática conhecida, uso irregular do corticoide inalatório de manutenção.",
      ],
      clinical: [
        "Dispneia progressiva e sibilância que não melhora com o broncodilatador de resgate habitual.",
        "Uso de musculatura acessória, frases entrecortadas, tórax silencioso em casos extremos (sinal de gravidade).",
      ],
      labs: [
        "Gasometria inicialmente com alcalose respiratória; normalização ou acidose respiratória indica fadiga muscular e gravidade extrema.",
      ],
      imaging: [
        "RX de tórax para excluir pneumotórax ou pneumonia associada",
        "Tórax silencioso + PaCO2 normalizando (não mais baixa) = sinal de exaustão respiratória iminente, indicação de suporte ventilatório.",
      ],
    },
    visualClue: {
      prompt: "RX de tórax para excluir pneumotórax ou pneumonia associada",
      caption: "Crise asmática grave",
    },
  },
  {
    id: "endocardite-infecciosa",
    diagnosis: "Endocardite infecciosa",
    aliases: [
      "endocardite infecciosa",
    ],
    isPremium: false,
    clues: {
      epidemiology: [
        "Infecção grave do endocárdio, mortalidade elevada mesmo com tratamento adequado.",
        "Uso de drogas endovenosas, próteses valvares, valvopatia estrutural prévia, procedimentos dentários recentes.",
      ],
      history: [
        "Usuário de drogas injetáveis, episódios febris recorrentes nas últimas semanas.",
      ],
      clinical: [
        "Febre persistente associada a mal-estar geral e perda de peso.",
        "Sopro cardíaco novo, lesões de Janeway, nódulos de Osler, manchas de Roth ao exame de fundo de olho.",
      ],
      labs: [
        "Hemoculturas seriadas positivas, provas inflamatórias elevadas.",
      ],
      imaging: [
        "ecocardiograma transesofágico mostrando vegetação valvar",
        "Febre + hemoculturas positivas persistentes + vegetação valvar ao eco = critérios de Duke maiores fecham o diagnóstico de endocardite.",
      ],
    },
    visualClue: {
      prompt: "ecocardiograma transesofágico mostrando vegetação valvar",
      caption: "Endocardite infecciosa",
    },
  },
];
