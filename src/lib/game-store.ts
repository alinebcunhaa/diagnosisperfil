import { SEED_CASES, type MedicalCase } from "./cases";

const CASES_KEY = "perfil-medico:cases:v1";
const SUB_KEY = "perfil-medico:subscribed";
const ADMIN_KEY = "perfil-medico:admin";

export const ADMIN_EMAIL = "alinebcunhaa@gmail.com";
export const ADMIN_PASSWORD = "Perfil@Master2026";

export function loadCases(): MedicalCase[] {
  if (typeof window === "undefined") return SEED_CASES;
  try {
    const raw = localStorage.getItem(CASES_KEY);
    if (!raw) return SEED_CASES;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return SEED_CASES;
    return parsed as MedicalCase[];
  } catch {
    return SEED_CASES;
  }
}

export function saveCases(cases: MedicalCase[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CASES_KEY, JSON.stringify(cases));
}

export function resetCases() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CASES_KEY);
}

export function isSubscribed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SUB_KEY) === "1";
}

export function setSubscribed(v: boolean) {
  if (typeof window === "undefined") return;
  if (v) localStorage.setItem(SUB_KEY, "1");
  else localStorage.removeItem(SUB_KEY);
}

export function isAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_KEY) === "1";
}

export function setAdmin(v: boolean) {
  if (typeof window === "undefined") return;
  if (v) sessionStorage.setItem(ADMIN_KEY, "1");
  else sessionStorage.removeItem(ADMIN_KEY);
}

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function checkGuess(guess: string, c: MedicalCase): boolean {
  const g = normalize(guess);
  if (!g) return false;
  const targets = [c.diagnosis, ...c.aliases].map(normalize);
  return targets.some((t) => t === g || (g.length >= 5 && t.includes(g)) || t.split(" ").every((w) => g.includes(w)));
}
