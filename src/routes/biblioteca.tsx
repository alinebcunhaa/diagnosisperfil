import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { loadCases } from "@/lib/game-store";
import { CATEGORY_META, CATEGORY_ORDER, type MedicalCase } from "@/lib/cases";

export const Route = createFileRoute("/biblioteca")({
  head: () => ({
    meta: [{ title: "Biblioteca de casos — Perfil Médico" }],
  }),
  component: Biblioteca,
});

function Biblioteca() {
  const [cases] = useState<MedicalCase[]>(() => loadCases());
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cases;
    return cases.filter(
      (c) =>
        c.diagnosis.toLowerCase().includes(q) ||
        c.aliases.some((a) => a.toLowerCase().includes(q))
    );
  }, [cases, query]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <Link
        to="/"
        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
      >
        ← Voltar ao jogo
      </Link>

      <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        Biblioteca de casos
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Todos os {cases.length} casos completos, pra estudar sem gastar pontos nem precisar adivinhar.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por diagnóstico..."
        className="mt-6 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
      />

      <div className="mt-6 space-y-3">
        {filtered.map((c) => {
          const open = openId === c.id;
          return (
            <article key={c.id} className="card-elevated overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : c.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
              >
                <h2 className="font-display text-lg font-semibold">{c.diagnosis}</h2>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {open ? "− fechar" : "+ ver caso completo"}
                </span>
              </button>

              {open && (
                <div className="clue-reveal border-t border-border/60 px-4 py-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {CATEGORY_ORDER.map((cat) => {
                      const meta = CATEGORY_META[cat];
                      const clues = c.clues[cat];
                      if (!clues || clues.length === 0) return null;
                      return (
                        <div key={cat}>
                          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            <span>{meta.icon}</span>
                            {meta.label}
                          </h3>
                          <ul className="mt-2 space-y-1.5">
                            {clues.map((clue, i) => (
                              <li key={i} className="text-sm leading-relaxed">
                                {clue}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  {(c.visualClue.imageUrl || c.visualClue.prompt) && (
                    <div className="mt-4 rounded-md border border-border/60 bg-secondary/40 p-3">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        🩻 Imagem
                      </h3>
                      {c.visualClue.imageUrl ? (
                        <img
                          src={c.visualClue.imageUrl}
                          alt={c.visualClue.prompt}
                          className="mt-2 max-h-64 rounded-md object-cover"
                        />
                      ) : (
                        <p className="mt-1 text-sm italic text-muted-foreground">
                          “{c.visualClue.prompt}”
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}

        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            Nenhum caso encontrado com esse termo.
          </p>
        )}
      </div>
    </main>
  );
}
