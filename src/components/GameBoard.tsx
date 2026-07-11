import { useMemo, useState } from "react";
import { CATEGORY_META, CATEGORY_ORDER, type ClueCategory, type MedicalCase } from "@/lib/cases";
import { checkGuess } from "@/lib/game-store";

type Mode = "solo" | "versus";

interface Props {
  cases: MedicalCase[];
  mode: Mode;
  onExit: () => void;
}

interface PlayerState {
  name: string;
  score: number;
  solved: number;
}

const STARTING_POINTS = 100;

export function GameBoard({ cases, mode, onExit }: Props) {
  const [players, setPlayers] = useState<PlayerState[]>(
    mode === "solo"
      ? [{ name: "Jogador", score: 0, solved: 0 }]
      : [
          { name: "Jogador 1", score: 0, solved: 0 },
          { name: "Jogador 2", score: 0, solved: 0 },
        ]
  );
  const [turn, setTurn] = useState(0);
  const [deck, setDeck] = useState(() => shuffle(cases.map((c) => c.id)));
  const [roundIdx, setRoundIdx] = useState(0);
  const currentCaseId = deck[roundIdx];
  const currentCase = cases.find((c) => c.id === currentCaseId) ?? cases[0];

  const [revealed, setRevealed] = useState<Record<ClueCategory, number>>({
    epidemiology: 0,
    history: 0,
    clinical: 0,
    labs: 0,
    imaging: 0,
  });
  const [visualRevealed, setVisualRevealed] = useState(false);
  const [pointsSpent, setPointsSpent] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState<null | "correct" | "wrong" | "giveup">(null);

  const remaining = Math.max(0, STARTING_POINTS - pointsSpent);

  function revealClue(cat: ClueCategory) {
    const count = revealed[cat];
    if (count >= currentCase.clues[cat].length) return;
    setRevealed({ ...revealed, [cat]: count + 1 });
    setPointsSpent((p) => p + CATEGORY_META[cat].cost);
  }

  function revealVisual() {
    if (visualRevealed) return;
    setVisualRevealed(true);
    setPointsSpent((p) => p + 25);
  }

  function submitGuess() {
    if (!guess.trim() || feedback === "correct") return;
    if (checkGuess(guess, currentCase)) {
      setFeedback("correct");
      const earned = remaining;
      setPlayers((ps) => ps.map((p, i) => (i === turn ? { ...p, score: p.score + earned, solved: p.solved + 1 } : p)));
    } else {
      setFeedback("wrong");
      setPointsSpent((p) => p + 10);
      setTimeout(() => setFeedback(null), 900);
    }
  }

  function giveUp() {
    setFeedback("giveup");
  }

  function nextRound() {
    const nextIdx = roundIdx + 1;
    if (nextIdx >= deck.length) {
      setDeck(shuffle(cases.map((c) => c.id)));
      setRoundIdx(0);
    } else {
      setRoundIdx(nextIdx);
    }
    setRevealed({ epidemiology: 0, history: 0, clinical: 0, labs: 0, imaging: 0 });
    setVisualRevealed(false);
    setPointsSpent(0);
    setGuess("");
    setFeedback(null);
    if (mode === "versus") setTurn((t) => (t + 1) % players.length);
  }

  const totalClues = useMemo(
    () => CATEGORY_ORDER.reduce((n, c) => n + currentCase.clues[c].length, 0),
    [currentCase]
  );
  const revealedTotal = CATEGORY_ORDER.reduce((n, c) => n + revealed[c], 0);

  const active = players[turn];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
        <div className="min-w-0">
          <button
            onClick={onExit}
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            ← Sair da rodada
          </button>
          <h1 className="mt-1 truncate font-display text-2xl font-bold sm:text-3xl">
            {mode === "versus" ? `Vez de ${active.name}` : "Rodada diagnóstica"}
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {players.map((p, i) => (
            <div
              key={i}
              className={`rounded-lg border px-3 py-2 text-center ${
                mode === "versus" && i === turn
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <div className="text-[10px] font-semibold uppercase tracking-widest opacity-80">{p.name}</div>
              <div className="font-display text-lg font-bold leading-none">{p.score}</div>
            </div>
          ))}
        </div>
      </header>

      <div className="mt-6 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Pontos disponíveis
            </span>
            <span className="font-display text-2xl font-bold text-primary">{remaining}</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-clay transition-all duration-500"
              style={{ width: `${remaining}%` }}
            />
          </div>
        </div>
        <div className="text-xs text-muted-foreground sm:text-right">
          Pistas reveladas <span className="font-semibold text-foreground">{revealedTotal}</span> / {totalClues}
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <section className="space-y-3">
          {CATEGORY_ORDER.map((cat) => {
            const meta = CATEGORY_META[cat];
            const shown = revealed[cat];
            const all = currentCase.clues[cat];
            const canReveal = shown < all.length && feedback !== "correct" && feedback !== "giveup";
            return (
              <article key={cat} className="card-elevated overflow-hidden">
                <header className="flex items-center justify-between gap-3 border-b border-border/60 bg-secondary/50 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-xl">{meta.icon}</span>
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-base font-semibold">{meta.label}</h3>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                        {shown} / {all.length} reveladas
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => revealClue(cat)}
                    disabled={!canReveal}
                    className="shrink-0 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Revelar −{meta.cost}
                  </button>
                </header>
                <ul className="divide-y divide-border/60">
                  {all.slice(0, shown).map((clue, i) => (
                    <li key={i} className="clue-reveal px-4 py-3 text-sm leading-relaxed">
                      <span className="mr-2 font-mono text-xs text-muted-foreground">#{i + 1}</span>
                      {clue}
                    </li>
                  ))}
                  {shown === 0 && (
                    <li className="px-4 py-4 text-center text-xs italic text-muted-foreground">
                      Nenhuma pista revelada nesta categoria ainda
                    </li>
                  )}
                </ul>
              </article>
            );
          })}
        </section>

        <aside className="space-y-4">
          <div className="card-elevated overflow-hidden">
            <div className="border-b border-border/60 bg-secondary/50 px-4 py-3">
              <h3 className="font-display text-base font-semibold">Pista visual</h3>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {currentCase.visualClue.caption}
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-cocoa/10 to-primary/10">
              {visualRevealed ? (
                currentCase.visualClue.imageUrl ? (
                  <img
                    src={currentCase.visualClue.imageUrl}
                    alt={currentCase.visualClue.prompt}
                    className="clue-reveal h-full w-full object-cover"
                  />
                ) : (
                  <div className="clue-reveal flex h-full items-center justify-center p-6 text-center text-sm italic text-muted-foreground">
                    “{currentCase.visualClue.prompt}”
                  </div>
                )
              ) : (
                <button
                  onClick={revealVisual}
                  disabled={feedback === "correct" || feedback === "giveup"}
                  className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary hover:bg-primary/5 disabled:opacity-40"
                >
                  <span className="text-4xl">🩻</span>
                  <span className="text-sm font-semibold">Revelar imagem −25 pts</span>
                </button>
              )}
            </div>
          </div>

          <div className="card-elevated p-4">
            <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Seu diagnóstico
            </label>
            <div className="mt-2 flex gap-2">
              <input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitGuess()}
                disabled={feedback === "correct" || feedback === "giveup"}
                placeholder="ex. Apendicite aguda"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
              />
              <button
                onClick={submitGuess}
                disabled={feedback === "correct" || feedback === "giveup"}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40"
              >
                Enviar
              </button>
            </div>
            {feedback === "wrong" && (
              <p className="clue-reveal mt-3 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                Não é isso — penalidade de −10 pts. Revelar outra pista?
              </p>
            )}
            {feedback === "correct" && (
              <div className="clue-reveal mt-3 rounded-md border border-accent/40 bg-accent/15 px-3 py-3 text-sm">
                <p className="font-semibold text-accent-foreground">
                  ✓ Correto — {currentCase.diagnosis}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Você ganhou <b>{remaining}</b> pontos.
                </p>
              </div>
            )}
            {feedback === "giveup" && (
              <div className="clue-reveal mt-3 rounded-md border border-border bg-secondary px-3 py-3 text-sm">
                <p className="font-semibold">Resposta: {currentCase.diagnosis}</p>
                <p className="mt-1 text-xs text-muted-foreground">Nenhum ponto nesta rodada.</p>
              </div>
            )}

            <div className="mt-3 flex items-center justify-between text-xs">
              <button
                onClick={giveUp}
                disabled={feedback === "correct" || feedback === "giveup"}
                className="text-muted-foreground underline hover:text-destructive disabled:opacity-40"
              >
                Desistir
              </button>
              {(feedback === "correct" || feedback === "giveup") && (
                <button
                  onClick={nextRound}
                  className="rounded-md bg-cocoa px-3 py-1.5 font-semibold text-background hover:opacity-90"
                >
                  Próximo caso →
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
