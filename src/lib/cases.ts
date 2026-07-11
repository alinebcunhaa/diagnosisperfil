<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Perfil Médico</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --cream:#F6F1E7;
    --cream-2:#EFE7D8;
    --terracotta:#C2714F;
    --terracotta-dark:#A85A3C;
    --sage:#7E8E6F;
    --sage-dark:#65735A;
    --ink:#3A342C;
    --ink-soft:#6B6255;
    --line:#E0D6C3;
    --white:#FFFDF9;
    --danger:#B4543F;
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    background:var(--cream);
    color:var(--ink);
    font-family:'Source Sans 3',sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.serif{font-family:'Lora',serif;}
  .app{max-width:980px;margin:0 auto;padding:28px 20px 80px;}

  /* HEADER */
  header.top{
    display:flex;justify-content:space-between;align-items:flex-end;
    margin-bottom:22px;flex-wrap:wrap;gap:12px;
  }
  header.top .brand{display:flex;align-items:center;gap:12px;}
  .num-badge{
    width:46px;height:46px;border-radius:50%;
    background:var(--terracotta);color:var(--white);
    display:flex;align-items:center;justify-content:center;
    font-family:'Lora',serif;font-weight:700;font-size:15px;
    box-shadow:0 3px 0 var(--terracotta-dark);
  }
  header.top h1{margin:0;font-size:26px;font-weight:700;letter-spacing:-0.3px;}
  header.top p{margin:2px 0 0;color:var(--ink-soft);font-size:13.5px;}

  nav.tabs{display:flex;gap:6px;background:var(--cream-2);padding:4px;border-radius:10px;}
  nav.tabs button{
    border:none;background:transparent;padding:8px 14px;border-radius:7px;
    font-family:'Source Sans 3',sans-serif;font-weight:600;font-size:13.5px;
    color:var(--ink-soft);cursor:pointer;transition:.15s;
  }
  nav.tabs button.active{background:var(--white);color:var(--ink);box-shadow:0 1px 3px rgba(0,0,0,.08);}
  nav.tabs button:hover:not(.active){color:var(--ink);}

  .card-panel{
    background:var(--white);border:1px solid var(--line);border-radius:14px;
    padding:22px;margin-bottom:18px;box-shadow:0 2px 8px rgba(58,52,44,.04);
  }

  /* SETUP */
  .setup-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  @media(max-width:680px){.setup-grid{grid-template-columns:1fr;}}
  .field-label{font-weight:600;font-size:13px;text-transform:uppercase;letter-spacing:.5px;color:var(--sage-dark);margin-bottom:8px;display:block;}
  .chip-row{display:flex;flex-wrap:wrap;gap:8px;}
  .chip{
    padding:6px 13px;border-radius:20px;border:1.5px solid var(--line);
    background:var(--cream);font-size:13.5px;font-weight:600;cursor:pointer;
    color:var(--ink-soft);transition:.15s;user-select:none;
  }
  .chip.selected{background:var(--sage);border-color:var(--sage-dark);color:var(--white);}
  .mode-cards{display:flex;gap:14px;}
  .mode-card{
    flex:1;border:2px solid var(--line);border-radius:12px;padding:16px;cursor:pointer;
    transition:.15s;background:var(--cream);
  }
  .mode-card.active{border-color:var(--terracotta);background:#FBF1EB;}
  .mode-card h3{margin:0 0 4px;font-size:16px;}
  .mode-card p{margin:0;font-size:12.5px;color:var(--ink-soft);line-height:1.4;}

  .btn{
    border:none;border-radius:9px;padding:11px 20px;font-weight:700;font-size:14px;
    cursor:pointer;font-family:'Source Sans 3',sans-serif;transition:.15s;
  }
  .btn-primary{background:var(--terracotta);color:var(--white);box-shadow:0 3px 0 var(--terracotta-dark);}
  .btn-primary:hover{transform:translateY(1px);box-shadow:0 2px 0 var(--terracotta-dark);}
  .btn-primary:disabled{opacity:.4;cursor:not-allowed;transform:none;}
  .btn-secondary{background:var(--cream-2);color:var(--ink);}
  .btn-secondary:hover{background:var(--line);}
  .btn-ghost{background:transparent;color:var(--sage-dark);border:1.5px solid var(--sage);}
  .btn-danger{background:transparent;color:var(--danger);border:1.5px solid var(--danger);}
  .btn-sm{padding:6px 12px;font-size:12.5px;border-radius:7px;}

  /* GAME */
  .game-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;}
  .cat-tag{
    display:inline-block;padding:3px 10px;border-radius:20px;font-size:11.5px;font-weight:700;
    text-transform:uppercase;letter-spacing:.4px;background:var(--sage);color:var(--white);
  }
  .points-badge{
    font-family:'Lora',serif;font-weight:700;font-size:22px;color:var(--terracotta);
    display:flex;align-items:baseline;gap:5px;
  }
  .points-badge span{font-size:12px;font-weight:600;color:var(--ink-soft);font-family:'Source Sans 3',sans-serif;text-transform:uppercase;}

  .clue-list{display:flex;flex-direction:column;gap:10px;margin:16px 0;}
  .clue{
    background:var(--cream);border:1px solid var(--line);border-radius:10px;
    padding:12px 14px;display:flex;gap:12px;align-items:flex-start;
    animation:reveal .35s ease;
  }
  @keyframes reveal{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}
  .clue .n{
    flex-shrink:0;width:26px;height:26px;border-radius:50%;background:var(--terracotta);
    color:var(--white);font-weight:700;font-size:12.5px;display:flex;align-items:center;justify-content:center;
  }
  .clue .body{flex:1;}
  .clue .label{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--sage-dark);margin-bottom:2px;}
  .clue .text{font-size:14.5px;line-height:1.4;}
  .clue img{max-width:100%;border-radius:8px;margin-top:8px;border:1px solid var(--line);}
  .clue-placeholder{
    border:1.5px dashed var(--line);border-radius:10px;padding:14px;text-align:center;
    color:var(--ink-soft);font-size:13px;
  }

  .guess-row{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;}
  .guess-row input{
    flex:1;min-width:180px;padding:11px 14px;border-radius:9px;border:1.5px solid var(--line);
    font-family:'Source Sans 3',sans-serif;font-size:14.5px;background:var(--white);
  }
  .guess-row input:focus{outline:none;border-color:var(--terracotta);}

  .answer-box{
    background:#F1F0E4;border:1.5px solid var(--sage);border-radius:12px;padding:16px 18px;margin-top:14px;
  }
  .answer-box h3{margin:0 0 10px;color:var(--sage-dark);}
  .answer-box .grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;font-size:13.5px;}
  @media(max-width:680px){.answer-box .grid{grid-template-columns:1fr;}}
  .answer-box .grid div b{display:block;font-size:10.5px;text-transform:uppercase;letter-spacing:.4px;color:var(--sage-dark);margin-bottom:2px;}

  /* TEAMS (grupo) */
  .teams-bar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;}
  .team-pill{
    background:var(--cream-2);border:1.5px solid var(--line);border-radius:10px;
    padding:10px 16px;text-align:center;cursor:pointer;transition:.15s;min-width:100px;
  }
  .team-pill:hover{border-color:var(--sage);background:#EEF0E7;}
  .team-pill .tname{font-weight:700;font-size:13.5px;}
  .team-pill .tscore{font-family:'Lora',serif;font-weight:700;font-size:20px;color:var(--terracotta);}
  .add-team-row{display:flex;gap:8px;margin-bottom:16px;}
  .add-team-row input{padding:8px 12px;border-radius:8px;border:1.5px solid var(--line);font-size:13.5px;flex:1;max-width:200px;}

  /* CARDS LIST (minhas cartas) */
  .card-list-item{
    display:flex;justify-content:space-between;align-items:center;
    padding:12px 14px;border:1px solid var(--line);border-radius:10px;margin-bottom:8px;background:var(--cream);
  }
  .card-list-item .name{font-weight:700;font-size:14.5px;}
  .card-list-item .meta{font-size:12px;color:var(--ink-soft);}
  .actions{display:flex;gap:6px;}

  .form-grid{display:flex;flex-direction:column;gap:12px;}
  .form-grid label{font-weight:600;font-size:12.5px;text-transform:uppercase;letter-spacing:.4px;color:var(--sage-dark);}
  .form-grid input[type=text], .form-grid textarea, .form-grid select{
    width:100%;padding:9px 12px;border-radius:8px;border:1.5px solid var(--line);
    font-family:'Source Sans 3',sans-serif;font-size:14px;margin-top:4px;background:var(--white);
  }
  .form-grid textarea{resize:vertical;min-height:44px;}
  .clue-edit-row{display:flex;gap:8px;align-items:flex-start;border:1px solid var(--line);border-radius:9px;padding:10px;background:var(--cream);}
  .clue-edit-row select{max-width:170px;flex-shrink:0;}
  .clue-edit-row textarea{flex:1;min-height:38px;margin:0;}
  .clue-edit-row button{flex-shrink:0;}

  .empty-state{text-align:center;padding:40px 20px;color:var(--ink-soft);}
  .empty-state .icon{font-size:34px;margin-bottom:8px;}

  .toast{
    position:fixed;bottom:22px;left:50%;transform:translateX(-50%);
    background:var(--ink);color:var(--white);padding:10px 20px;border-radius:9px;
    font-size:13.5px;font-weight:600;opacity:0;pointer-events:none;transition:opacity .25s;z-index:99;
  }
  .toast.show{opacity:1;}

  .imgfile-btn{
    display:inline-block;padding:8px 14px;border-radius:8px;border:1.5px dashed var(--sage);
    color:var(--sage-dark);font-size:13px;font-weight:600;cursor:pointer;text-align:center;
  }
  .img-preview-wrap{position:relative;display:inline-block;margin-top:8px;}
  .img-preview-wrap img{max-width:220px;border-radius:8px;border:1px solid var(--line);display:block;}
  .img-preview-wrap button{position:absolute;top:-8px;right:-8px;background:var(--danger);color:#fff;border:none;border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:12px;}

  .foot-note{text-align:center;color:var(--ink-soft);font-size:12px;margin-top:24px;}
</style>
</head>
<body>
<div class="app">

  <header class="top">
    <div class="brand">
      <div class="num-badge">Pf</div>
      <div>
        <h1>Perfil Médico</h1>
        <p>Charadas clínicas — vá revelando pistas e adivinhe antes que acabem</p>
      </div>
    </div>
    <nav class="tabs" id="tabNav">
      <button data-tab="jogar" class="active">Jogar</button>
      <button data-tab="cartas">Minhas cartas</button>
    </nav>
  </header>

  <!-- ===== ABA JOGAR ===== -->
  <div id="tab-jogar">

    <!-- SETUP -->
    <div class="card-panel" id="setupPanel">
      <div class="setup-grid">
        <div>
          <span class="field-label">Modo</span>
          <div class="mode-cards">
            <div class="mode-card active" data-mode="solo">
              <h3>Solo</h3>
              <p>Você revela as pistas e tenta adivinhar antes de zerar a pontuação.</p>
            </div>
            <div class="mode-card" data-mode="grupo">
              <h3>Grupo</h3>
              <p>Um lê as pistas, os times disputam. Clique no time que acertou pra pontuar.</p>
            </div>
          </div>
        </div>
        <div>
          <span class="field-label">Especialidades</span>
          <div class="chip-row" id="catChips"></div>
        </div>
      </div>

      <div id="teamsSetup" style="display:none;margin-top:18px;">
        <span class="field-label">Times</span>
        <div class="add-team-row">
          <input type="text" id="newTeamName" placeholder="Nome do time">
          <button class="btn btn-secondary btn-sm" onclick="addTeam()">Adicionar</button>
        </div>
        <div class="teams-bar" id="teamsSetupList"></div>
      </div>

      <div style="margin-top:18px;display:flex;gap:10px;align-items:center;">
        <button class="btn btn-primary" onclick="startGame()">Começar jogo</button>
        <span id="deckCountLabel" style="color:var(--ink-soft);font-size:13px;"></span>
      </div>
    </div>

    <!-- GAME AREA -->
    <div id="gameArea" style="display:none;">

      <div class="teams-bar" id="teamsPlayBar" style="display:none;"></div>

      <div class="card-panel">
        <div class="game-top">
          <div>
            <span class="cat-tag" id="curCatTag">—</span>
            <span style="color:var(--ink-soft);font-size:12.5px;margin-left:8px;" id="curDifficulty"></span>
          </div>
          <div class="points-badge"><span>vale</span> <span id="curPoints">10</span> <span style="font-size:13px;">pts</span></div>
        </div>

        <div class="clue-list" id="clueList"></div>

        <div id="controlsArea">
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button class="btn btn-secondary" id="btnNextClue" onclick="nextClue()">Revelar próxima pista</button>
            <button class="btn btn-ghost" onclick="giveUp()">Desistir / mostrar resposta</button>
          </div>

          <div class="guess-row" id="soloGuessRow">
            <input type="text" id="guessInput" placeholder="Sua resposta..." onkeydown="if(event.key==='Enter')checkGuess()">
            <button class="btn btn-primary" onclick="checkGuess()">Responder</button>
          </div>
        </div>

        <div class="answer-box" id="answerBox" style="display:none;"></div>

        <div style="margin-top:16px;display:flex;gap:10px;" id="afterRoundActions" style="display:none;">
        </div>
      </div>
    </div>

  </div>

  <!-- ===== ABA MINHAS CARTAS ===== -->
  <div id="tab-cartas" style="display:none;">
    <div class="card-panel">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
        <h3 style="margin:0;">Banco de casos <span style="color:var(--ink-soft);font-weight:400;font-size:14px;" id="cardCountLabel"></span></h3>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-secondary btn-sm" onclick="addMissingDefaults()">Trazer casos novos</button>
          <button class="btn btn-ghost btn-sm" onclick="mergeDefaults()">Carregar novos casos padrão</button>
          <button class="btn btn-secondary btn-sm" onclick="exportCards()">Exportar JSON</button>
          <label class="btn btn-secondary btn-sm" style="cursor:pointer;">
            Importar JSON
            <input type="file" accept="application/json" style="display:none;" onchange="importCards(event)">
          </label>
          <button class="btn btn-primary btn-sm" onclick="openCardForm()">+ Novo caso</button>
        </div>
      </div>
      <div id="cardsListWrap"></div>
    </div>

    <!-- FORM -->
    <div class="card-panel" id="cardFormPanel" style="display:none;">
      <h3 id="formTitle" style="margin-top:0;">Novo caso</h3>
      <div class="form-grid">
        <div>
          <label>Nome da doença / diagnóstico</label>
          <input type="text" id="f_name" placeholder="Ex: Apendicite aguda">
        </div>
        <div>
          <label>Especialidade</label>
          <select id="f_category">
            <option value="clm">Clínica médica</option>
            <option value="cir">Cirurgia</option>
            <option value="go">Ginecologia/Obstetrícia</option>
            <option value="ped">Pediatria</option>
            <option value="psa">Emergência / PSA</option>
            <option value="prev">Medicina preventiva</option>
            <option value="dor">Dor / Anestesiologia</option>
            <option value="infecto">Infectologia</option>
            <option value="psiq">Psiquiatria</option>
          </select>
        </div>
        <div>
          <label>Dicas (ordem: da mais genérica → mais óbvia)</label>
          <div id="clueEditList" style="display:flex;flex-direction:column;gap:8px;margin-top:6px;"></div>
          <button class="btn btn-ghost btn-sm" style="margin-top:8px;" onclick="addClueRow()">+ adicionar dica</button>
        </div>
        <div>
          <label>Imagem ilustrativa (opcional — RX, ECG, USG etc. Cole a sua)</label>
          <div id="imgUploadWrap"></div>
        </div>
        <div style="display:flex;gap:10px;margin-top:6px;">
          <button class="btn btn-primary" onclick="saveCard()">Salvar caso</button>
          <button class="btn btn-secondary" onclick="closeCardForm()">Cancelar</button>
        </div>
      </div>
    </div>
  </div>

  <p class="foot-note">Perfil Médico · dados salvos no seu navegador (localStorage) · exporte para não perder</p>
</div>

<div class="toast" id="toast"></div>

<script>
/* ===================== DADOS BASE ===================== */
const CLUE_TYPES = {
  epidemiologia: "Epidemiologia",
  fatores_risco: "Fatores de risco",
  antecedentes: "Antecedentes / comorbidades",
  queixa: "Queixa principal",
  sintomas: "Sintomas associados / exame físico",
  lab: "Laboratório",
  imagem: "Imagem",
  charada: "Charada final"
};
const CATS = {clm:"Clínica médica", cir:"Cirurgia", go:"GO", ped:"Pediatria", psa:"Emergência/PSA", prev:"Preventiva", dor:"Dor/Anestesio", infecto:"Infectologia", psiq:"Psiquiatria"};

const DEFAULT_CARDS = [
{id:"c1",name:"Sepse / choque séptico",category:"psa",clues:[
 {type:"epidemiologia",text:"Uma das principais causas de mortalidade em unidades de urgência e UTI no mundo todo."},
 {type:"fatores_risco",text:"Mais comum em idosos, imunossuprimidos e pacientes com dispositivos invasivos (cateter, sonda vesical)."},
 {type:"antecedentes",text:"Paciente com infecção urinária de repetição, sem tratamento adequado nos últimos dias."},
 {type:"queixa",text:"Chega ao PS com febre, calafrios e confusão mental aguda."},
 {type:"sintomas",text:"PA 78x40, FC 128, extremidades frias e tempo de enchimento capilar >3s."},
 {type:"lab",text:"Lactato venoso 4,2 mmol/L, leucocitose com desvio à esquerda, PCR muito elevada."},
 {type:"imagem",text:"[espaço para imagem: ex. RX ou USG mostrando o foco infeccioso]"},
 {type:"charada",text:"qSOFA positivo (FR≥22, PAS≤100, alteração de consciência) + foco urinário confirmado."}
]},
{id:"c2",name:"Infarto agudo do miocárdio com supra de ST",category:"psa",clues:[
 {type:"epidemiologia",text:"Principal causa de morte cardiovascular aguda, mais comum em homens acima dos 45 anos."},
 {type:"fatores_risco",text:"Tabagismo, dislipidemia, hipertensão e diabetes mal controlados."},
 {type:"antecedentes",text:"Histórico familiar de doença coronariana precoce; paciente sedentário."},
 {type:"queixa",text:"Dor torácica em aperto, retroesternal, iniciada em repouso há 40 minutos."},
 {type:"sintomas",text:"Dor irradia para o braço esquerdo e mandíbula, associada a sudorese fria e náusea."},
 {type:"lab",text:"Troponina ultrassensível elevada e em ascensão em dosagens seriadas."},
 {type:"imagem",text:"[espaço para imagem: ECG mostrando supradesnivelamento de ST]"},
 {type:"charada",text:"Supra de ST ≥1mm em duas derivações contíguas de parede inferior (DII, DIII, aVF)."}
]},
{id:"c3",name:"Tromboembolismo pulmonar (TEP)",category:"psa",clues:[
 {type:"epidemiologia",text:"Causa importante e subdiagnosticada de morte súbita em pacientes hospitalizados."},
 {type:"fatores_risco",text:"Imobilização prolongada, cirurgia recente, uso de anticoncepcional oral, neoplasia ativa."},
 {type:"antecedentes",text:"Pós-operatório de cirurgia ortopédica há 10 dias, acamado."},
 {type:"queixa",text:"Dispneia súbita associada a dor torácica pleurítica."},
 {type:"sintomas",text:"Taquicardia, taquipneia, dessaturação, panturrilha direita edemaciada e dolorosa."},
 {type:"lab",text:"D-dímero muito elevado; gasometria com hipoxemia e alcalose respiratória."},
 {type:"imagem",text:"[espaço para imagem: angioTC de tórax com falha de enchimento em artéria pulmonar]"},
 {type:"charada",text:"Escore de Wells alto + sinal clássico de McConnell no ecocardiograma (hipocinesia de VD com poupança do ápice)."}
]},
{id:"c4",name:"AVC isquêmico",category:"psa",clues:[
 {type:"epidemiologia",text:"Segunda maior causa de morte no mundo e principal causa de incapacidade em adultos."},
 {type:"fatores_risco",text:"Fibrilação atrial não anticoagulada, hipertensão, estenose carotídea."},
 {type:"antecedentes",text:"Paciente com FA crônica em uso irregular de anticoagulante."},
 {type:"queixa",text:"Início súbito de fraqueza em dimídio direito, notado pela família há 1 hora."},
 {type:"sintomas",text:"Desvio de rima, disartria e afasia de expressão associados."},
 {type:"lab",text:"Glicemia capilar normal (importante excluir hipoglicemia como diferencial)."},
 {type:"imagem",text:"[espaço para imagem: TC de crânio sem sangramento, ou angioTC com oclusão de grande vaso]"},
 {type:"charada",text:"NIHSS elevado, dentro da janela trombolítica (<4,5h), sem contraindicações — candidato a trombólise."}
]},
{id:"c5",name:"Cetoacidose diabética",category:"psa",clues:[
 {type:"epidemiologia",text:"Complicação aguda mais comum em pacientes com diabetes tipo 1, mas pode ocorrer no tipo 2."},
 {type:"fatores_risco",text:"Infecção concomitante, má aderência à insulinoterapia, uso de corticoide."},
 {type:"antecedentes",text:"Adolescente diabético tipo 1 que parou de aplicar insulina há 2 dias."},
 {type:"queixa",text:"Dor abdominal difusa, náuseas e vômitos, poliúria e polidipsia."},
 {type:"sintomas",text:"Hálito cetônico, respiração de Kussmaul, desidratação importante."},
 {type:"lab",text:"Glicemia >250, gasometria com acidose metabólica de ânion gap elevado, cetonemia/cetonúria positivas."},
 {type:"imagem",text:"[espaço para imagem: ex. RX de tórax para excluir foco infeccioso desencadeante]"},
 {type:"charada",text:"pH <7,3 + bicarbonato <18 + cetonas positivas + hiperglicemia = tríade diagnóstica fechada."}
]},
{id:"c6",name:"Pneumonia adquirida na comunidade grave",category:"clm",clues:[
 {type:"epidemiologia",text:"Principal causa infecciosa de internação em adultos, mais grave em idosos e imunossuprimidos."},
 {type:"fatores_risco",text:"Tabagismo, DPOC prévia, etilismo, institucionalização recente."},
 {type:"antecedentes",text:"Idoso institucionalizado, com quadro gripal há 5 dias que piorou."},
 {type:"queixa",text:"Tosse produtiva, febre alta e dispneia progressiva."},
 {type:"sintomas",text:"Estertores crepitantes localizados, FR 32irpm, confusão mental nova."},
 {type:"lab",text:"Leucocitose com desvio, PCR elevada, ureia elevada (componente do CURB-65)."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax com consolidação lobar]"},
 {type:"charada",text:"CURB-65 ≥3 — indicação de internação em UTI, cobertura para germes atípicos e típicos."}
]},
{id:"c7",name:"Insuficiência cardíaca descompensada",category:"clm",clues:[
 {type:"epidemiologia",text:"Principal causa de internação em maiores de 65 anos no mundo."},
 {type:"fatores_risco",text:"HAS de longa data, cardiopatia isquêmica prévia, má aderência a diuréticos."},
 {type:"antecedentes",text:"Paciente com ICFEr conhecida, parou de tomar furosemida há uma semana."},
 {type:"queixa",text:"Dispneia progressiva aos esforços, ortopneia e edema de membros inferiores."},
 {type:"sintomas",text:"Turgência jugular patológica, estertores bibasais, terceira bulha (B3)."},
 {type:"lab",text:"BNP/NT-proBNP muito elevado."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax com congestão pulmonar/cardiomegalia]"},
 {type:"charada",text:"Perfil hemodinâmico 'quente e úmido' — congestão sem baixo débito, responde bem a diurético IV."}
]},
{id:"c8",name:"DPOC exacerbado",category:"clm",clues:[
 {type:"epidemiologia",text:"Quarta causa de morte no mundo, fortemente associada ao tabagismo."},
 {type:"fatores_risco",text:"Tabagismo de longa data (carga tabágica alta), exposição ocupacional a poeira/fumaça."},
 {type:"antecedentes",text:"DPOC GOLD conhecido, uso domiciliar de broncodilatador, piora após resfriado."},
 {type:"queixa",text:"Piora da dispneia habitual, aumento do volume e purulência do escarro."},
 {type:"sintomas",text:"Uso de musculatura acessória, sibilos difusos, tórax em tonel."},
 {type:"lab",text:"Gasometria com acidose respiratória e retenção de CO2 (hipercapnia)."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax com hiperinsuflação, retificação de cúpulas]"},
 {type:"charada",text:"Critérios de Anthonisen (dispneia + volume + purulência do escarro) = indicação de antibiótico."}
]},
{id:"c9",name:"Apendicite aguda",category:"cir",clues:[
 {type:"epidemiologia",text:"Principal causa de abdome agudo cirúrgico em jovens, pico entre 10-30 anos."},
 {type:"fatores_risco",text:"Obstrução do lúmen apendicular por fecalito ou hiperplasia linfoide."},
 {type:"antecedentes",text:"Sem antecedentes relevantes, jovem previamente hígido."},
 {type:"queixa",text:"Dor abdominal iniciada em região periumbilical, migrando para fossa ilíaca direita."},
 {type:"sintomas",text:"Sinal de Blumberg positivo, anorexia, náuseas, febre baixa."},
 {type:"lab",text:"Leucocitose leve a moderada com desvio à esquerda."},
 {type:"imagem",text:"[espaço para imagem: USG ou TC com apêndice espessado >6-7mm]"},
 {type:"charada",text:"Escore de Alvarado alto + sinal de Rovsing positivo — indicação cirúrgica praticamente confirmada."}
]},
{id:"c10",name:"Colecistite aguda",category:"cir",clues:[
 {type:"epidemiologia",text:"Mais comum em mulheres, mais frequente após os 40 anos."},
 {type:"fatores_risco",text:"Os 4 F's: female, forty, fertile, fat (obesidade)."},
 {type:"antecedentes",text:"Colelitíase conhecida, episódios prévios de cólica biliar após alimentação gordurosa."},
 {type:"queixa",text:"Dor em hipocôndrio direito, contínua, há mais de 6 horas, com febre."},
 {type:"sintomas",text:"Sinal de Murphy positivo (parada da inspiração à palpação do hipocôndrio direito)."},
 {type:"lab",text:"Leucocitose e discreta elevação de enzimas hepáticas/bilirrubinas."},
 {type:"imagem",text:"[espaço para imagem: USG com espessamento de parede vesicular >3mm e líquido perivesicular]"},
 {type:"charada",text:"Cálculo impactado no infundíbulo/ducto cístico à USG + sinal de Murphy ultrassonográfico positivo."}
]},
{id:"c11",name:"Obstrução intestinal mecânica",category:"cir",clues:[
 {type:"epidemiologia",text:"Causa comum de internação cirúrgica de urgência em adultos com cirurgia abdominal prévia."},
 {type:"fatores_risco",text:"Bridas/aderências pós-cirúrgicas são a causa mais frequente no intestino delgado."},
 {type:"antecedentes",text:"Laparotomia prévia há anos, sem outras comorbidades."},
 {type:"queixa",text:"Dor abdominal em cólica, distensão progressiva, parada de eliminação de gases e fezes."},
 {type:"sintomas",text:"Vômitos que evoluem de biliosos para fecaloides, ruídos hidroaéreos aumentados (timbre metálico)."},
 {type:"lab",text:"Distúrbio hidroeletrolítico por vômitos repetidos, alcalose metabólica hipoclorêmica."},
 {type:"imagem",text:"[espaço para imagem: RX de abdome em pé com níveis hidroaéreos e distensão de alças]"},
 {type:"charada",text:"Alças de delgado distendidas em 'empilhamento de moedas', sem gás distal — obstrução completa."}
]},
{id:"c12",name:"Pré-eclâmpsia grave",category:"go",clues:[
 {type:"epidemiologia",text:"Complicação hipertensiva específica da gestação, principal causa de morte materna evitável."},
 {type:"fatores_risco",text:"Primigesta, gestação múltipla, obesidade, história prévia de pré-eclâmpsia."},
 {type:"antecedentes",text:"Gestante de 34 semanas, pré-natal com poucas consultas."},
 {type:"queixa",text:"Cefaleia holocraniana intensa e escotomas visuais."},
 {type:"sintomas",text:"PA 168x112, dor em epigástrio/hipocôndrio direito, reflexos exaltados."},
 {type:"lab",text:"Proteinúria significativa, plaquetopenia, elevação de transaminases (pensar em síndrome HELLP)."},
 {type:"imagem",text:"[espaço para imagem: USG obstétrico com Doppler de artérias uterinas alterado]"},
 {type:"charada",text:"PA≥160x110 + sintomas de iminência de eclâmpsia (cefaleia+escotomas+epigastralgia) = pré-eclâmpsia grave, indicação de sulfato de magnésio."}
]},
{id:"c13",name:"Descolamento prematuro de placenta (DPP)",category:"go",clues:[
 {type:"epidemiologia",text:"Emergência obstétrica com alta morbimortalidade materno-fetal, geralmente no 3º trimestre."},
 {type:"fatores_risco",text:"Hipertensão gestacional, trauma abdominal, uso de cocaína, tabagismo."},
 {type:"antecedentes",text:"Gestante hipertensa crônica, sofreu trauma abdominal leve há poucas horas."},
 {type:"queixa",text:"Dor abdominal súbita e intensa, sangramento vaginal escuro."},
 {type:"sintomas",text:"Útero hipertônico, taquissistolia, sofrimento fetal agudo ao monitoramento."},
 {type:"lab",text:"Queda de fibrinogênio e plaquetas, sinais de coagulopatia associada."},
 {type:"imagem",text:"[espaço para imagem: USG mostrando coágulo retroplacentário — atenção: exame pode ser normal]"},
 {type:"charada",text:"Tríade dor abdominal + sangramento + hipertonia uterina em gestante hipertensa = indicação de parto imediato."}
]},
{id:"c14",name:"Bronquiolite viral aguda",category:"ped",clues:[
 {type:"epidemiologia",text:"Principal causa de internação respiratória em lactentes, pico sazonal no outono/inverno."},
 {type:"fatores_risco",text:"Prematuridade, cardiopatia congênita, ausência de aleitamento materno."},
 {type:"antecedentes",text:"Lactente de 4 meses, irmão mais velho com resfriado na última semana."},
 {type:"queixa",text:"Coriza e tosse há 3 dias, evoluindo com dificuldade respiratória."},
 {type:"sintomas",text:"Sibilos difusos, tiragem subcostal, batimento de asa de nariz."},
 {type:"lab",text:"Teste rápido positivo para vírus sincicial respiratório (VSR)."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax com hiperinsuflação e infiltrado peribrônquico]"},
 {type:"charada",text:"Primeiro episódio de sibilância em lactente <2 anos com pródromo viral = bronquiolite, manejo é essencialmente suportivo."}
]},
{id:"c15",name:"Invaginação intestinal",category:"ped",clues:[
 {type:"epidemiologia",text:"Causa mais comum de obstrução intestinal em lactentes entre 6 meses e 2 anos."},
 {type:"fatores_risco",text:"Infecção viral recente (hiperplasia de placas de Peyer atuando como ponto de partida)."},
 {type:"antecedentes",text:"Lactente previamente hígido, quadro de gastroenterite na semana anterior."},
 {type:"queixa",text:"Choro súbito e intenso em crises, com flexão das pernas sobre o abdome."},
 {type:"sintomas",text:"Entre as crises a criança fica letárgica; massa palpável em hipocôndrio direito."},
 {type:"lab",text:"Exames laboratoriais geralmente inespecíficos nas fases iniciais."},
 {type:"imagem",text:"[espaço para imagem: USG abdominal com sinal do alvo (target sign)]"},
 {type:"charada",text:"Tríade dor em cólica + massa abdominal + fezes 'em geleia de framboesa' — redução por enema é primeira linha."}
]},
{id:"c16",name:"Meningite bacteriana",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência infecciosa com necessidade de antibiótico empírico imediato, alta letalidade se não tratada."},
 {type:"fatores_risco",text:"Ausência de vacinação (meningocócica, pneumocócica), imunossupressão."},
 {type:"antecedentes",text:"Adolescente sem histórico vacinal completo, contato próximo com caso similar recente."},
 {type:"queixa",text:"Febre alta, cefaleia intensa e rigidez de nuca de início rápido."},
 {type:"sintomas",text:"Sinais de Kernig e Brudzinski positivos, fotofobia, petéquias em tronco."},
 {type:"lab",text:"Líquor turvo, com pleocitose neutrofílica, glicorraquia baixa e proteinorraquia alta."},
 {type:"imagem",text:"[espaço para imagem: TC de crânio antes da punção se houver sinais de hipertensão intracraniana]"},
 {type:"charada",text:"Petéquias/púrpura + rigidez de nuca + febre em adolescente = pensar em meningococcemia, antibiótico não pode esperar exame de imagem."}
]},
{id:"c17",name:"Anafilaxia",category:"psa",clues:[
 {type:"epidemiologia",text:"Reação de hipersensibilidade grave, com incidência crescente, potencialmente fatal em minutos."},
 {type:"fatores_risco",text:"Atopia prévia, exposição conhecida a alérgeno (picada de inseto, alimento, medicamento)."},
 {type:"antecedentes",text:"Alergia conhecida a camarão, ingeriu alimento em restaurante há 15 minutos."},
 {type:"queixa",text:"Início súbito de urticária generalizada e sensação de 'garganta fechando'."},
 {type:"sintomas",text:"Estridor, sibilância, hipotensão, edema de lábios e língua."},
 {type:"lab",text:"Triptase sérica elevada (quando dosada, geralmente retrospectivamente)."},
 {type:"imagem",text:"[espaço para imagem: não é essencial para o diagnóstico — clínico]"},
 {type:"charada",text:"Envolvimento cutâneo + respiratório + cardiovascular após exposição a alérgeno = adrenalina IM imediata, sem esperar mais exames."}
]},
{id:"c18",name:"Síndrome de Wellens",category:"clm",clues:[
 {type:"epidemiologia",text:"Padrão eletrocardiográfico de alto risco, encontrado em cerca de 10-15% dos pacientes com síndrome coronariana aguda sem supra de ST."},
 {type:"fatores_risco",text:"Mesmos fatores de risco cardiovascular clássicos: tabagismo, dislipidemia, hipertensão."},
 {type:"antecedentes",text:"Paciente com dor torácica anginosa que já cessou no momento da avaliação."},
 {type:"queixa",text:"Relata episódio de dor torácica opressiva há algumas horas, atualmente assintomático."},
 {type:"sintomas",text:"Exame físico praticamente normal no momento da consulta, sem dor à reavaliação."},
 {type:"lab",text:"Troponina discretamente elevada ou ainda negativa, apesar do ECG chamativo."},
 {type:"imagem",text:"[espaço para imagem: ECG com ondas T bifásicas ou profundamente invertidas em V2-V3]"},
 {type:"charada",text:"Padrão de onda T em V2-V3 que indica estenose crítica proximal de descendente anterior — angioplastia não deve ser adiada mesmo assintomático."}
]},
{id:"c19",name:"Taquicardia por reentrada nodal (AVNRT)",category:"clm",clues:[
 {type:"epidemiologia",text:"Taquicardia supraventricular paroxística mais comum, mais frequente em mulheres jovens sem cardiopatia estrutural."},
 {type:"fatores_risco",text:"Reentrada nodal por via dupla (via rápida e via lenta) no nó AV — geralmente sem cardiopatia de base."},
 {type:"antecedentes",text:"Episódios semelhantes prévios, resolvidos espontaneamente ou com manobra vagal."},
 {type:"queixa",text:"Palpitações de início e término súbitos, taquicardia percebida como 'coração disparado'."},
 {type:"sintomas",text:"FC regular entre 150-220bpm; sinal de 'frog sign' (pulsação jugular visível) pode estar presente."},
 {type:"lab",text:"Exames laboratoriais geralmente normais; função tireoidiana deve ser avaliada para descartar causa secundária."},
 {type:"imagem",text:"[espaço para imagem: ECG com QRS estreito e regular, onda P retrógrada ou 'escondida' no QRS]"},
 {type:"charada",text:"Taquicardia de QRS estreito que reverte com adenosina IV — reentrada confinada ao nó AV."}
]},
{id:"c20",name:"Taquicardia por reentrada AV (WPW/AVRT)",category:"clm",clues:[
 {type:"epidemiologia",text:"Taquiarritmia por via acessória, associada à síndrome de Wolff-Parkinson-White."},
 {type:"fatores_risco",text:"Presença de feixe acessório (via anômala) conectando átrio e ventrículo fora do nó AV."},
 {type:"antecedentes",text:"ECG basal prévio já mostrava pré-excitação, achado incidental em exame de rotina."},
 {type:"queixa",text:"Palpitações súbitas associadas a tontura, ocasionalmente síncope."},
 {type:"sintomas",text:"Taquicardia regular de início abrupto; atenção ao risco de fibrilação atrial pré-excitada."},
 {type:"lab",text:"Sem alterações laboratoriais específicas."},
 {type:"imagem",text:"[espaço para imagem: ECG basal com PR curto e onda delta (empastamento inicial do QRS)]"},
 {type:"charada",text:"PR curto + onda delta em ritmo sinusal = pré-excitação — cuidado ao usar bloqueadores do nó AV se houver FA associada."}
]},
{id:"c21",name:"Hipotermia acidental (onda de Osborn)",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência ambiental mais comum em extremos de idade e em situações de exposição ao frio ou imersão."},
 {type:"fatores_risco",text:"Idade avançada, uso de álcool, intoxicação, permanência prolongada ao relento no frio."},
 {type:"antecedentes",text:"Paciente encontrado ao relento em baixa temperatura, etilista crônico."},
 {type:"queixa",text:"Confusão mental, tremores que cessam com o agravamento da hipotermia."},
 {type:"sintomas",text:"Bradicardia, rigidez muscular, pele fria, nível de consciência rebaixado."},
 {type:"lab",text:"Temperatura central baixa (retal/esofágica); gasometria pode mostrar acidose."},
 {type:"imagem",text:"[espaço para imagem: ECG com onda J (Osborn) no ponto J, mais evidente nas derivações inferiores e precordiais laterais]"},
 {type:"charada",text:"Onda de Osborn proeminente + temperatura central <32°C = reaquecimento cuidadoso, risco de fibrilação ventricular com manipulação brusca."}
]},
{id:"c22",name:"Pericardite aguda",category:"clm",clues:[
 {type:"epidemiologia",text:"Causa comum de dor torácica em jovens, frequentemente de etiologia viral/idiopática."},
 {type:"fatores_risco",text:"Infecção viral recente do trato respiratório, doenças autoimunes, pós-IAM (síndrome de Dressler)."},
 {type:"antecedentes",text:"Quadro gripal na última semana, sem antecedentes cardiovasculares."},
 {type:"queixa",text:"Dor torácica pleurítica que piora ao deitar e melhora ao inclinar o tronco para frente."},
 {type:"sintomas",text:"Atrito pericárdico à ausculta, febre baixa associada."},
 {type:"lab",text:"PCR e VHS elevados; troponina pode estar discretamente alterada se houver miopericardite."},
 {type:"imagem",text:"[espaço para imagem: ECG com supradesnivelamento difuso do segmento ST côncavo e infradesnivelamento de PR]"},
 {type:"charada",text:"Supra de ST difuso e côncavo (sem imagem em espelho) + infra de PR = pericardite, não confundir com IAM."}
]},
{id:"c23",name:"Lesão renal aguda pré-renal",category:"clm",clues:[
 {type:"epidemiologia",text:"Causa mais comum de lesão renal aguda em pacientes hospitalizados, potencialmente reversível."},
 {type:"fatores_risco",text:"Desidratação, uso de diuréticos, IECA/BRA associados a AINE (tríade nefrotóxica)."},
 {type:"antecedentes",text:"Diarreia importante nos últimos dias, uso contínuo de losartana e ibuprofeno."},
 {type:"queixa",text:"Redução do volume urinário e tontura postural."},
 {type:"sintomas",text:"Hipotensão, mucosas secas, turgor cutâneo diminuído."},
 {type:"lab",text:"Ureia/creatinina elevadas com relação ureia/creatinina >40, fração de excreção de sódio <1%."},
 {type:"imagem",text:"[espaço para imagem: USG renal geralmente sem alterações estruturais]"},
 {type:"charada",text:"FeNa <1% + sedimento urinário benigno + melhora após reposição volêmica = pré-renal, sem necrose tubular estabelecida."}
]},
{id:"c24",name:"Necrose tubular aguda",category:"clm",clues:[
 {type:"epidemiologia",text:"Principal causa de lesão renal aguda intrínseca em ambiente hospitalar, especialmente em UTI."},
 {type:"fatores_risco",text:"Hipotensão prolongada, uso de contraste iodado, aminoglicosídeos, rabdomiólise."},
 {type:"antecedentes",text:"Cirurgia de grande porte recente com período de hipotensão intraoperatória."},
 {type:"queixa",text:"Oligúria persistente apesar de reposição volêmica adequada."},
 {type:"sintomas",text:"Sinais de sobrecarga volêmica podem surgir com a progressão do quadro."},
 {type:"lab",text:"FeNa >2%, cilindros granulosos 'em lama marrom' (muddy brown casts) no sedimento urinário."},
 {type:"imagem",text:"[espaço para imagem: USG renal geralmente normal, usado principalmente para excluir causa obstrutiva]"},
 {type:"charada",text:"Cilindros granulosos pigmentados + FeNa elevada + não responde a volume = necrose tubular aguda estabelecida."}
]},
{id:"c25",name:"Síndrome nefrótica",category:"clm",clues:[
 {type:"epidemiologia",text:"Em adultos, a causa mais comum é a glomeruloesclerose segmentar e focal; em crianças, doença de lesões mínimas."},
 {type:"fatores_risco",text:"Diabetes mellitus de longa data (nefropatia diabética) é causa importante em adultos."},
 {type:"antecedentes",text:"Diabético tipo 2 há 15 anos, controle glicêmico inadequado."},
 {type:"queixa",text:"Edema periorbitário matinal, progressivo, depois generalizado."},
 {type:"sintomas",text:"Anasarca, espuma na urina relatada pelo paciente."},
 {type:"lab",text:"Proteinúria maciça (>3,5g/24h), hipoalbuminemia, hiperlipidemia."},
 {type:"imagem",text:"[espaço para imagem: USG renal e considerar biópsia renal para definição etiológica]"},
 {type:"charada",text:"Proteinúria nefrótica + hipoalbuminemia + edema + hiperlipidemia = tétrade clássica da síndrome nefrótica."}
]},
{id:"c26",name:"Carcinoma de células renais",category:"clm",clues:[
 {type:"epidemiologia",text:"Neoplasia renal maligna mais comum no adulto, pico de incidência entre 60-70 anos."},
 {type:"fatores_risco",text:"Tabagismo, obesidade, hipertensão, doença renal cística adquirida em pacientes dialíticos."},
 {type:"antecedentes",text:"Achado incidental em exame de imagem realizado por outro motivo."},
 {type:"queixa",text:"Frequentemente assintomático; quando sintomático, hematúria indolor."},
 {type:"sintomas",text:"Tríade clássica (dor lombar, massa palpável, hematúria) presente em minoria dos casos, geralmente doença avançada."},
 {type:"lab",text:"Policitemia pode ocorrer por produção ectópica de eritropoetina."},
 {type:"imagem",text:"[espaço para imagem: TC com lesão renal cística complexa — classificar pela classificação de Bosniak]"},
 {type:"charada",text:"Lesão cística Bosniak IV (componente sólido captante de contraste) = alto risco de malignidade, indicação cirúrgica."}
]},
{id:"c27",name:"Neuralgia do trigêmeo",category:"dor",clues:[
 {type:"epidemiologia",text:"Mais comum em mulheres acima dos 50 anos; causa mais frequente de dor facial neuropática."},
 {type:"fatores_risco",text:"Compressão vascular do nervo trigêmeo na fossa posterior; esclerose múltipla em pacientes mais jovens."},
 {type:"antecedentes",text:"Sem antecedentes relevantes de trauma facial ou odontológico recente."},
 {type:"queixa",text:"Dor facial em choque elétrico, unilateral, de curtíssima duração."},
 {type:"sintomas",text:"Zonas de gatilho na face que desencadeiam a dor ao toque leve, mastigação ou barbear."},
 {type:"lab",text:"Exames laboratoriais não contribuem para o diagnóstico, que é clínico."},
 {type:"imagem",text:"[espaço para imagem: RM de crânio para excluir causa secundária e avaliar compressão vascular]"},
 {type:"charada",text:"Dor paroxística em choque, unilateral, restrita a território do V par, com zona de gatilho = neuralgia do trigêmeo clássica."}
]},
{id:"c28",name:"Síndrome complexa de dor regional (SDRC)",category:"dor",clues:[
 {type:"epidemiologia",text:"Mais comum em membros superiores, geralmente após trauma ou cirurgia, predomínio no sexo feminino."},
 {type:"fatores_risco",text:"Imobilização prolongada, fratura de punho, cirurgia ortopédica prévia no membro afetado."},
 {type:"antecedentes",text:"Fratura de rádio distal há 2 meses, com imobilização prolongada."},
 {type:"queixa",text:"Dor desproporcional ao trauma inicial, persistente após a lesão já ter cicatrizado."},
 {type:"sintomas",text:"Alterações tróficas: pele brilhante, alteração de temperatura e cor, edema, hipersensibilidade ao toque (alodinia)."},
 {type:"lab",text:"Exames laboratoriais geralmente normais; diagnóstico é clínico (critérios de Budapeste)."},
 {type:"imagem",text:"[espaço para imagem: cintilografia óssea trifásica ou RX com desmineralização em mosqueado]"},
 {type:"charada",text:"Dor desproporcional + alterações autonômicas/tróficas + alodinia após trauma = SDRC, critérios de Budapeste fecham diagnóstico."}
]},
{id:"c29",name:"Neuralgia pós-herpética",category:"dor",clues:[
 {type:"epidemiologia",text:"Complicação mais comum do herpes zoster, mais frequente em idosos."},
 {type:"fatores_risco",text:"Idade avançada, imunossupressão, dor intensa na fase aguda do zoster."},
 {type:"antecedentes",text:"Episódio de herpes zoster torácico há 3 meses, lesões já cicatrizadas."},
 {type:"queixa",text:"Dor em queimação persistente no dermátomo previamente acometido pelas vesículas."},
 {type:"sintomas",text:"Alodinia mecânica na área afetada, sem lesões cutâneas ativas."},
 {type:"lab",text:"Sem correlato laboratorial específico; diagnóstico clínico baseado em história de zoster prévio."},
 {type:"imagem",text:"[espaço para imagem: geralmente dispensável, diagnóstico é clínico]"},
 {type:"charada",text:"Dor neuropática em dermátomo >3 meses após resolução das lesões vesiculares = neuralgia pós-herpética."}
]},
{id:"c30",name:"Estenose espinhal lombar",category:"dor",clues:[
 {type:"epidemiologia",text:"Causa comum de dor lombar e claudicação neurogênica em idosos."},
 {type:"fatores_risco",text:"Espondilose degenerativa, hérnias discais múltiplas, espondilolistese."},
 {type:"antecedentes",text:"Dor lombar crônica de longa data, com piora progressiva da capacidade de caminhar."},
 {type:"queixa",text:"Dor e dormência em membros inferiores que piora ao caminhar e melhora ao sentar ou inclinar-se para frente."},
 {type:"sintomas",text:"Claudicação neurogênica — sintomas aliviados na flexão da coluna (posição de 'carrinho de supermercado')."},
 {type:"lab",text:"Sem correlato laboratorial específico."},
 {type:"imagem",text:"[espaço para imagem: RM de coluna lombar com redução do canal vertebral e compressão do saco tecal]"},
 {type:"charada",text:"Melhora da dor em flexão + piora em extensão/caminhada = claudicação neurogênica, típica de estenose de canal."}
]},
{id:"c31",name:"Fibromialgia",category:"dor",clues:[
 {type:"epidemiologia",text:"Síndrome de dor crônica generalizada, predomínio marcante no sexo feminino."},
 {type:"fatores_risco",text:"Estresse crônico, distúrbios do sono, história de trauma físico ou emocional."},
 {type:"antecedentes",text:"Fadiga crônica e distúrbio do sono de longa data, sem doença reumatológica definida."},
 {type:"queixa",text:"Dor difusa generalizada há mais de 3 meses, associada a fadiga importante."},
 {type:"sintomas",text:"Múltiplos pontos dolorosos à palpação, sono não reparador, dificuldade de concentração ('fibro fog')."},
 {type:"lab",text:"Exames laboratoriais e provas inflamatórias tipicamente normais — diagnóstico de exclusão."},
 {type:"imagem",text:"[espaço para imagem: geralmente não contribui, usada para excluir diferenciais reumatológicos]"},
 {type:"charada",text:"Dor difusa >3 meses + provas inflamatórias normais + múltiplos tender points = fibromialgia, sem substrato inflamatório objetivo."}
]},
{id:"c32",name:"Pancreatite aguda biliar",category:"cir",clues:[
 {type:"epidemiologia",text:"Causa mais comum de pancreatite aguda junto com a etiologia alcoólica."},
 {type:"fatores_risco",text:"Colelitíase conhecida, obesidade, sexo feminino."},
 {type:"antecedentes",text:"Colelitíase assintomática identificada em USG prévio."},
 {type:"queixa",text:"Dor abdominal intensa em faixa, irradiando para o dorso, após refeição gordurosa."},
 {type:"sintomas",text:"Náuseas, vômitos, dor à palpação de epigástrio, sinais de Cullen/Grey-Turner em casos graves."},
 {type:"lab",text:"Amilase e lipase elevadas (lipase mais específica), acima de 3x o limite superior da normalidade."},
 {type:"imagem",text:"[espaço para imagem: TC de abdome com contraste mostrando edema/necrose pancreática, ou USG evidenciando colelitíase]"},
 {type:"charada",text:"Dor em faixa + lipase >3x LSN + colelitíase à USG = pancreatite aguda biliar, avaliar critérios de gravidade (Ranson/BISAP)."}
]},
{id:"c33",name:"Hemorragia digestiva alta varicosa",category:"clm",clues:[
 {type:"epidemiologia",text:"Complicação grave da hipertensão portal, principal causa de HDA em pacientes cirróticos."},
 {type:"fatores_risco",text:"Cirrose hepática de qualquer etiologia, hipertensão portal, varizes esofágicas conhecidas."},
 {type:"antecedentes",text:"Cirrose por etilismo crônico, sem uso regular de betabloqueador não seletivo."},
 {type:"queixa",text:"Hematêmese volumosa associada a melena."},
 {type:"sintomas",text:"Sinais de hepatopatia crônica (icterícia, ascite, aranhas vasculares), instabilidade hemodinâmica."},
 {type:"lab",text:"Queda importante de hemoglobina, plaquetopenia e coagulopatia associadas à hepatopatia."},
 {type:"imagem",text:"[espaço para imagem: endoscopia digestiva alta evidenciando varizes esofágicas sangrantes]"},
 {type:"charada",text:"Hematêmese + estigmas de hepatopatia crônica + varizes à EDA = HDA varicosa, terlipressina/octreotide + ligadura elástica."}
]},
{id:"c34",name:"Torção testicular",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência urológica mais comum em adolescentes, com pico bimodal (neonatal e puberdade)."},
 {type:"fatores_risco",text:"Anomalia de fixação testicular ('deformidade em badalo de sino')."},
 {type:"antecedentes",text:"Episódios prévios de dor testicular autolimitada (torção intermitente)."},
 {type:"queixa",text:"Dor testicular súbita e intensa, unilateral, associada a náuseas e vômitos."},
 {type:"sintomas",text:"Testículo elevado e horizontalizado, reflexo cremastérico ausente."},
 {type:"lab",text:"Exames laboratoriais não auxiliam no diagnóstico — o tempo é essencial."},
 {type:"imagem",text:"[espaço para imagem: USG doppler testicular com ausência de fluxo sanguíneo ao testículo afetado]"},
 {type:"charada",text:"Dor testicular aguda + ausência de reflexo cremastérico + doppler sem fluxo = torção, exploração cirúrgica não deve esperar imagem se suspeita alta."}
]},
{id:"c35",name:"Diverticulite aguda",category:"cir",clues:[
 {type:"epidemiologia",text:"Complicação mais comum da doença diverticular, mais frequente no cólon sigmoide."},
 {type:"fatores_risco",text:"Dieta pobre em fibras, obesidade, sedentarismo, idade avançada."},
 {type:"antecedentes",text:"Episódios prévios de dor em fossa ilíaca esquerda, resolvidos sem investigação."},
 {type:"queixa",text:"Dor em fossa ilíaca esquerda associada a febre e alteração do hábito intestinal."},
 {type:"sintomas",text:"Dor à palpação em quadrante inferior esquerdo, possível massa palpável em casos complicados."},
 {type:"lab",text:"Leucocitose com desvio à esquerda."},
 {type:"imagem",text:"[espaço para imagem: TC de abdome com espessamento de parede do sigmoide e borramento da gordura pericólica]"},
 {type:"charada",text:"Dor em FIE + febre + TC com divertículos inflamados e borramento pericólico = diverticulite, classificar gravidade por Hinchey se houver complicação."}
]},
{id:"c36",name:"Gravidez ectópica rota",category:"go",clues:[
 {type:"epidemiologia",text:"Principal causa de morte materna no primeiro trimestre quando não diagnosticada a tempo."},
 {type:"fatores_risco",text:"Doença inflamatória pélvica prévia, cirurgia tubária, uso de DIU, fertilização in vitro."},
 {type:"antecedentes",text:"Atraso menstrual de 6 semanas, teste de gravidez positivo, sem pré-natal iniciado."},
 {type:"queixa",text:"Dor abdominal súbita e intensa em fossa ilíaca, associada a sangramento vaginal escasso."},
 {type:"sintomas",text:"Sinais de irritação peritoneal, hipotensão e taquicardia por hemoperitônio."},
 {type:"lab",text:"Beta-hCG positivo, porém com curva de crescimento inadequada para a idade gestacional esperada."},
 {type:"imagem",text:"[espaço para imagem: USG transvaginal sem saco gestacional intrauterino, com líquido livre em fundo de saco]"},
 {type:"charada",text:"Beta-hCG positivo + útero vazio à USG + líquido livre abundante = gravidez ectópica rota, indicação cirúrgica de urgência."}
]},
{id:"c37",name:"Doença de Kawasaki",category:"ped",clues:[
 {type:"epidemiologia",text:"Vasculite aguda mais comum em crianças, principal causa de cardiopatia adquirida na infância em países desenvolvidos."},
 {type:"fatores_risco",text:"Mais comum em crianças menores de 5 anos, maior incidência na população asiática."},
 {type:"antecedentes",text:"Sem antecedentes relevantes, criança previamente hígida."},
 {type:"queixa",text:"Febre alta persistente há mais de 5 dias, refratária a antitérmicos."},
 {type:"sintomas",text:"Conjuntivite não exsudativa, exantema polimorfo, língua em framboesa, edema de extremidades, adenopatia cervical."},
 {type:"lab",text:"Elevação de provas inflamatórias (PCR/VHS), plaquetose que surge geralmente na segunda semana."},
 {type:"imagem",text:"[espaço para imagem: ecocardiograma avaliando aneurismas de coronárias]"},
 {type:"charada",text:"Febre ≥5 dias + pelo menos 4 dos 5 critérios clínicos = Kawasaki, imunoglobulina IV nos primeiros 10 dias reduz risco de aneurisma coronariano."}
]},
{id:"c38",name:"Tamponamento cardíaco",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência cardiovascular que pode evoluir rapidamente para choque obstrutivo e óbito."},
 {type:"fatores_risco",text:"Neoplasia com derrame pericárdico maligno, pericardite, trauma torácico penetrante."},
 {type:"antecedentes",text:"Paciente oncológico com derrame pericárdico já conhecido em investigação."},
 {type:"queixa",text:"Dispneia progressiva e sensação de peso no peito."},
 {type:"sintomas",text:"Tríade de Beck: hipotensão, turgência jugular e bulhas abafadas; pulso paradoxal presente."},
 {type:"lab",text:"BNP pode estar elevado, mas o diagnóstico é essencialmente clínico e ecocardiográfico."},
 {type:"imagem",text:"[espaço para imagem: ecocardiograma com derrame pericárdico volumoso e colapso diastólico de VD]"},
 {type:"charada",text:"Pulso paradoxal >10mmHg + colapso de câmaras direitas ao eco = indicação de pericardiocentese de urgência."}
]},
{id:"c39",name:"Dissecção aórtica aguda",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência vascular catastrófica, mortalidade aumenta a cada hora sem tratamento."},
 {type:"fatores_risco",text:"Hipertensão mal controlada, doenças do tecido conjuntivo (Marfan), uso de cocaína."},
 {type:"antecedentes",text:"Hipertenso de longa data, em uso irregular de anti-hipertensivos."},
 {type:"queixa",text:"Dor torácica súbita, lancinante, 'em rasgão', irradiando para o dorso."},
 {type:"sintomas",text:"Assimetria de pulsos e de PA entre os membros superiores."},
 {type:"lab",text:"D-dímero elevado (baixo valor preditivo negativo isolado nessa suspeita)."},
 {type:"imagem",text:"[espaço para imagem: angioTC de aorta com flap de dissecção visível]"},
 {type:"charada",text:"Dor 'em rasgão' migratória + assimetria de pulsos + alargamento de mediastino no RX = dissecção até prova em contrário."}
]},
{id:"c40",name:"Fibrilação atrial com resposta ventricular rápida",category:"clm",clues:[
 {type:"epidemiologia",text:"Arritmia sustentada mais comum na prática clínica, prevalência cresce muito com a idade."},
 {type:"fatores_risco",text:"Hipertensão, hipertireoidismo, valvopatia mitral, etilismo agudo ('holiday heart')."},
 {type:"antecedentes",text:"Hipertenso de longa data, ingestão alcoólica excessiva no fim de semana."},
 {type:"queixa",text:"Palpitações irregulares associadas a mal-estar e dispneia leve."},
 {type:"sintomas",text:"Pulso irregularmente irregular, com déficit de pulso à ausculta cardíaca."},
 {type:"lab",text:"TSH deve sempre ser solicitado para investigar hipertireoidismo como causa."},
 {type:"imagem",text:"[espaço para imagem: ECG sem onda P identificável, intervalos RR irregulares]"},
 {type:"charada",text:"Ausência de onda P + RR irregularmente irregular = FA; sempre calcular CHA2DS2-VASc antes de decidir sobre anticoagulação."}
]},
{id:"c41",name:"Bloqueio atrioventricular total (BAVT)",category:"psa",clues:[
 {type:"epidemiologia",text:"Distúrbio de condução grave, mais comum em idosos por doença degenerativa do sistema de condução."},
 {type:"fatores_risco",text:"Uso de betabloqueador ou bloqueador de canal de cálcio em doses excessivas, IAM de parede inferior."},
 {type:"antecedentes",text:"Idoso em uso de múltiplos anti-hipertensivos, episódios recentes de tontura."},
 {type:"queixa",text:"Síncope súbita, sem pródromos, com recuperação espontânea da consciência."},
 {type:"sintomas",text:"Bradicardia importante, fadiga e intolerância a esforços."},
 {type:"lab",text:"Eletrólitos (principalmente potássio) devem ser avaliados como causa reversível."},
 {type:"imagem",text:"[espaço para imagem: ECG com dissociação completa entre ondas P e complexos QRS]"},
 {type:"charada",text:"Ondas P 'marchando' no seu próprio ritmo, sem relação com o QRS = BAVT, indicação de marcapasso definitivo."}
]},
{id:"c42",name:"Torsades de pointes / síndrome do QT longo",category:"psa",clues:[
 {type:"epidemiologia",text:"Arritmia ventricular potencialmente fatal, pode ser congênita ou adquirida."},
 {type:"fatores_risco",text:"Uso de medicamentos que prolongam QT (antiarrítmicos, alguns antibióticos, antipsicóticos), distúrbios eletrolíticos."},
 {type:"antecedentes",text:"Em uso de múltiplos medicamentos que prolongam o intervalo QT, hipomagnesemia recente."},
 {type:"queixa",text:"Palpitações seguidas de síncope súbita ou quase-síncope."},
 {type:"sintomas",text:"Durante o episódio, pulso rápido e irregular, pode evoluir para parada cardíaca."},
 {type:"lab",text:"Hipocalemia e hipomagnesemia frequentemente associadas, favorecendo o gatilho."},
 {type:"imagem",text:"[espaço para imagem: ECG com QRS de amplitude e eixo que 'giram' em torno da linha de base]"},
 {type:"charada",text:"QT longo prévio + arritmia com morfologia 'em torção' = torsades; tratamento agudo é sulfato de magnésio IV."}
]},
{id:"c43",name:"Taquicardia ventricular monomórfica sustentada",category:"psa",clues:[
 {type:"epidemiologia",text:"Arritmia ventricular grave, principal causa é doença cardíaca estrutural prévia."},
 {type:"fatores_risco",text:"Infarto do miocárdio prévio com cicatriz, cardiomiopatia dilatada."},
 {type:"antecedentes",text:"IAM prévio há 2 anos, com disfunção ventricular residual conhecida."},
 {type:"queixa",text:"Palpitações intensas de início súbito, associadas a tontura."},
 {type:"sintomas",text:"Pode cursar com instabilidade hemodinâmica dependendo da frequência e função ventricular de base."},
 {type:"lab",text:"Eletrólitos e função renal avaliados para excluir causas reversíveis."},
 {type:"imagem",text:"[espaço para imagem: ECG com QRS alargado, complexos monomórficos, dissociação AV ocasional]"},
 {type:"charada",text:"QRS largo e regular, com dissociação AV ou complexos de fusão = TV até prova em contrário; se instável, cardioversão elétrica imediata."}
]},
{id:"c44",name:"Síndrome de compressão medular metastática",category:"clm",clues:[
 {type:"epidemiologia",text:"Emergência oncológica que exige diagnóstico e tratamento em poucas horas para evitar déficit permanente."},
 {type:"fatores_risco",text:"Neoplasias com alto potencial de metástase óssea: mama, próstata, pulmão, mieloma."},
 {type:"antecedentes",text:"Paciente com câncer de próstata metastático em acompanhamento oncológico."},
 {type:"queixa",text:"Dor lombar progressiva, pior à noite e ao deitar, associada a fraqueza nas pernas."},
 {type:"sintomas",text:"Nível sensitivo definido no exame neurológico, hiperreflexia abaixo da lesão, retenção urinária."},
 {type:"lab",text:"Cálcio pode estar elevado se houver doença óssea metastática extensa associada."},
 {type:"imagem",text:"[espaço para imagem: RM de coluna com lesão metastática comprimindo o saco tecal]"},
 {type:"charada",text:"Dor + nível sensitivo + disfunção esfincteriana em paciente oncológico = corticoide em altas doses imediato + RM de urgência."}
]},
{id:"c45",name:"Síndrome de lise tumoral",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência oncológica metabólica, mais comum após início de quimioterapia em tumores de alta carga celular."},
 {type:"fatores_risco",text:"Linfomas de alto grau e leucemias agudas com massa tumoral volumosa."},
 {type:"antecedentes",text:"Iniciou quimioterapia para linfoma de Burkitt há 48 horas."},
 {type:"queixa",text:"Náuseas, cãibras musculares e diminuição do volume urinário."},
 {type:"sintomas",text:"Pode evoluir com arritmias cardíacas por distúrbio eletrolítico grave."},
 {type:"lab",text:"Hipercalemia, hiperfosfatemia, hiperuricemia e hipocalcemia — lise maciça de células tumorais."},
 {type:"imagem",text:"[espaço para imagem: ECG mostrando alterações de hipercalemia — ondas T apiculadas]"},
 {type:"charada",text:"Tétrade K↑, P↑, ácido úrico↑, Ca↓ após quimioterapia = lise tumoral, prevenção é com hidratação e rasburicase antes do tratamento."}
]},
{id:"c46",name:"Síndrome do túnel do carpo",category:"dor",clues:[
 {type:"epidemiologia",text:"Neuropatia compressiva periférica mais comum, mais prevalente em mulheres de meia-idade."},
 {type:"fatores_risco",text:"Movimentos repetitivos, gestação, hipotireoidismo, diabetes."},
 {type:"antecedentes",text:"Trabalho que exige digitação intensa e repetitiva há anos."},
 {type:"queixa",text:"Dormência e formigamento em polegar, indicador e médio, pior à noite."},
 {type:"sintomas",text:"Sinal de Tinel e sinal de Phalen positivos; fraqueza da preensão em casos avançados."},
 {type:"lab",text:"Eletroneuromiografia confirma redução da velocidade de condução do nervo mediano."},
 {type:"imagem",text:"[espaço para imagem: USG de punho mostrando espessamento do nervo mediano no túnel do carpo]"},
 {type:"charada",text:"Poupa o 5º dedo (território do nervo ulnar) — distribuição sensitiva fecha o diagnóstico de compressão do mediano."}
]},
{id:"c47",name:"Crise convulsiva febril",category:"ped",clues:[
 {type:"epidemiologia",text:"Tipo mais comum de convulsão na infância, ocorre entre 6 meses e 5 anos."},
 {type:"fatores_risco",text:"História familiar de convulsão febril, elevação rápida da temperatura corporal."},
 {type:"antecedentes",text:"Criança previamente hígida, sem história de epilepsia."},
 {type:"queixa",text:"Episódio de convulsão associado a febre alta de início recente."},
 {type:"sintomas",text:"Crise tônico-clônica generalizada, com duração menor que 15 minutos, recuperação completa da consciência depois."},
 {type:"lab",text:"Investigação direcionada à causa da febre — exames neurológicos específicos não são rotineiros na crise simples."},
 {type:"imagem",text:"[espaço para imagem: não indicada de rotina na convulsão febril simples]"},
 {type:"charada",text:"Crise única, generalizada, <15min, sem recorrência em 24h = convulsão febril simples, não precisa de EEG nem investigação de imagem de rotina."}
]},
{id:"c48",name:"Estenose hipertrófica do piloro",category:"ped",clues:[
 {type:"epidemiologia",text:"Causa cirúrgica mais comum de vômitos em lactentes, mais frequente em meninos primogênitos."},
 {type:"fatores_risco",text:"História familiar positiva, uso de certos antibióticos macrolídeos no período neonatal."},
 {type:"antecedentes",text:"Lactente de 4 semanas, nascido a termo, ganho de peso inadequado nas últimas semanas."},
 {type:"queixa",text:"Vômitos em jato, não biliosos, logo após as mamadas, progressivamente mais frequentes."},
 {type:"sintomas",text:"Oliva pilórica palpável em epigástrio, ondas peristálticas visíveis no abdome."},
 {type:"lab",text:"Alcalose metabólica hipoclorêmica e hipocalêmica, por perda de ácido clorídrico nos vômitos."},
 {type:"imagem",text:"[espaço para imagem: USG abdominal com espessamento e alongamento do piloro]"},
 {type:"charada",text:"Vômitos em jato não biliosos + alcalose hipoclorêmica + oliva palpável = piloromiotomia é o tratamento definitivo."}
]},
{id:"c49",name:"Nefrolitíase / cólica renal",category:"cir",clues:[
 {type:"epidemiologia",text:"Condição muito comum, com pico de incidência entre 30-50 anos, mais frequente em homens."},
 {type:"fatores_risco",text:"Baixa ingesta hídrica, dieta rica em sódio e proteína animal, história familiar."},
 {type:"antecedentes",text:"Episódios prévios semelhantes, sem investigação metabólica completa."},
 {type:"queixa",text:"Dor lombar em cólica, de forte intensidade, irradiando para a região inguinal."},
 {type:"sintomas",text:"Paciente agitado, sem posição de conforto, náuseas associadas, hematúria microscópica."},
 {type:"lab",text:"Sumário de urina com hematúria; função renal deve ser avaliada, principalmente se rim único ou bilateral."},
 {type:"imagem",text:"[espaço para imagem: TC de abdome sem contraste mostrando cálculo em topografia ureteral]"},
 {type:"charada",text:"Dor em cólica + hematúria + cálculo <5mm no ureter distal = manejo conservador com analgesia costuma ser suficiente."}
]},
{id:"c50",name:"Pielonefrite aguda",category:"clm",clues:[
 {type:"epidemiologia",text:"Infecção do trato urinário alto, mais comum em mulheres jovens sexualmente ativas."},
 {type:"fatores_risco",text:"ITU de repetição, gestação, anormalidades anatômicas do trato urinário, diabetes."},
 {type:"antecedentes",text:"Episódio de cistite há poucos dias, tratado de forma incompleta."},
 {type:"queixa",text:"Febre alta com calafrios, dor lombar unilateral, disúria associada."},
 {type:"sintomas",text:"Punho-percussão lombar (Giordano) positiva do lado acometido."},
 {type:"lab",text:"Leucocitúria, nitrito positivo, leucocitose com desvio à esquerda."},
 {type:"imagem",text:"[espaço para imagem: USG de rins e vias urinárias para excluir obstrução/abscesso]"},
 {type:"charada",text:"Febre + Giordano positivo + leucocitúria = pielonefrite; sempre avaliar sinais de sepse e necessidade de internação."}
]},
{id:"c51",name:"Cefaleia em salvas",category:"dor",clues:[
 {type:"epidemiologia",text:"Uma das cefaleias primárias mais incapacitantes, mais comum em homens."},
 {type:"fatores_risco",text:"Tabagismo, uso de álcool durante os períodos de crise, ritmo circadiano alterado."},
 {type:"antecedentes",text:"Episódios em 'salvas' que se repetem na mesma época do ano, com períodos de remissão."},
 {type:"queixa",text:"Dor periorbitária unilateral, de intensidade excruciante, com duração de 15 a 180 minutos."},
 {type:"sintomas",text:"Lacrimejamento, congestão nasal e ptose/miose ipsilaterais durante a crise (sinais autonômicos)."},
 {type:"lab",text:"Exames laboratoriais normais — diagnóstico é clínico."},
 {type:"imagem",text:"[espaço para imagem: RM de crânio normal, usada para excluir causas secundárias]"},
 {type:"charada",text:"Dor unilateral periorbitária excruciante + sinais autonômicos ipsilaterais + padrão em salvas = oxigênio a 100% é primeira linha na crise aguda."}
]},
{id:"c52",name:"Enxaqueca com aura",category:"dor",clues:[
 {type:"epidemiologia",text:"Cefaleia primária muito prevalente, três vezes mais comum em mulheres."},
 {type:"fatores_risco",text:"História familiar positiva, uso de anticoncepcional oral, jejum prolongado, privação de sono."},
 {type:"antecedentes",text:"Crises recorrentes desde a adolescência, piora perimenstrual."},
 {type:"queixa",text:"Cefaleia pulsátil unilateral, precedida por alterações visuais (escotomas cintilantes)."},
 {type:"sintomas",text:"Fotofobia, fonofobia e náuseas associadas; aura dura entre 5 e 60 minutos antes da dor."},
 {type:"lab",text:"Exames laboratoriais normais — diagnóstico é clínico."},
 {type:"imagem",text:"[espaço para imagem: RM de crânio normal, reservada para sinais de alarme]"},
 {type:"charada",text:"Aura visual totalmente reversível seguida de cefaleia pulsátil unilateral = enxaqueca com aura; triptanos são primeira linha na crise."}
]},
{id:"c53",name:"Síndrome da dor miofascial",category:"dor",clues:[
 {type:"epidemiologia",text:"Uma das causas mais comuns de dor musculoesquelética regional atendida em ambulatórios de dor."},
 {type:"fatores_risco",text:"Postura inadequada prolongada, sobrecarga muscular repetitiva, estresse."},
 {type:"antecedentes",text:"Trabalho com postura fixa prolongada, sem trauma associado."},
 {type:"queixa",text:"Dor muscular regional, com pontos específicos que reproduzem dor referida à palpação."},
 {type:"sintomas",text:"Presença de 'pontos-gatilho' (trigger points) palpáveis, com banda tensa muscular."},
 {type:"lab",text:"Provas inflamatórias normais — diferencia de causas inflamatórias sistêmicas."},
 {type:"imagem",text:"[espaço para imagem: sem alteração estrutural esperada nos exames de imagem convencionais]"},
 {type:"charada",text:"Ponto-gatilho que reproduz dor referida característica à palpação = dor miofascial; agulhamento seco é uma opção terapêutica."}
]},
{id:"c54",name:"Neuropatia diabética periférica dolorosa",category:"dor",clues:[
 {type:"epidemiologia",text:"Complicação crônica mais comum do diabetes mellitus de longa duração."},
 {type:"fatores_risco",text:"Diabetes mal controlado por muitos anos, neuropatia relacionada ao tempo de doença."},
 {type:"antecedentes",text:"Diabético tipo 2 há mais de 10 anos, controle glicêmico inadequado."},
 {type:"queixa",text:"Dor em queimação e formigamento em extremidades, em padrão 'em bota e luva'."},
 {type:"sintomas",text:"Piora noturna característica, perda de sensibilidade vibratória e ao monofilamento."},
 {type:"lab",text:"Hemoglobina glicada elevada, refletindo controle glicêmico inadequado ao longo do tempo."},
 {type:"imagem",text:"[espaço para imagem: eletroneuromiografia mostrando padrão de polineuropatia sensitivo-motora]"},
 {type:"charada",text:"Dor simétrica distal 'em bota e luva' em diabético de longa data = neuropatia diabética; duloxetina e pregabalina são primeira linha."}
]},
{id:"c55",name:"Hemorragia subaracnóidea",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência neurológica grave, principal causa é ruptura de aneurisma cerebral."},
 {type:"fatores_risco",text:"Hipertensão não controlada, tabagismo, doença renal policística, história familiar de aneurisma."},
 {type:"antecedentes",text:"Hipertensa, sem outras comorbidades relevantes conhecidas."},
 {type:"queixa",text:"Cefaleia súbita e intensa, descrita como 'a pior dor de cabeça da vida' (thunderclap)."},
 {type:"sintomas",text:"Rigidez de nuca, náuseas e vômitos, possível rebaixamento do nível de consciência."},
 {type:"lab",text:"Se a TC for normal e a suspeita persistir, punção lombar pode mostrar xantocromia."},
 {type:"imagem",text:"[espaço para imagem: TC de crânio sem contraste mostrando sangue nos espaços subaracnóideos]"},
 {type:"charada",text:"Cefaleia thunderclap + sangue nas cisternas basais na TC = HSA; angiografia deve localizar o aneurisma para tratamento urgente."}
]},
{id:"c56",name:"Crise asmática grave",category:"psa",clues:[
 {type:"epidemiologia",text:"Doença respiratória crônica muito prevalente, com exacerbações que podem ser fatais se mal manejadas."},
 {type:"fatores_risco",text:"Exposição a alérgenos, infecção viral respiratória, má aderência ao tratamento de manutenção."},
 {type:"antecedentes",text:"Asmática conhecida, uso irregular do corticoide inalatório de manutenção."},
 {type:"queixa",text:"Dispneia progressiva e sibilância que não melhora com o broncodilatador de resgate habitual."},
 {type:"sintomas",text:"Uso de musculatura acessória, frases entrecortadas, tórax silencioso em casos extremos (sinal de gravidade)."},
 {type:"lab",text:"Gasometria inicialmente com alcalose respiratória; normalização ou acidose respiratória indica fadiga muscular e gravidade extrema."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax para excluir pneumotórax ou pneumonia associada]"},
 {type:"charada",text:"Tórax silencioso + PaCO2 normalizando (não mais baixa) = sinal de exaustão respiratória iminente, indicação de suporte ventilatório."}
]},
{id:"c57",name:"Endocardite infecciosa",category:"clm",clues:[
 {type:"epidemiologia",text:"Infecção grave do endocárdio, mortalidade elevada mesmo com tratamento adequado."},
 {type:"fatores_risco",text:"Uso de drogas endovenosas, próteses valvares, valvopatia estrutural prévia, procedimentos dentários recentes."},
 {type:"antecedentes",text:"Usuário de drogas injetáveis, episódios febris recorrentes nas últimas semanas."},
 {type:"queixa",text:"Febre persistente associada a mal-estar geral e perda de peso."},
 {type:"sintomas",text:"Sopro cardíaco novo, lesões de Janeway, nódulos de Osler, manchas de Roth ao exame de fundo de olho."},
 {type:"lab",text:"Hemoculturas seriadas positivas, provas inflamatórias elevadas."},
 {type:"imagem",text:"[espaço para imagem: ecocardiograma transesofágico mostrando vegetação valvar]"},
 {type:"charada",text:"Febre + hemoculturas positivas persistentes + vegetação valvar ao eco = critérios de Duke maiores fecham o diagnóstico de endocardite."}
]},
{id:"c58",name:"Dengue com sinais de alarme",category:"infecto",clues:[
 {type:"epidemiologia",text:"Arbovirose mais prevalente em áreas tropicais, com picos sazonais associados à proliferação do mosquito vetor."},
 {type:"fatores_risco",text:"Infecção prévia por sorotipo diferente aumenta o risco de forma grave (imunoamplificação)."},
 {type:"antecedentes",text:"Dengue há 2 anos por outro sorotipo, mora em área de alta incidência."},
 {type:"queixa",text:"Febre alta há 4 dias que caiu subitamente, associada a dor abdominal intensa."},
 {type:"sintomas",text:"Vômitos persistentes, sangramento de mucosas, letargia, hepatomegalia dolorosa."},
 {type:"lab",text:"Plaquetopenia importante, hemoconcentração (aumento do hematócrito)."},
 {type:"imagem",text:"[espaço para imagem: USG de abdome mostrando derrame cavitário/espessamento de parede vesicular]"},
 {type:"charada",text:"Queda da febre + sinais de alarme (dor abdominal, vômitos, hemoconcentração) = fase crítica, risco de extravasamento plasmático e choque."}
]},
{id:"c59",name:"Hepatite B aguda",category:"infecto",clues:[
 {type:"epidemiologia",text:"Uma das hepatites virais mais comuns no mundo, transmissão parenteral, sexual e vertical."},
 {type:"fatores_risco",text:"Múltiplos parceiros sexuais sem proteção, uso de drogas injetáveis, ausência de vacinação."},
 {type:"antecedentes",text:"Sem vacinação completa contra hepatite B, exposição sexual de risco há 2 meses."},
 {type:"queixa",text:"Fadiga, náuseas e icterícia progressiva."},
 {type:"sintomas",text:"Colúria, acolia fecal, hepatomegalia dolorosa à palpação."},
 {type:"lab",text:"Transaminases muito elevadas, HBsAg reagente, IgM anti-HBc reagente (infecção aguda)."},
 {type:"imagem",text:"[espaço para imagem: USG de abdome mostrando hepatomegalia difusa]"},
 {type:"charada",text:"HBsAg + IgM anti-HBc reagentes = infecção aguda; a maioria dos adultos resolve espontaneamente, minoria evolui para forma crônica."}
]},
{id:"c60",name:"Tuberculose pulmonar",category:"infecto",clues:[
 {type:"epidemiologia",text:"Principal causa infecciosa de morte no mundo antes da pandemia de COVID-19."},
 {type:"fatores_risco",text:"HIV positivo, desnutrição, imunossupressão, contato domiciliar com caso bacilífero."},
 {type:"antecedentes",text:"Contato próximo com familiar em tratamento para tuberculose há 3 meses."},
 {type:"queixa",text:"Tosse produtiva há mais de 3 semanas, associada a febre vespertina e sudorese noturna."},
 {type:"sintomas",text:"Emagrecimento significativo, inapetência, estertores em ápices pulmonares."},
 {type:"lab",text:"Baciloscopia de escarro positiva para BAAR."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax com cavitação em lobos superiores]"},
 {type:"charada",text:"Tosse >3 semanas + baciloscopia positiva + cavitação apical = tuberculose pulmonar, notificação compulsória e esquema RIPE."}
]},
{id:"c61",name:"Pneumonia por Pneumocystis jirovecii",category:"infecto",clues:[
 {type:"epidemiologia",text:"Infecção oportunista clássica em pacientes com imunossupressão avançada, principalmente HIV."},
 {type:"fatores_risco",text:"Contagem de CD4 abaixo de 200 células/mm³, ausência de profilaxia adequada."},
 {type:"antecedentes",text:"HIV positivo, não aderente ao tratamento antirretroviral, sem profilaxia com sulfametoxazol-trimetoprima."},
 {type:"queixa",text:"Tosse seca e dispneia progressiva ao longo de semanas."},
 {type:"sintomas",text:"Hipoxemia desproporcional aos achados de ausculta pulmonar (que costuma ser pobre)."},
 {type:"lab",text:"LDH sérica muito elevada; CD4 baixo confirmando imunossupressão."},
 {type:"imagem",text:"[espaço para imagem: TC de tórax com infiltrado em vidro fosco bilateral]"},
 {type:"charada",text:"Infiltrado em vidro fosco bilateral + LDH elevada + CD4 baixo em paciente HIV = tratamento é sulfametoxazol-trimetoprima em altas doses."}
]},
{id:"c62",name:"Leptospirose",category:"infecto",clues:[
 {type:"epidemiologia",text:"Zoonose bacteriana com picos após períodos de enchentes em áreas urbanas."},
 {type:"fatores_risco",text:"Contato com água ou lama contaminada por urina de roedores durante enchentes."},
 {type:"antecedentes",text:"Exposição a área alagada há 10 dias durante limpeza pós-enchente."},
 {type:"queixa",text:"Febre alta de início súbito, mialgia intensa (principalmente em panturrilhas), cefaleia."},
 {type:"sintomas",text:"Icterícia rubínica (avermelhada), sufusão conjuntival, oligúria em casos graves."},
 {type:"lab",text:"Elevação de bilirrubinas e CPK, leucocitose com desvio, função renal alterada."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax pode mostrar infiltrado hemorrágico em casos graves]"},
 {type:"charada",text:"Mialgia em panturrilhas + icterícia rubínica + sufusão conjuntival após exposição a enchente = síndrome de Weil, forma grave da leptospirose."}
]},
{id:"c63",name:"Artrite reumatoide",category:"clm",clues:[
 {type:"epidemiologia",text:"Doença autoimune articular mais comum, três vezes mais frequente em mulheres."},
 {type:"fatores_risco",text:"Tabagismo, história familiar, presença de outros marcadores genéticos de suscetibilidade."},
 {type:"antecedentes",text:"Rigidez matinal recorrente há meses, sem diagnóstico prévio estabelecido."},
 {type:"queixa",text:"Dor e edema em pequenas articulações das mãos, de forma simétrica."},
 {type:"sintomas",text:"Rigidez matinal com duração maior que 1 hora, desvio ulnar dos dedos em fases avançadas."},
 {type:"lab",text:"Fator reumatoide e anti-CCP positivos, PCR e VHS elevados."},
 {type:"imagem",text:"[espaço para imagem: RX de mãos com erosões periarticulares e redução do espaço articular]"},
 {type:"charada",text:"Poliartrite simétrica de pequenas articulações + anti-CCP positivo + rigidez matinal prolongada = artrite reumatoide, iniciar metotrexato precocemente."}
]},
{id:"c64",name:"Crise aguda de gota",category:"clm",clues:[
 {type:"epidemiologia",text:"Artropatia inflamatória mais comum em homens de meia-idade."},
 {type:"fatores_risco",text:"Obesidade, consumo excessivo de álcool e carnes vermelhas, uso de diuréticos tiazídicos."},
 {type:"antecedentes",text:"Episódios recorrentes de dor articular, ingesta de bebida alcoólica em festa recente."},
 {type:"queixa",text:"Dor articular de início súbito e intensa, geralmente na base do hálux."},
 {type:"sintomas",text:"Articulação quente, vermelha, edemaciada, extremamente dolorosa até ao toque leve do lençol."},
 {type:"lab",text:"Ácido úrico sérico elevado (pode estar normal na crise aguda)."},
 {type:"imagem",text:"[espaço para imagem: análise do líquido sinovial com cristais de urato monossódico birrefringência negativa]"},
 {type:"charada",text:"Monoartrite aguda do hálux + cristais de urato em forma de agulha birrefringência negativa = gota; colchicina ou AINE na crise, nunca iniciar alopurinol agora."}
]},
{id:"c65",name:"Espondilite anquilosante",category:"clm",clues:[
 {type:"epidemiologia",text:"Espondiloartrite mais comum, predominância marcante em homens jovens."},
 {type:"fatores_risco",text:"Presença do antígeno HLA-B27, história familiar de espondiloartrite."},
 {type:"antecedentes",text:"Dor lombar crônica iniciada antes dos 40 anos, sem história de trauma."},
 {type:"queixa",text:"Dor lombar inflamatória que piora com repouso e melhora com atividade física."},
 {type:"sintomas",text:"Rigidez matinal prolongada, redução da expansibilidade torácica, uveíte anterior recorrente."},
 {type:"lab",text:"HLA-B27 positivo, PCR e VHS elevados, fator reumatoide geralmente negativo."},
 {type:"imagem",text:"[espaço para imagem: RX de sacroilíacas com sacroileíte bilateral, coluna 'em bambu' em fases avançadas]"},
 {type:"charada",text:"Dor lombar inflamatória + HLA-B27 positivo + sacroileíte à imagem = espondilite anquilosante; exercício e anti-inflamatório são primeira linha."}
]},
{id:"c66",name:"Lúpus eritematoso sistêmico",category:"clm",clues:[
 {type:"epidemiologia",text:"Doença autoimune multissistêmica, muito mais comum em mulheres jovens em idade fértil."},
 {type:"fatores_risco",text:"Predisposição genética, exposição solar intensa, uso de certos medicamentos (lúpus induzido)."},
 {type:"antecedentes",text:"Fotossensibilidade recorrente, dois abortamentos de primeiro trimestre."},
 {type:"queixa",text:"Artralgia simétrica em mãos, fadiga e lesão cutânea facial que piora com o sol."},
 {type:"sintomas",text:"Rash malar poupando sulco nasolabial, úlceras orais indolores, serosite."},
 {type:"lab",text:"FAN positivo em altos títulos, anti-DNA e anti-Sm positivos, complemento (C3/C4) baixo."},
 {type:"imagem",text:"[espaço para imagem: biópsia renal mostrando glomerulonefrite proliferativa difusa, se houver nefrite lúpica]"},
 {type:"charada",text:"Rash malar + FAN e anti-DNA positivos + complemento baixo em mulher jovem = lúpus; sempre avaliar acometimento renal."}
]},
{id:"c67",name:"Hipotireoidismo",category:"clm",clues:[
 {type:"epidemiologia",text:"Distúrbio endócrino comum, muito mais frequente em mulheres, principal causa é autoimune."},
 {type:"fatores_risco",text:"Tireoidite de Hashimoto, história familiar de doença tireoidiana, radioterapia cervical prévia."},
 {type:"antecedentes",text:"História familiar de doença tireoidiana autoimune."},
 {type:"queixa",text:"Fadiga progressiva, ganho de peso e intolerância ao frio."},
 {type:"sintomas",text:"Pele seca, queda de cabelo, edema periorbitário, reflexos tendinosos lentificados."},
 {type:"lab",text:"TSH elevado com T4 livre baixo; anti-TPO positivo sugere etiologia autoimune."},
 {type:"imagem",text:"[espaço para imagem: USG de tireoide com padrão heterogêneo, sugestivo de tireoidite]"},
 {type:"charada",text:"TSH alto + T4 livre baixo + anti-TPO positivo = hipotireoidismo primário autoimune (Hashimoto); reposição com levotiroxina."}
]},
{id:"c68",name:"Doença de Graves (hipertireoidismo)",category:"clm",clues:[
 {type:"epidemiologia",text:"Principal causa de hipertireoidismo, mais comum em mulheres entre 20-40 anos."},
 {type:"fatores_risco",text:"Predisposição autoimune, tabagismo (aumenta risco de oftalmopatia), estresse importante recente."},
 {type:"antecedentes",text:"História familiar de doença tireoidiana autoimune, tabagista."},
 {type:"queixa",text:"Perda de peso apesar do apetite aumentado, palpitações e tremores."},
 {type:"sintomas",text:"Exoftalmia, bócio difuso com sopro à ausculta, taquicardia, pele quente e úmida."},
 {type:"lab",text:"TSH suprimido com T4 livre elevado; TRAb (anticorpo anti-receptor de TSH) positivo."},
 {type:"imagem",text:"[espaço para imagem: cintilografia com captação difusamente aumentada de iodo radioativo]"},
 {type:"charada",text:"TSH suprimido + T4 livre alto + exoftalmia + TRAb positivo = doença de Graves; atenção ao risco de crise tireotóxica."}
]},
{id:"c69",name:"Síndrome de Cushing",category:"clm",clues:[
 {type:"epidemiologia",text:"Causa mais comum é exógena (uso crônico de corticoide); causa endógena mais comum é adenoma hipofisário."},
 {type:"fatores_risco",text:"Uso prolongado de corticoide sistêmico em altas doses para outras condições."},
 {type:"antecedentes",text:"Uso crônico de prednisona para doença autoimune de base."},
 {type:"queixa",text:"Ganho de peso centrípeto, fraqueza muscular proximal e fragilidade cutânea."},
 {type:"sintomas",text:"Face em lua cheia, giba dorsal, estrias violáceas largas no abdome, hirsutismo."},
 {type:"lab",text:"Cortisol livre urinário de 24h elevado; teste de supressão com dexametasona alterado."},
 {type:"imagem",text:"[espaço para imagem: RM de hipófise buscando microadenoma, se causa endógena suspeitada]"},
 {type:"charada",text:"Estrias violáceas largas + face em lua cheia + giba dorsal = Cushing; primeiro passo é diferenciar causa exógena de endógena."}
]},
{id:"c70",name:"Insuficiência adrenal aguda (crise addisoniana)",category:"psa",clues:[
 {type:"epidemiologia",text:"Emergência endócrina rara, mas potencialmente fatal se não reconhecida rapidamente."},
 {type:"fatores_risco",text:"Suspensão abrupta de corticoide crônico, estresse agudo (infecção, cirurgia) em paciente com insuficiência adrenal de base."},
 {type:"antecedentes",text:"Uso crônico de corticoide interrompido abruptamente há poucos dias, quadro infeccioso concomitante."},
 {type:"queixa",text:"Fraqueza intensa, náuseas, vômitos e dor abdominal difusa."},
 {type:"sintomas",text:"Hipotensão refratária a volume, hiperpigmentação cutânea (se crônica de base)."},
 {type:"lab",text:"Hiponatremia e hipercalemia, hipoglicemia, cortisol sérico inapropriadamente baixo para o estresse."},
 {type:"imagem",text:"[espaço para imagem: TC de abdome pode mostrar adrenais atróficas ou hemorrágicas conforme etiologia]"},
 {type:"charada",text:"Hipotensão refratária + hiponatremia + hipercalemia em paciente com uso crônico de corticoide = crise addisoniana, hidrocortisona IV imediata, não esperar confirmação laboratorial."}
]},
{id:"c71",name:"Anemia ferropriva",category:"clm",clues:[
 {type:"epidemiologia",text:"Tipo de anemia mais comum no mundo, mais prevalente em mulheres em idade fértil e crianças."},
 {type:"fatores_risco",text:"Perdas menstruais aumentadas, dieta pobre em ferro, sangramento digestivo oculto crônico."},
 {type:"antecedentes",text:"Menorragia há vários ciclos, dieta com baixa ingesta de carne vermelha."},
 {type:"queixa",text:"Fadiga progressiva, palidez cutâneo-mucosa, dispneia aos esforços."},
 {type:"sintomas",text:"Coiloníquia (unhas em colher), queilite angular, taquicardia compensatória."},
 {type:"lab",text:"Hemoglobina baixa com VCM reduzido (microcítica), ferritina baixa, saturação de transferrina reduzida."},
 {type:"imagem",text:"[espaço para imagem: endoscopia digestiva se houver suspeita de sangramento oculto como causa]"},
 {type:"charada",text:"Anemia microcítica + ferritina baixa = ferropriva confirmada; em homens e mulheres na pós-menopausa, sempre investigar perda oculta no trato digestivo."}
]},
{id:"c72",name:"Leucemia linfoblástica aguda",category:"ped",clues:[
 {type:"epidemiologia",text:"Câncer mais comum na infância, pico de incidência entre 2-5 anos de idade."},
 {type:"fatores_risco",text:"Síndrome de Down aumenta o risco, exposição prévia à radiação ionizante."},
 {type:"antecedentes",text:"Criança previamente hígida, sem antecedentes oncológicos familiares conhecidos."},
 {type:"queixa",text:"Palidez progressiva, fadiga e febre recorrente nas últimas semanas."},
 {type:"sintomas",text:"Petéquias, hepatoesplenomegalia, dor óssea, linfonodomegalia generalizada."},
 {type:"lab",text:"Pancitopenia com blastos circulantes no sangue periférico."},
 {type:"imagem",text:"[espaço para imagem: mielograma mostrando infiltração blástica >25% na medula óssea]"},
 {type:"charada",text:"Pancitopenia + blastos no sangue periférico + infiltração medular = LLA; imunofenotipagem define o subtipo e prognóstico."}
]},
{id:"c73",name:"Púrpura trombocitopênica imune (PTI)",category:"ped",clues:[
 {type:"epidemiologia",text:"Causa mais comum de trombocitopenia isolada na infância, geralmente pós-infecciosa."},
 {type:"fatores_risco",text:"Infecção viral recente (das vias aéreas superiores ou exantemática)."},
 {type:"antecedentes",text:"Quadro viral há 2 semanas, sem outras comorbidades."},
 {type:"queixa",text:"Aparecimento súbito de petéquias e equimoses generalizadas."},
 {type:"sintomas",text:"Sangramento de mucosas (epistaxe, gengivorragia), sem hepatoesplenomegalia ou linfonodomegalia associadas."},
 {type:"lab",text:"Trombocitopenia isolada importante, demais séries (leucócitos e hemoglobina) normais."},
 {type:"imagem",text:"[espaço para imagem: mielograma normal ou com megacariócitos aumentados, se realizado]"},
 {type:"charada",text:"Trombocitopenia isolada + demais séries normais + sem organomegalias = PTI; a maioria das crianças resolve espontaneamente em semanas."}
]},
{id:"c74",name:"Anemia falciforme em crise vaso-oclusiva",category:"ped",clues:[
 {type:"epidemiologia",text:"Hemoglobinopatia hereditária mais comum, maior prevalência em pessoas de ascendência africana."},
 {type:"fatores_risco",text:"Desidratação, hipóxia, frio intenso e infecções podem precipitar as crises."},
 {type:"antecedentes",text:"Diagnóstico prévio de anemia falciforme, exposição ao frio no dia anterior."},
 {type:"queixa",text:"Dor óssea intensa, de início súbito, em membros e região lombar."},
 {type:"sintomas",text:"Icterícia leve crônica basal, palidez, possível febre associada a infecção concomitante."},
 {type:"lab",text:"Anemia hemolítica crônica de base, reticulocitose, eletroforese de hemoglobina com HbS predominante."},
 {type:"imagem",text:"[espaço para imagem: RX de ossos longos para excluir osteomielite como diferencial da crise]"},
 {type:"charada",text:"Dor óssea intensa + HbS na eletroforese + histórico conhecido = crise vaso-oclusiva; hidratação vigorosa e analgesia são a base do tratamento."}
]},
{id:"c75",name:"Psoríase em placas",category:"clm",clues:[
 {type:"epidemiologia",text:"Dermatose inflamatória crônica comum, com distribuição bimodal de início (jovens e após os 50 anos)."},
 {type:"fatores_risco",text:"História familiar positiva, estresse, obesidade, tabagismo."},
 {type:"antecedentes",text:"Episódios recorrentes de lesões cutâneas há anos, com períodos de melhora e piora."},
 {type:"queixa",text:"Placas eritematosas descamativas em superfícies extensoras (cotovelos, joelhos, couro cabeludo)."},
 {type:"sintomas",text:"Sinal de Auspitz (sangramento puntiforme ao remover a escama), alterações ungueais (pitting)."},
 {type:"lab",text:"Exames laboratoriais geralmente normais; avaliar acometimento articular associado (artrite psoriásica)."},
 {type:"imagem",text:"[espaço para imagem: biópsia de pele mostrando hiperqueratose e paraqueratose características]"},
 {type:"charada",text:"Placas eritêmato-descamativas em áreas extensoras + sinal de Auspitz + pitting ungueal = psoríase; investigar artrite psoriásica associada."}
]},
{id:"c76",name:"Melanoma cutâneo",category:"clm",clues:[
 {type:"epidemiologia",text:"Câncer de pele com maior potencial de metástase, incidência crescente relacionada à exposição solar."},
 {type:"fatores_risco",text:"Pele clara, histórico de queimaduras solares na infância, múltiplos nevos atípicos, história familiar."},
 {type:"antecedentes",text:"Nevo antigo que mudou de aspecto nos últimos meses, segundo relato do próprio paciente."},
 {type:"queixa",text:"Lesão pigmentada que cresceu de tamanho e mudou de cor recentemente."},
 {type:"sintomas",text:"Lesão com bordas irregulares, coloração heterogênea, diâmetro maior que 6mm (critérios ABCDE)."},
 {type:"lab",text:"Biópsia excisional confirma o diagnóstico e define a espessura de Breslow, principal fator prognóstico."},
 {type:"imagem",text:"[espaço para imagem: dermatoscopia mostrando padrão atípico de pigmentação]"},
 {type:"charada",text:"Assimetria + bordas irregulares + cor heterogênea + diâmetro >6mm + evolução (ABCDE) = suspeita de melanoma; biópsia excisional é obrigatória."}
]},
{id:"c77",name:"Erisipela / celulite",category:"psa",clues:[
 {type:"epidemiologia",text:"Infecção de pele e tecido subcutâneo muito comum, mais frequente em membros inferiores."},
 {type:"fatores_risco",text:"Insuficiência venosa crônica, obesidade, porta de entrada cutânea (frieira, ferida prévia)."},
 {type:"antecedentes",text:"Insuficiência venosa crônica conhecida, lesão de pele prévia no local."},
 {type:"queixa",text:"Vermelhidão, calor e dor em perna, de início e progressão rápidos, associada a febre."},
 {type:"sintomas",text:"Eritema com bordas bem definidas (erisipela) ou mal definidas (celulite), calor local, linfangite associada."},
 {type:"lab",text:"Leucocitose com desvio à esquerda, PCR elevada."},
 {type:"imagem",text:"[espaço para imagem: USG de partes moles para excluir abscesso ou fasciite necrotizante]"},
 {type:"charada",text:"Eritema de bordas bem definidas + febre + porta de entrada identificável = erisipela; atenção a sinais de gravidade que sugiram fasciite necrotizante (dor desproporcional, bolhas, crepitação)."}
]},
{id:"c78",name:"Episódio depressivo maior",category:"psiq",clues:[
 {type:"epidemiologia",text:"Um dos transtornos psiquiátricos mais prevalentes no mundo, mais comum em mulheres."},
 {type:"fatores_risco",text:"História familiar de transtornos de humor, eventos estressores significativos, doenças crônicas associadas."},
 {type:"antecedentes",text:"Sem diagnóstico psiquiátrico prévio, evento de vida estressante recente relatado."},
 {type:"queixa",text:"Humor deprimido e perda de interesse nas atividades habituais há mais de 2 semanas."},
 {type:"sintomas",text:"Alterações de sono e apetite, fadiga, dificuldade de concentração, sentimentos de culpa excessiva."},
 {type:"lab",text:"TSH deve ser solicitado para excluir hipotireoidismo como causa orgânica dos sintomas."},
 {type:"imagem",text:"[espaço para imagem: não é necessária para o diagnóstico, que é clínico]"},
 {type:"charada",text:"Humor deprimido + anedonia + sintomas neurovegetativos por >2 semanas, causando prejuízo funcional = episódio depressivo maior; sempre avaliar risco de suicídio ativamente."}
]},
{id:"c79",name:"Episódio maníaco (transtorno bipolar)",category:"psiq",clues:[
 {type:"epidemiologia",text:"Transtorno de humor com início geralmente no final da adolescência ou início da idade adulta."},
 {type:"fatores_risco",text:"História familiar de transtorno bipolar, uso de substâncias, privação de sono como gatilho."},
 {type:"antecedentes",text:"Episódios prévios de humor deprimido intercalados com períodos de energia excessiva."},
 {type:"queixa",text:"Humor eufórico ou irritável, associado a redução importante da necessidade de sono."},
 {type:"sintomas",text:"Fala acelerada, pensamento acelerado, grandiosidade, envolvimento em atividades de risco."},
 {type:"lab",text:"Função tireoidiana e triagem toxicológica ajudam a excluir causas orgânicas/induzidas por substâncias."},
 {type:"imagem",text:"[espaço para imagem: não é necessária para o diagnóstico, que é clínico]"},
 {type:"charada",text:"Humor elevado/irritável + redução da necessidade de sono + grandiosidade por ≥7 dias, com prejuízo funcional = episódio maníaco."}
]},
{id:"c80",name:"Delirium",category:"psa",clues:[
 {type:"epidemiologia",text:"Síndrome confusional aguda muito comum em idosos hospitalizados, subdiagnosticada com frequência."},
 {type:"fatores_risco",text:"Idade avançada, demência de base, polifarmácia, infecção, privação de sono em ambiente hospitalar."},
 {type:"antecedentes",text:"Idoso hospitalizado há 3 dias para tratamento de infecção urinária."},
 {type:"queixa",text:"Confusão mental de início agudo, flutuante ao longo do dia."},
 {type:"sintomas",text:"Alteração do nível de atenção, desorientação temporoespacial, pode haver agitação ou hipoatividade."},
 {type:"lab",text:"Investigação direcionada à causa de base: sumário de urina, eletrólitos, função renal e hepática."},
 {type:"imagem",text:"[espaço para imagem: TC de crânio se houver sinais neurológicos focais ou trauma associado]"},
 {type:"charada",text:"Início agudo + curso flutuante + alteração de atenção = delirium, não demência; buscar e tratar a causa de base é prioridade."}
]},
{id:"c81",name:"Miomatose uterina",category:"go",clues:[
 {type:"epidemiologia",text:"Tumor benigno ginecológico mais comum, mais prevalente em mulheres negras e após os 35 anos."},
 {type:"fatores_risco",text:"Obesidade, nuliparidade, exposição estrogênica prolongada, história familiar."},
 {type:"antecedentes",text:"Ciclos menstruais irregulares e volumosos há vários meses, sem investigação prévia."},
 {type:"queixa",text:"Sangramento menstrual intenso e prolongado, associado a dor pélvica em cólica."},
 {type:"sintomas",text:"Aumento do volume abdominal, sintomas compressivos urinários (polaciúria) se o mioma for volumoso."},
 {type:"lab",text:"Anemia ferropriva secundária ao sangramento menstrual intenso crônico."},
 {type:"imagem",text:"[espaço para imagem: USG transvaginal mostrando nódulo miometrial hipoecoico bem delimitado]"},
 {type:"charada",text:"Sangramento uterino aumentado + nódulo miometrial bem delimitado à USG = miomatose; tratamento depende de sintomas, tamanho e desejo reprodutivo."}
]},
{id:"c82",name:"Endometriose",category:"go",clues:[
 {type:"epidemiologia",text:"Doença ginecológica comum em mulheres em idade reprodutiva, frequentemente subdiagnosticada por anos."},
 {type:"fatores_risco",text:"Menarca precoce, ciclos menstruais curtos e volumosos, história familiar de endometriose."},
 {type:"antecedentes",text:"Dismenorreia progressiva desde a adolescência, dificuldade para engravidar há 1 ano."},
 {type:"queixa",text:"Dor pélvica cíclica intensa, associada à menstruação, e dor durante a relação sexual."},
 {type:"sintomas",text:"Dor à mobilização do colo uterino, nodularidade no fundo de saco posterior ao exame."},
 {type:"lab",text:"CA-125 pode estar elevado, mas não é específico nem usado para diagnóstico isolado."},
 {type:"imagem",text:"[espaço para imagem: USG transvaginal com preparo intestinal mostrando endometrioma ovariano]"},
 {type:"charada",text:"Dismenorreia progressiva + dispareunia + infertilidade = tríade clássica de endometriose; laparoscopia com biópsia é o padrão-ouro diagnóstico."}
]},
{id:"c83",name:"Osteomielite aguda",category:"ped",clues:[
 {type:"epidemiologia",text:"Infecção óssea mais comum na infância, geralmente por via hematogênica, mais frequente em ossos longos."},
 {type:"fatores_risco",text:"Trauma local recente, bacteremia por outro foco infeccioso, imunossupressão."},
 {type:"antecedentes",text:"Trauma leve no membro há alguns dias, sem outras comorbidades."},
 {type:"queixa",text:"Dor óssea localizada e progressiva, associada a febre."},
 {type:"sintomas",text:"Recusa de apoiar o membro afetado (claudicação), edema e calor local sobre o osso acometido."},
 {type:"lab",text:"Leucocitose, PCR e VHS elevados; hemocultura pode identificar o agente (Staphylococcus aureus é o mais comum)."},
 {type:"imagem",text:"[espaço para imagem: RM de membro mostrando edema de medula óssea, mais sensível que o RX nas fases iniciais]"},
 {type:"charada",text:"Dor óssea localizada + febre + PCR elevada em criança, com RX inicialmente normal = osteomielite aguda; RM confirma precocemente, antibiótico não deve esperar."}
]},
{id:"c84",name:"Intoxicação aguda por opioides",category:"psa",clues:[
 {type:"epidemiologia",text:"Causa importante de óbito por intoxicação em serviços de emergência, com incidência crescente globalmente."},
 {type:"fatores_risco",text:"Uso concomitante de múltiplos depressores do SNC, tolerância reduzida após período de abstinência."},
 {type:"antecedentes",text:"Uso crônico de opioide prescrito para dor, associação recente com outro medicamento sedativo."},
 {type:"queixa",text:"Rebaixamento do nível de consciência, encontrado sonolento e com respiração lentificada."},
 {type:"sintomas",text:"Miose puntiforme, depressão respiratória (bradipneia), hipotensão em casos graves."},
 {type:"lab",text:"Gasometria mostrando acidose respiratória por hipoventilação; triagem toxicológica pode confirmar a classe da substância."},
 {type:"imagem",text:"[espaço para imagem: RX de tórax para avaliar edema pulmonar não cardiogênico, complicação possível]"},
 {type:"charada",text:"Miose puntiforme + depressão respiratória + rebaixamento do nível de consciência = tríade opioide; naloxona reverte rapidamente o quadro."}
]},
{id:"c85",name:"Meningite viral",category:"infecto",clues:[
 {type:"epidemiologia",text:"Causa mais comum de meningite, geralmente de curso mais benigno que a forma bacteriana."},
 {type:"fatores_risco",text:"Infecção viral concomitante (enterovírus é a causa mais comum), ausência de vacinação para agentes específicos."},
 {type:"antecedentes",text:"Quadro viral inespecífico há poucos dias, sem comorbidades relevantes."},
 {type:"queixa",text:"Cefaleia, febre e rigidez de nuca, com quadro geral menos tóxico que na forma bacteriana."},
 {type:"sintomas",text:"Fotofobia presente, porém sem petéquias e sem rebaixamento importante do nível de consciência."},
 {type:"lab",text:"Líquor claro, com pleocitose linfomonocitária, glicorraquia normal e proteinorraquia discretamente elevada."},
 {type:"imagem",text:"[espaço para imagem: TC de crânio geralmente normal, reservada para sinais de alarme]"},
 {type:"charada",text:"Líquor claro + glicorraquia normal + pleocitose linfomonocitária + paciente com bom estado geral = meningite viral, tratamento é suportivo na maioria dos casos."}
]},
{id:"c86",name:"Síndrome de Guillain-Barré",category:"clm",clues:[
 {type:"epidemiologia",text:"Principal causa de paralisia flácida aguda no mundo, acomete todas as idades."},
 {type:"fatores_risco",text:"Infecção gastrointestinal ou respiratória recente (Campylobacter jejuni é o gatilho mais associado)."},
 {type:"antecedentes",text:"Episódio de gastroenterite há 2 semanas, sem doença neurológica prévia."},
 {type:"queixa",text:"Fraqueza ascendente e simétrica em membros inferiores, progressiva ao longo de dias."},
 {type:"sintomas",text:"Arreflexia nos membros afetados, sensibilidade relativamente preservada, pode evoluir com insuficiência respiratória."},
 {type:"lab",text:"Líquor com dissociação albumino-citológica (proteína alta, celularidade normal ou pouco alterada)."},
 {type:"imagem",text:"[espaço para imagem: eletroneuromiografia mostrando padrão de desmielinização com bloqueio de condução]"},
 {type:"charada",text:"Fraqueza ascendente simétrica + arreflexia + dissociação albumino-citológica no líquor = Guillain-Barré; monitorar capacidade vital pelo risco de falência respiratória."}
]}
];

