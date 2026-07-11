import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GameBoard } from "@/components/GameBoard";
import { loadCases, isSubscribed, setSubscribed } from "@/lib/game-store";
import type { MedicalCase } from "@/lib/cases";

export const Route = createFileRoute("/")({
  component: Home,
});

type Screen = "menu" | "select" | "play";
type Mode = "solo" | "versus";

function Home() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [mode, setMode] = useState<Mode>("solo");
  const [cases, setCases] = useState<MedicalCase[]>([]);
  const [sub, setSub] = useState(false);
  const [logoTaps, setLogoTaps] = useState(0);

  useEffect(() => {
    setCases(loadCases());
    setSub(isSubscribed());
  }, []);

  const availableCases = sub ? cases : cases.filter((c) => !c.isPremium);
  const premiumCount = cases.filter((c) => c.isPremium).length;

  function toggleSubscription() {
    const next = !sub;
    setSubscribed(next);
    setSub(next);
  }

  function handleLogoTap() {
    const n = logoTaps + 1;
    setLogoTaps(n);
    if (n >= 5) {
      window.location.href = "/management-hub";
    }
    setTimeout(() => setLogoTaps(0), 1500);
  }

  if (screen === "play") {
    return (
      <GameBoard
        cases={availableCases}
        mode={mode}
        onExit={() => setScreen("menu")}
      />
    );
  }

  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <button
          onClick={handleLogoTap}
          className="flex items-center gap-2 text-left"
          aria-label="Perfil Médico"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-lg font-black text-primary-foreground shadow-sm">
            P
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Perfil<span className="text-primary">·</span>Médico
          </span>
        </button>
        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={toggleSubscription}
            className={`rounded-full border px-3 py-1.5 font-semibold uppercase tracking-widest transition ${
              sub
                ? "border-accent bg-accent/20 text-accent-foreground"
                : "border-border bg-secondary text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {sub ? "✓ Assinante" : "Acesso convidado"}
          </button>
        </div>
      </nav>

      {screen === "menu" && (
        <section className="mx-auto max-w-6xl px-4 pt-4 pb-16 sm:pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                Jogo de adivinhação diagnóstica
              </span>
              <h1 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Revele as pistas.<br />
                <span className="text-primary">Diga o diagnóstico.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Uma releitura moderna do clássico jogo de tabuleiro <em>Perfil</em> — para
                médicos, estudantes e curiosos da medicina. Descubra epidemiologia,
                antecedentes, exame clínico, laboratório e imagem uma pista de cada vez.
                Cada revelação custa pontos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setScreen("select")}
                  className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:shadow-lg"
                >
                  Começar a jogar →
                </button>
                <a
                  href="#how"
                  className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground hover:border-primary hover:text-primary"
                >
                  Como funciona
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {availableCases.length} caso{availableCases.length !== 1 && "s"} disponíve{availableCases.length !== 1 ? "is" : "l"}{" "}
                {!sub && premiumCount > 0 && (
                  <span className="text-primary">
                    · {premiumCount} premium bloqueado{premiumCount !== 1 && "s"}
                  </span>
                )}
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-br from-primary/20 via-clay/10 to-sage/20 blur-2xl" />
              <div className="card-elevated relative rotate-1 p-6 shadow-xl">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span>Carta do caso</span>
                  <span>#001</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  {[
                    { i: "🌍", t: "Mulher, 58 anos, voo transatlântico, em uso de ACO" },
                    { i: "🩺", t: "Dor torácica pleurítica súbita, SpO₂ 89%" },
                    { i: "🧪", t: "D-dímero 4.200 · gasometria com hipoxemia" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-md bg-secondary/60 px-3 py-2">
                      <span>{r.i}</span>
                      <span className="text-foreground/80">{r.t}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 rounded-md border border-dashed border-border px-3 py-2 text-muted-foreground">
                    <span>🩻</span>
                    <span className="italic">Imagem bloqueada — revele por 20 pts</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <input
                    disabled
                    placeholder="Seu diagnóstico…"
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <button className="rounded-md bg-cocoa px-3 py-2 text-sm font-semibold text-background">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="how" className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              { n: "01", t: "Escolha um modo", d: "Corrida diagnóstica solo ou duelo 1 contra 1 no mesmo aparelho." },
              { n: "02", t: "Revele com estratégia", d: "Cada categoria custa pontos. Quanto antes você acertar, maior a pontuação." },
              { n: "03", t: "Diga o diagnóstico", d: "Digite sua resposta. Aceitamos variações e sinônimos." },
            ].map((s) => (
              <div key={s.n} className="card-elevated p-5">
                <div className="font-mono text-xs text-primary">{s.n}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          {!sub && premiumCount > 0 && (
            <div className="mt-16 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-sand to-accent/10 p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Biblioteca premium
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                    Desbloqueie {premiumCount} caso{premiumCount !== 1 && "s"} avançado{premiumCount !== 1 && "s"}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                    Casos reumatológicos, neurológicos e apresentações raras — com
                    painéis laboratoriais completos e descrições de imagem.
                  </p>
                </div>
                <button
                  onClick={toggleSubscription}
                  className="justify-self-start rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow hover:opacity-90 sm:justify-self-end"
                >
                  Simular assinatura
                </button>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {cases.filter((c) => c.isPremium).map((c) => (
                  <div key={c.id} className="relative overflow-hidden rounded-lg border border-border bg-card p-4">
                    <div className="absolute right-2 top-2 text-xs">🔒</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Caso premium
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold blur-[3px] select-none">
                      {c.diagnosis}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {screen === "select" && (
        <section className="mx-auto max-w-4xl px-4 py-10">
          <button
            onClick={() => setScreen("menu")}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            ← Voltar
          </button>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Escolha um modo</h2>
          <p className="mt-2 text-muted-foreground">
            Jogando com a biblioteca {sub ? "completa" : "demo"} —{" "}
            <b className="text-foreground">{availableCases.length}</b> caso
            {availableCases.length !== 1 && "s"} carregado{availableCases.length !== 1 && "s"}.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <ModeCard
              badge="Solo"
              title="Um jogador"
              icon="👤"
              desc="Corra contra sua própria pontuação. Quanto menos pistas reveladas, mais pontos você guarda."
              onSelect={() => {
                setMode("solo");
                setScreen("play");
              }}
            />
            <ModeCard
              badge="1 vs 1"
              title="Modo Versus (local)"
              icon="⚔️"
              desc="Dois jogadores no mesmo aparelho, alternando casos. Vence quem tiver a maior pontuação acumulada."
              onSelect={() => {
                setMode("versus");
                setScreen("play");
              }}
            />
          </div>

          {availableCases.length === 0 && (
            <p className="mt-8 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
              Nenhum caso disponível. Um administrador precisa adicionar casos na central de gerenciamento.
            </p>
          )}
        </section>
      )}

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        <p>Perfil Médico — jogo educativo. Não usar para decisão clínica.</p>
      </footer>
    </main>
  );
}

function ModeCard({
  badge,
  title,
  icon,
  desc,
  onSelect,
}: {
  badge: string;
  title: string;
  icon: string;
  desc: string;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="group card-elevated overflow-hidden p-6 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          {badge}
        </span>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-5 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
        Iniciar rodada →
      </div>
    </button>
  );
}
