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
  epidemiology: { label: "Epidemiology & Risk Factors", short: "Epidemiology", icon: "🌍", cost: 5 },
  history:      { label: "Medical History", short: "History", icon: "📜", cost: 8 },
  clinical:     { label: "Clinical Presentation", short: "Clinical", icon: "🩺", cost: 12 },
  labs:         { label: "Laboratory Findings", short: "Labs", icon: "🧪", cost: 15 },
  imaging:      { label: "Imaging & Diagnostics", short: "Imaging", icon: "🩻", cost: 20 },
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
    id: "appendicitis",
    diagnosis: "Acute Appendicitis",
    aliases: ["appendicitis", "acute appendicitis"],
    isPremium: false,
    clues: {
      epidemiology: [
        "Most common in patients aged 10–30, slight male predominance.",
        "Incidence roughly 1 in 1,000 person-years; lifetime risk ~7%.",
      ],
      history: [
        "No significant chronic illness; previously healthy.",
        "No prior abdominal surgeries; no family history of IBD.",
      ],
      clinical: [
        "Diffuse periumbilical pain migrating to the right lower quadrant over 12 hours.",
        "Anorexia, low-grade fever (38.1°C), nausea, and one episode of vomiting.",
        "Positive Rovsing, psoas and obturator signs on exam.",
      ],
      labs: [
        "WBC 14.8 × 10⁹/L with left shift (neutrophils 82%).",
        "CRP 65 mg/L; urinalysis unremarkable; β-hCG negative.",
      ],
      imaging: [
        "Ultrasound: non-compressible blind-ended tubular structure, diameter 9 mm.",
        "CT abdomen: dilated appendix with periappendiceal fat stranding, no perforation.",
      ],
    },
    visualClue: {
      prompt: "Axial CT showing dilated appendix with fat stranding",
      caption: "Abdominal CT — right lower quadrant",
    },
  },
  {
    id: "pe",
    diagnosis: "Pulmonary Embolism",
    aliases: ["pulmonary embolism", "pe", "acute pulmonary embolism"],
    isPremium: false,
    clues: {
      epidemiology: [
        "Female, 58 years old, recently returned from a 10-hour transatlantic flight.",
        "On combined oral contraceptives; BMI 31.",
      ],
      history: [
        "Left calf DVT diagnosed 4 years ago after orthopedic surgery.",
        "No known malignancy; no recent trauma or immobilization beyond travel.",
      ],
      clinical: [
        "Sudden pleuritic chest pain and dyspnea starting 2 hours ago.",
        "Tachycardia 118 bpm, SpO₂ 89% on room air, unilateral calf swelling.",
        "Clear lung fields on auscultation; JVP mildly elevated.",
      ],
      labs: [
        "D-dimer 4,200 ng/mL (markedly elevated).",
        "ABG: pH 7.48, PaO₂ 62 mmHg, PaCO₂ 30 mmHg — respiratory alkalosis with hypoxemia.",
        "Troponin mildly elevated; BNP elevated.",
      ],
      imaging: [
        "ECG: sinus tachycardia with S1Q3T3 pattern.",
        "CT pulmonary angiogram: filling defect in the right main pulmonary artery extending into segmental branches.",
      ],
    },
    visualClue: {
      prompt: "CT pulmonary angiogram showing saddle embolus",
      caption: "CTPA — pulmonary vasculature",
    },
  },
  {
    id: "dka",
    diagnosis: "Diabetic Ketoacidosis",
    aliases: ["diabetic ketoacidosis", "dka"],
    isPremium: false,
    clues: {
      epidemiology: [
        "19-year-old presenting to the ED after 3 days of polyuria and polydipsia.",
        "Known type 1 diabetes since age 12; recent viral gastroenteritis.",
      ],
      history: [
        "Missed several doses of long-acting insulin during illness.",
        "Prior hospitalization for similar decompensation 2 years ago.",
      ],
      clinical: [
        "Kussmaul respirations, fruity breath odor, dry mucous membranes.",
        "Abdominal pain, vomiting, altered mentation (GCS 13).",
        "Tachycardia 122 bpm, BP 96/58 mmHg — signs of volume depletion.",
      ],
      labs: [
        "Glucose 512 mg/dL; anion gap 24 mEq/L.",
        "ABG: pH 7.18, HCO₃⁻ 9 mEq/L — high anion-gap metabolic acidosis.",
        "Serum β-hydroxybutyrate 6.8 mmol/L; urine ketones 4+.",
        "Potassium 5.4 mEq/L (total body deplete despite value).",
      ],
      imaging: [
        "Chest X-ray unremarkable; no infiltrate.",
        "ECG: peaked T waves; no ischemic changes.",
      ],
    },
    visualClue: {
      prompt: "Illustration of ketone bodies and glucose in bloodstream",
      caption: "Metabolic derangement schematic",
    },
  },
  {
    id: "sle",
    diagnosis: "Systemic Lupus Erythematosus",
    aliases: ["sle", "systemic lupus erythematosus", "lupus"],
    isPremium: true,
    clues: {
      epidemiology: [
        "28-year-old woman of African descent, childbearing age.",
        "Female-to-male ratio ~9:1; peak onset 15–45 years.",
      ],
      history: [
        "6-month history of fatigue, alopecia, and oral ulcers.",
        "Two first-trimester miscarriages.",
      ],
      clinical: [
        "Symmetric small-joint arthralgias in hands and wrists without deformity.",
        "Malar rash sparing nasolabial folds, worsened by sun exposure.",
        "Serositis with mild pleuritic chest pain.",
      ],
      labs: [
        "ANA 1:640 homogeneous; anti-dsDNA and anti-Smith positive.",
        "Low C3 and C4; mild leukopenia and lymphopenia.",
        "Urinalysis: 2+ proteinuria, red cell casts.",
      ],
      imaging: [
        "Renal biopsy: diffuse proliferative glomerulonephritis (Class IV).",
        "Chest CT: small bilateral pleural effusions.",
      ],
    },
    visualClue: {
      prompt: "Malar butterfly rash across cheeks and nose bridge",
      caption: "Facial dermatologic finding",
    },
  },
  {
    id: "gbs",
    diagnosis: "Guillain-Barré Syndrome",
    aliases: ["guillain-barré syndrome", "guillain barre", "gbs", "aidp"],
    isPremium: true,
    clues: {
      epidemiology: [
        "42-year-old male, prior gastroenteritis 2 weeks ago (Campylobacter suspected).",
        "Annual incidence 1–2 per 100,000; slight male predominance.",
      ],
      history: [
        "No chronic neurologic disease; recent influenza vaccination unrelated by timing.",
      ],
      clinical: [
        "Ascending symmetric weakness starting in the legs, progressing over 5 days.",
        "Areflexia in lower extremities; mild facial diplegia.",
        "Preserved sensation to light touch; autonomic lability with fluctuating BP.",
      ],
      labs: [
        "CSF: protein 120 mg/dL with only 3 WBC/µL — albuminocytologic dissociation.",
        "Serum anti-GM1 antibodies positive.",
      ],
      imaging: [
        "Nerve conduction: prolonged distal latencies, conduction block, reduced velocities.",
        "MRI lumbar spine: enhancement of anterior nerve roots.",
      ],
    },
    visualClue: {
      prompt: "MRI lumbar spine showing enhancement of anterior nerve roots",
      caption: "MRI — lumbosacral nerve roots",
    },
  },
];