/* ===================== ESTADO ===================== */
let cards = [];
let selectedCats = new Set(Object.keys(CATS));
let mode = "solo";
let teams = [];
let deck = [];
let currentCard = null;
let revealedCount = 0;
let editingCardId = null;
let uploadedImgData = null;

/* ===================== INIT ===================== */
function loadCards(){
  const saved = localStorage.getItem("perfilmed_cards");
  cards = saved ? JSON.parse(saved) : DEFAULT_CARDS;
}
function saveCards(){ localStorage.setItem("perfilmed_cards", JSON.stringify(cards)); }
function loadTeams(){
  const saved = localStorage.getItem("perfilmed_teams");
  teams = saved ? JSON.parse(saved) : [];
}
function saveTeams(){ localStorage.setItem("perfilmed_teams", JSON.stringify(teams)); }

function init(){
  loadCards();
  loadTeams();
  renderCatChips();
  renderTeamsSetup();
  updateDeckCount();
  renderCardsList();

  document.querySelectorAll("#tabNav button").forEach(b=>{
    b.onclick = ()=> switchTab(b.dataset.tab);
  });
  document.querySelectorAll(".mode-card").forEach(m=>{
    m.onclick = ()=>{
      document.querySelectorAll(".mode-card").forEach(x=>x.classList.remove("active"));
      m.classList.add("active");
      mode = m.dataset.mode;
      document.getElementById("teamsSetup").style.display = mode==="grupo" ? "block" : "none";
    };
  });
}

