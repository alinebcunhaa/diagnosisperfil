import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  isAdmin,
  loadCases,
  resetCases,
  saveCases,
  setAdmin,
} from "@/lib/game-store";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  SEED_CASES,
  type ClueCategory,
  type MedicalCase,
} from "@/lib/cases";

export const Route = createFileRoute("/management-hub")({
  head: () => ({
    meta: [
      { title: "Restricted" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ManagementHub,
});

function ManagementHub() {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAuthed(isAdmin());
  }, []);

  function attemptLogin(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setAdmin(true);
      setAuthed(true);
      setError("");
    } else {
      setError("Access denied. Credentials do not match an administrator.");
    }
  }

  function logout() {
    setAdmin(false);
    setAuthed(false);
    setEmail("");
    setPassword("");
  }

  if (!authed) {
    return (
      <main className="grid min-h-screen place-items-center px-4">
        <form
          onSubmit={attemptLogin}
          className="card-elevated w-full max-w-sm p-6"
        >
          <div className="mb-5 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-cocoa font-display text-2xl font-black text-background">
              ⌘
            </div>
            <h1 className="mt-3 font-display text-xl font-bold">Restricted area</h1>
            <p className="mt-1 text-xs text-muted-foreground">
              Administrator credentials required.
            </p>
          </div>

          <label className="mb-3 block">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Email
            </span>
            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
              required
            />
          </label>
          <label className="mb-4 block">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Password
            </span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
              required
            />
          </label>
          {error && (
            <p className="mb-3 rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 font-semibold text-primary-foreground hover:opacity-90"
          >
            Authenticate
          </button>
          <Link
            to="/"
            className="mt-4 block text-center text-xs text-muted-foreground hover:text-foreground"
          >
            ← Back to game
          </Link>
        </form>
      </main>
    );
  }

  return <AdminPanel onLogout={logout} />;
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [cases, setCases] = useState<MedicalCase[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const c = loadCases();
    setCases(c);
    if (c.length && !selectedId) setSelectedId(c[0].id);
  }, []); // eslint-disable-line

  const selected = useMemo(
    () => cases.find((c) => c.id === selectedId) ?? null,
    [cases, selectedId]
  );

  function persist(next: MedicalCase[]) {
    setCases(next);
    saveCases(next);
  }

  function updateSelected(patch: Partial<MedicalCase>) {
    if (!selected) return;
    persist(cases.map((c) => (c.id === selected.id ? { ...c, ...patch } : c)));
  }

  function updateClues(cat: ClueCategory, idx: number, value: string) {
    if (!selected) return;
    const list = [...selected.clues[cat]];
    list[idx] = value;
    updateSelected({ clues: { ...selected.clues, [cat]: list } });
  }

  function addClue(cat: ClueCategory) {
    if (!selected) return;
    updateSelected({
      clues: { ...selected.clues, [cat]: [...selected.clues[cat], ""] },
    });
  }

  function removeClue(cat: ClueCategory, idx: number) {
    if (!selected) return;
    const list = selected.clues[cat].filter((_, i) => i !== idx);
    updateSelected({ clues: { ...selected.clues, [cat]: list } });
  }

  function addCase() {
    const id = `case-${Date.now()}`;
    const empty: MedicalCase = {
      id,
      diagnosis: "New Condition",
      aliases: [],
      isPremium: false,
      clues: { epidemiology: [""], history: [""], clinical: [""], labs: [""], imaging: [""] },
      visualClue: { prompt: "", caption: "Visual finding" },
    };
    persist([empty, ...cases]);
    setSelectedId(id);
  }

  function deleteCase(id: string) {
    if (!confirm("Delete this case permanently?")) return;
    const next = cases.filter((c) => c.id !== id);
    persist(next);
    if (selectedId === id) setSelectedId(next[0]?.id ?? null);
  }

  function restoreSeed() {
    if (!confirm("Restore built-in case library? Custom edits will be lost.")) return;
    resetCases();
    setCases(SEED_CASES);
    setSelectedId(SEED_CASES[0]?.id ?? null);
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-cocoa text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-widest opacity-70">
              Management hub
            </div>
            <h1 className="truncate font-display text-lg font-bold sm:text-xl">
              Case library — {cases.length} record{cases.length !== 1 && "s"}
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/"
              className="rounded-md border border-background/30 px-3 py-1.5 text-xs font-semibold hover:bg-background/10"
            >
              View site
            </Link>
            <button
              onClick={onLogout}
              className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[300px_1fr]">
        <aside className="space-y-2">
          <div className="flex gap-2">
            <button
              onClick={addCase}
              className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              + New case
            </button>
            <button
              onClick={restoreSeed}
              className="rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:text-primary"
              title="Restore seed data"
            >
              ↺
            </button>
          </div>
          <ul className="max-h-[70vh] space-y-1 overflow-y-auto">
            {cases.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => setSelectedId(c.id)}
                  className={`flex w-full items-start justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm transition ${
                    selectedId === c.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{c.diagnosis}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.isPremium ? "Premium" : "Public"} · {countClues(c)} clues
                    </div>
                  </div>
                </button>
              </li>
            ))}
            {cases.length === 0 && (
              <li className="rounded-md border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                No cases yet.
              </li>
            )}
          </ul>
        </aside>

        {selected ? (
          <section className="space-y-5">
            <div className="card-elevated p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Diagnosis
                  </span>
                  <input
                    value={selected.diagnosis}
                    onChange={(e) => updateSelected({ diagnosis: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Accepted aliases (comma-separated)
                  </span>
                  <input
                    value={selected.aliases.join(", ")}
                    onChange={(e) =>
                      updateSelected({
                        aliases: e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selected.isPremium}
                    onChange={(e) => updateSelected({ isPremium: e.target.checked })}
                  />
                  <span>Premium (subscribers only)</span>
                </label>
                <button
                  onClick={() => deleteCase(selected.id)}
                  className="justify-self-start rounded-md border border-destructive/40 px-3 py-2 text-xs font-semibold text-destructive hover:bg-destructive hover:text-destructive-foreground sm:justify-self-end"
                >
                  Delete case
                </button>
              </div>
            </div>

            <div className="card-elevated p-5">
              <h3 className="font-display text-base font-semibold">Visual clue</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-[1fr_180px]">
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Caption
                    </span>
                    <input
                      value={selected.visualClue.caption}
                      onChange={(e) =>
                        updateSelected({
                          visualClue: { ...selected.visualClue, caption: e.target.value },
                        })
                      }
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Description (shown if no image URL)
                    </span>
                    <textarea
                      value={selected.visualClue.prompt}
                      onChange={(e) =>
                        updateSelected({
                          visualClue: { ...selected.visualClue, prompt: e.target.value },
                        })
                      }
                      rows={2}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Image URL (optional)
                    </span>
                    <input
                      value={selected.visualClue.imageUrl ?? ""}
                      onChange={(e) =>
                        updateSelected({
                          visualClue: {
                            ...selected.visualClue,
                            imageUrl: e.target.value || undefined,
                          },
                        })
                      }
                      placeholder="https://…"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                </div>
                <div className="aspect-square overflow-hidden rounded-md border border-border bg-secondary/40">
                  {selected.visualClue.imageUrl ? (
                    <img
                      src={selected.visualClue.imageUrl}
                      alt={selected.visualClue.prompt}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="grid h-full place-items-center p-3 text-center text-xs italic text-muted-foreground">
                      No image
                    </div>
                  )}
                </div>
              </div>
            </div>

            {CATEGORY_ORDER.map((cat) => {
              const meta = CATEGORY_META[cat];
              const list = selected.clues[cat];
              return (
                <div key={cat} className="card-elevated p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold">
                      {meta.icon} {meta.label}
                    </h3>
                    <button
                      onClick={() => addClue(cat)}
                      className="rounded-md border border-primary/30 px-2.5 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      + Add clue
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {list.map((clue, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 font-mono text-xs text-muted-foreground">
                          #{i + 1}
                        </span>
                        <textarea
                          value={clue}
                          onChange={(e) => updateClues(cat, i, e.target.value)}
                          rows={2}
                          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        />
                        <button
                          onClick={() => removeClue(cat, i)}
                          className="mt-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:border-destructive hover:text-destructive"
                          aria-label="Remove clue"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                    {list.length === 0 && (
                      <li className="rounded-md border border-dashed border-border p-3 text-center text-xs text-muted-foreground">
                        No clues in this category.
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </section>
        ) : (
          <section className="card-elevated grid place-items-center p-10 text-center text-sm text-muted-foreground">
            Select a case on the left or create a new one.
          </section>
        )}
      </div>
    </main>
  );
}

function countClues(c: MedicalCase): number {
  return CATEGORY_ORDER.reduce((n, cat) => n + c.clues[cat].length, 0);
}