function switchTab(tab){
  document.querySelectorAll("#tabNav button").forEach(b=>b.classList.toggle("active", b.dataset.tab===tab));
  document.getElementById("tab-jogar").style.display = tab==="jogar" ? "block":"none";
  document.getElementById("tab-cartas").style.display = tab==="cartas" ? "block":"none";
  if(tab==="cartas") renderCardsList();
}

function renderCatChips(){
  const wrap = document.getElementById("catChips");
  wrap.innerHTML = "";
  Object.entries(CATS).forEach(([key,label])=>{
    const el = document.createElement("div");
    el.className = "chip selected";
    el.textContent = label;
    el.onclick = ()=>{
      if(selectedCats.has(key)){ selectedCats.delete(key); el.classList.remove("selected"); }
      else { selectedCats.add(key); el.classList.add("selected"); }
      updateDeckCount();
    };
    el.dataset.key = key;
    wrap.appendChild(el);
  });
}

function updateDeckCount(){
  const n = cards.filter(c=>selectedCats.has(c.category)).length;
  document.getElementById("deckCountLabel").textContent = n + " caso(s) disponível(is) com esse filtro";
}

/* ===================== TIMES ===================== */
function renderTeamsSetup(){
  const wrap = document.getElementById("teamsSetupList");
  wrap.innerHTML = "";
  teams.forEach((t,i)=>{
    const el = document.createElement("div");
    el.className = "team-pill";
    el.innerHTML = `<div class="tname">${t.name}</div><div class="tscore">${t.score}</div>
      <div style="margin-top:4px;"><button class="btn btn-danger btn-sm" onclick="removeTeam(${i})">remover</button></div>`;
    wrap.appendChild(el);
  });
}
function addTeam(){
  const input = document.getElementById("newTeamName");
  const name = input.value.trim();
  if(!name) return;
  teams.push({name, score:0});
  input.value="";
  saveTeams();
  renderTeamsSetup();
}
function removeTeam(i){
  teams.splice(i,1);
  saveTeams();
  renderTeamsSetup();
}

/* ===================== JOGO ===================== */
function startGame(){
  deck = shuffle(cards.filter(c=>selectedCats.has(c.category)));
  if(deck.length===0){ toast("Selecione ao menos uma especialidade com casos disponíveis"); return; }
  document.getElementById("setupPanel").style.display="none";
  document.getElementById("gameArea").style.display="block";
  renderTeamsPlayBar();
  nextCard();
}
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function renderTeamsPlayBar(){
  const bar = document.getElementById("teamsPlayBar");
  if(mode!=="grupo" || teams.length===0){ bar.style.display="none"; return; }
  bar.style.display="flex";
  bar.innerHTML = "";
  teams.forEach((t,i)=>{
    const el = document.createElement("div");
    el.className = "team-pill";
    el.style.cursor = "pointer";
    el.innerHTML = `<div class="tname">${t.name}</div><div class="tscore">${t.score}</div>`;
    el.onclick = ()=> awardTeam(i);
    bar.appendChild(el);
  });
}
function nextCard(){
  if(deck.length===0){
    document.getElementById("clueList").innerHTML = `<div class="empty-state"><div class="icon">🏁</div>Acabaram os casos filtrados. Volte ao início ou ajuste os filtros.</div>`;
    document.getElementById("controlsArea").style.display="none";
    document.getElementById("answerBox").style.display="none";
    return;
  }
  currentCard = deck.pop();
  revealedCount = 1;
  document.getElementById("controlsArea").style.display="block";
  document.getElementById("answerBox").style.display="none";
  document.getElementById("guessInput").value="";
  document.getElementById("soloGuessRow").style.display = mode==="solo" ? "flex":"none";
  document.getElementById("curCatTag").textContent = CATS[currentCard.category];
  document.getElementById("curDifficulty").textContent = currentCard.clues.length + " pistas no total";
  renderClues();
  document.getElementById("guessInput") && document.getElementById("guessInput").focus();
}
function renderClues(){
  const list = document.getElementById("clueList");
  list.innerHTML = "";
  for(let i=0;i<revealedCount;i++){
    const clue = currentCard.clues[i];
    const el = document.createElement("div");
    el.className = "clue";
    let imgHtml = "";
    if(clue.type==="imagem"){
      if(currentCard.image){
        imgHtml = `<img src="${currentCard.image}">`;
      } else {
        imgHtml = `<div class="clue-placeholder">📎 Espaço reservado pra imagem — adicione a sua em "Minhas cartas"</div>`;
      }
    }
    el.innerHTML = `<div class="n">${i+1}</div><div class="body">
      <div class="label">${CLUE_TYPES[clue.type]||clue.type}</div>
      <div class="text">${clue.text}</div>${imgHtml}</div>`;
    list.appendChild(el);
  }
  const pts = Math.max(currentCard.clues.length - revealedCount + 1, 1);
  document.getElementById("curPoints").textContent = pts;
  document.getElementById("btnNextClue").disabled = revealedCount>=currentCard.clues.length;
  document.getElementById("btnNextClue").style.opacity = revealedCount>=currentCard.clues.length ? .5:1;
}
function nextClue(){
  if(revealedCount < currentCard.clues.length){
    revealedCount++;
    renderClues();
  }
}
function checkGuess(){
  const guess = document.getElementById("guessInput").value.trim();
  if(!guess) return;
  const norm = s=> s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
  const correct = norm(guess).length>3 && (norm(currentCard.name).includes(norm(guess)) || norm(guess).includes(norm(currentCard.name).split(" ")[0]));
  if(correct){
    const pts = Math.max(currentCard.clues.length - revealedCount + 1, 1);
    toast(`Acertou! +${pts} pontos`);
    showAnswer(true, pts);
  } else {
    toast("Não é isso... tente revelar mais uma pista");
  }
}
function giveUp(){
  showAnswer(false, 0);
}
function awardTeam(i){
  const pts = Math.max(currentCard.clues.length - revealedCount + 1, 1);
  teams[i].score += pts;
  saveTeams();
  renderTeamsPlayBar();
  toast(`${teams[i].name} +${pts} pontos`);
  showAnswer(true, pts, teams[i].name);
}
function showAnswer(wasCorrect, pts, teamName){
  const box = document.getElementById("answerBox");
  box.style.display = "block";
  const c = currentCard;
  const rows = c.clues.map(cl=>`<div><b>${CLUE_TYPES[cl.type]}</b>${cl.text}</div>`).join("");
  box.innerHTML = `<h3>${wasCorrect? "✅":"❌"} ${c.name}${teamName?` — ponto pra ${teamName}`:""}</h3>
    <div class="grid">${rows}</div>
    <div style="margin-top:14px;"><button class="btn btn-primary" onclick="nextCard()">Próximo caso →</button></div>`;
  document.getElementById("controlsArea").style.display="none";
}

/* ===================== TOAST ===================== */
let toastTimer;
function toast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove("show"), 2200);
}

/* ===================== MINHAS CARTAS ===================== */
function renderCardsList(){
  document.getElementById("cardCountLabel").textContent = `(${cards.length})`;
  const wrap = document.getElementById("cardsListWrap");
  if(cards.length===0){
    wrap.innerHTML = `<div class="empty-state"><div class="icon">🗂️</div>Nenhum caso ainda. Crie o primeiro!</div>`;
    return;
  }
  wrap.innerHTML = "";
  cards.forEach(c=>{
    const el = document.createElement("div");
    el.className = "card-list-item";
    el.innerHTML = `<div><div class="name">${c.name}</div><div class="meta">${CATS[c.category]} · ${c.clues.length} pistas${c.image?" · com imagem":""}</div></div>
      <div class="actions">
        <button class="btn btn-secondary btn-sm" onclick="editCard('${c.id}')">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteCard('${c.id}')">Excluir</button>
      </div>`;
    wrap.appendChild(el);
  });
}
function openCardForm(){
  editingCardId = null;
  uploadedImgData = null;
  document.getElementById("formTitle").textContent = "Novo caso";
  document.getElementById("f_name").value = "";
  document.getElementById("f_category").value = "clm";
  document.getElementById("clueEditList").innerHTML = "";
  for(let i=0;i<4;i++) addClueRow();
  renderImgUpload();
  document.getElementById("cardFormPanel").style.display = "block";
  document.getElementById("cardFormPanel").scrollIntoView({behavior:"smooth"});
}
function closeCardForm(){
  document.getElementById("cardFormPanel").style.display = "none";
}
function addClueRow(type, text){
  const wrap = document.getElementById("clueEditList");
  const row = document.createElement("div");
  row.className = "clue-edit-row";
  const opts = Object.entries(CLUE_TYPES).map(([k,l])=>`<option value="${k}" ${k===type?"selected":""}>${l}</option>`).join("");
  row.innerHTML = `<select>${opts}</select><textarea placeholder="Texto da pista...">${text||""}</textarea><button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">✕</button>`;
  wrap.appendChild(row);
}
function renderImgUpload(){
  const wrap = document.getElementById("imgUploadWrap");
  wrap.innerHTML = "";
  if(uploadedImgData){
    wrap.innerHTML = `<div class="img-preview-wrap"><img src="${uploadedImgData}"><button onclick="uploadedImgData=null;renderImgUpload();">✕</button></div>`;
  } else {
    wrap.innerHTML = `<label class="imgfile-btn">📎 Escolher imagem<input type="file" accept="image/*" style="display:none;" onchange="handleImgUpload(event)"></label>`;
  }
}
function handleImgUpload(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{ uploadedImgData = reader.result; renderImgUpload(); };
  reader.readAsDataURL(file);
}
function editCard(id){
  const c = cards.find(x=>x.id===id);
  if(!c) return;
  editingCardId = id;
  uploadedImgData = c.image || null;
  document.getElementById("formTitle").textContent = "Editar caso";
  document.getElementById("f_name").value = c.name;
  document.getElementById("f_category").value = c.category;
  document.getElementById("clueEditList").innerHTML = "";
  c.clues.forEach(cl=> addClueRow(cl.type, cl.text));
  renderImgUpload();
  document.getElementById("cardFormPanel").style.display = "block";
  document.getElementById("cardFormPanel").scrollIntoView({behavior:"smooth"});
}
function deleteCard(id){
  if(!confirm("Excluir este caso?")) return;
  cards = cards.filter(c=>c.id!==id);
  saveCards();
  renderCardsList();
  updateDeckCount();
}
function saveCard(){
  const name = document.getElementById("f_name").value.trim();
  const category = document.getElementById("f_category").value;
  const rows = document.querySelectorAll("#clueEditList .clue-edit-row");
  const clues = Array.from(rows).map(r=>({
    type: r.querySelector("select").value,
    text: r.querySelector("textarea").value.trim()
  })).filter(c=>c.text);

  if(!name){ toast("Dá um nome pro caso"); return; }
  if(clues.length<3){ toast("Adicione pelo menos 3 pistas"); return; }

  if(editingCardId){
    const c = cards.find(x=>x.id===editingCardId);
    c.name = name; c.category = category; c.clues = clues; c.image = uploadedImgData;
  } else {
    cards.push({id:"c_"+Date.now(), name, category, clues, image: uploadedImgData});
  }
  saveCards();
  closeCardForm();
  renderCardsList();
  updateDeckCount();
  toast("Caso salvo!");
}
function addMissingDefaults(){
  const existingIds = new Set(cards.map(c=>c.id));
  const missing = DEFAULT_CARDS.filter(c=>!existingIds.has(c.id));
  if(missing.length===0){ toast("Você já tem todos os casos padrão atuais"); return; }
  cards = cards.concat(missing);
  saveCards();
  renderCardsList();
  updateDeckCount();
  toast(`${missing.length} caso(s) novo(s) adicionado(s)!`);
}
function mergeDefaults(){
  const existingIds = new Set(cards.map(c=>c.id));
  const toAdd = DEFAULT_CARDS.filter(c=>!existingIds.has(c.id));
  if(toAdd.length===0){ toast("Você já tem todos os casos padrão atuais"); return; }
  cards = cards.concat(toAdd);
  saveCards();
  renderCardsList();
  updateDeckCount();
  toast(`${toAdd.length} caso(s) novo(s) adicionado(s)!`);
}
function exportCards(){
  const blob = new Blob([JSON.stringify(cards,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "perfil-medico-casos.json"; a.click();
  URL.revokeObjectURL(url);
}
function importCards(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const imported = JSON.parse(reader.result);
      if(!Array.isArray(imported)) throw new Error("formato inválido");
      cards = imported;
      saveCards();
      renderCardsList();
      updateDeckCount();
      toast("Casos importados!");
    }catch(err){ toast("Arquivo inválido"); }
  };
  reader.readAsText(file);
  e.target.value = "";
}

init();
</script>
</body>
</html>
