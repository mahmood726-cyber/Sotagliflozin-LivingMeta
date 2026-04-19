# E156 Protocol — `Sotagliflozin-LivingMeta`

This repository is the source code and dashboard backing a cluster of E156 micro-papers on the [E156 Student Board](https://mahmood726-cyber.github.io/e156/students.html).

**2 papers share this repo.** Each is listed below with its own title, estimand, dataset, 156-word body, and submission metadata (authorship, ethics, references, target journal, etc.). Students claiming any of these papers should use the body + metadata for their specific paper number and submit separately.

## Papers in this repo

| Paper # | Title |
| ---: | :--- |
| `[371]` | Sotagliflozin SGLT1/2i: A Transparent Living Meta-Analysis v13 |
| `[403]` | Sotagliflozin in Heart Failure and Diabetes: Living Meta-Analysis of Randomized Trials |

---

## `[371]` Sotagliflozin SGLT1/2i: A Transparent Living Meta-Analysis v13

**Type:** living-ma  |  ESTIMAND: HR for CV composite  
**Data:** 2 RCTs (SCORED, SOLOIST-WHF), 11,806 patients

### 156-word body

Does sotagliflozin, a dual SGLT1 and SGLT2 inhibitor, reduce cardiovascular events in type 2 diabetes or acute heart failure? Two randomized placebo-controlled trials deployed in this living meta-analysis (SCORED, SOLOIST-WHF) enrolled 11,806 patients with type 2 diabetes or recent heart failure decompensation. Inverse-variance fixed-effect meta-analysis pooled hazard ratios on the log scale across the two deployed trials. The pooled hazard ratio for the primary cardiovascular composite was 0.72 (95% CI 0.63 to 0.82), with no detectable heterogeneity (I-squared 0 percent). SCORED (HR 0.74) and SOLOIST-WHF (HR 0.67) both favour sotagliflozin, with consistent direction across chronic type 2 diabetes and acute heart failure populations. Sotagliflozin reduces cardiovascular events by approximately twenty-eight percent across chronic diabetes and acute heart failure settings. SOLOIST-WHF was terminated early, acute post-discharge windows may differ from chronic use, and ketoacidosis risk requires continued monitoring.

### Submission metadata

```
Corresponding author: Mahmood Ahmad <mahmood.ahmad2@nhs.net>
ORCID: 0000-0001-9107-3704
Affiliation: Tahir Heart Institute, Rabwah, Pakistan

Links:
  Code:      https://github.com/mahmood726-cyber/Sotagliflozin-LivingMeta
  Protocol:  https://github.com/mahmood726-cyber/Sotagliflozin-LivingMeta/blob/main/E156-PROTOCOL.md
  Dashboard: https://mahmood726-cyber.github.io/sotagliflozin_livingmeta/

References (topic pack: fallback (any MA paper)):
  1. Page MJ, McKenzie JE, Bossuyt PM, et al. 2021. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ. 372:n71. doi:10.1136/bmj.n71
  2. Higgins JPT, Thomas J, Chandler J, et al. (eds). 2023. Cochrane Handbook for Systematic Reviews of Interventions version 6.4. Cochrane. Available from www.training.cochrane.org/handbook

Data availability: No patient-level data used. Analysis derived exclusively
  from publicly available aggregate records. All source identifiers are in
  the protocol document linked above.

Ethics: Not required. Study uses only publicly available aggregate data; no
  human participants; no patient-identifiable information; no individual-
  participant data. No institutional review board approval sought or required
  under standard research-ethics guidelines for secondary methodological
  research on published literature.

Funding: None.

Competing interests: MA serves on the editorial board of Synthēsis (the
  target journal); MA had no role in editorial decisions on this
  manuscript, which was handled by an independent editor of the journal.

Author contributions (CRediT):
  [STUDENT REWRITER, first author] — Writing – original draft, Writing –
    review & editing, Validation.
  [SUPERVISING FACULTY, last/senior author] — Supervision, Validation,
    Writing – review & editing.
  Mahmood Ahmad (middle author, NOT first or last) — Conceptualization,
    Methodology, Software, Data curation, Formal analysis, Resources.

AI disclosure: Computational tooling (including AI-assisted coding via
  Claude Code [Anthropic]) was used to develop analysis scripts and assist
  with data extraction. The final manuscript was human-written, reviewed,
  and approved by the author; the submitted text is not AI-generated. All
  quantitative claims were verified against source data; cross-validation
  was performed where applicable. The author retains full responsibility for
  the final content.

Preprint: Not preprinted.

Reporting checklist: PRISMA 2020.

Target journal: ◆ Synthēsis (https://www.synthesis-medicine.org/index.php/journal)
  Section: Short Meta-Analysis — submit the 156-word E156 body verbatim as the main text.
  The journal caps main text at ≤400 words; E156's 156-word, 7-sentence
  contract sits well inside that ceiling. Do NOT pad to 400 — the
  micro-paper length is the point of the format.

Manuscript license: CC-BY-4.0.
Code license: MIT.

SUBMITTED: [ ]


=== NEW PROJECT: global_stats ===
CURRENT BODY: We apply Bayesian hierarchical models to analyze global cardiovascular disease data from IHME, WHO, World Bank, and ClinicalTrials.gov. Python pipelines integrate open-access data sources into deterministic datasets. R and Stan generate certified posterior distributions using robust spatial-temporal priors. Our methodology ensures reproducibility via isolated environment fixtures. An interactive HTML dashboard provides public access to certified numbers. TruthCert validates all claims against cryptographically hashed data locators. This 156-word micro-paper ships alongside our GitHub Pages platform.
YOUR REWRITE: 
SUBMITTED: [ ]
```

---

## `[403]` Sotagliflozin in Heart Failure and Diabetes: Living Meta-Analysis of Randomized Trials

**Type:** living-ma  |  ESTIMAND: HR for CV death or HF hospitalization  
**Data:** 2 RCTs (SOLOIST-WHF, SCORED), 11,806 patients, CT.gov sourced

### 156-word body

Does sotagliflozin, a dual SGLT1 and SGLT2 inhibitor, reduce cardiovascular events in patients with heart failure or type 2 diabetes and chronic kidney disease? Two randomized placebo-controlled trials deployed in this living meta-analysis (SOLOIST-WHF, SCORED) enrolled 11,806 patients and evaluated sotagliflozin 200 to 400 mg daily with median follow-up of nine to sixteen months. Inverse-variance fixed-effect meta-analysis pooled hazard ratios on the log scale across the two deployed trials. The pooled hazard ratio for cardiovascular death or heart failure hospitalisation was 0.72 (95% CI 0.63 to 0.82), with no detectable heterogeneity (I-squared 0 percent). SCORED (HR 0.74) and SOLOIST-WHF (HR 0.67) both favoured sotagliflozin, confirming robustness across worsening heart failure and stable diabetic chronic kidney disease populations. Sotagliflozin demonstrates a clinically meaningful twenty-eight percent reduction in the composite cardiovascular endpoint. Both trials were terminated early due to funding loss, raising uncertainty about long-term efficacy and safety beyond sixteen months.

### Submission metadata

```
Corresponding author: Mahmood Ahmad <mahmood.ahmad2@nhs.net>
ORCID: 0000-0001-9107-3704
Affiliation: Tahir Heart Institute, Rabwah, Pakistan

Links:
  Code:      https://github.com/mahmood726-cyber/Sotagliflozin-LivingMeta
  Protocol:  https://github.com/mahmood726-cyber/Sotagliflozin-LivingMeta/blob/main/E156-PROTOCOL.md
  Dashboard: https://mahmood726-cyber.github.io/sotagliflozin_livingmeta/

References (topic pack: restricted mean survival time / survival meta-analysis):
  1. Royston P, Parmar MK. 2013. Restricted mean survival time: an alternative to the hazard ratio for the design and analysis of randomized trials with a time-to-event outcome. BMC Med Res Methodol. 13:152. doi:10.1186/1471-2288-13-152
  2. Tierney JF, Stewart LA, Ghersi D, Burdett S, Sydes MR. 2007. Practical methods for incorporating summary time-to-event data into meta-analysis. Trials. 8:16. doi:10.1186/1745-6215-8-16

Data availability: No patient-level data used. Analysis derived exclusively
  from publicly available aggregate records. All source identifiers are in
  the protocol document linked above.

Ethics: Not required. Study uses only publicly available aggregate data; no
  human participants; no patient-identifiable information; no individual-
  participant data. No institutional review board approval sought or required
  under standard research-ethics guidelines for secondary methodological
  research on published literature.

Funding: None.

Competing interests: MA serves on the editorial board of Synthēsis (the
  target journal); MA had no role in editorial decisions on this
  manuscript, which was handled by an independent editor of the journal.

Author contributions (CRediT):
  [STUDENT REWRITER, first author] — Writing – original draft, Writing –
    review & editing, Validation.
  [SUPERVISING FACULTY, last/senior author] — Supervision, Validation,
    Writing – review & editing.
  Mahmood Ahmad (middle author, NOT first or last) — Conceptualization,
    Methodology, Software, Data curation, Formal analysis, Resources.

AI disclosure: Computational tooling (including AI-assisted coding via
  Claude Code [Anthropic]) was used to develop analysis scripts and assist
  with data extraction. The final manuscript was human-written, reviewed,
  and approved by the author; the submitted text is not AI-generated. All
  quantitative claims were verified against source data; cross-validation
  was performed where applicable. The author retains full responsibility for
  the final content.

Preprint: Not preprinted.

Reporting checklist: PRISMA 2020.

Target journal: ◆ Synthēsis (https://www.synthesis-medicine.org/index.php/journal)
  Section: Short Meta-Analysis — submit the 156-word E156 body verbatim as the main text.
  The journal caps main text at ≤400 words; E156's 156-word, 7-sentence
  contract sits well inside that ceiling. Do NOT pad to 400 — the
  micro-paper length is the point of the format.

Manuscript license: CC-BY-4.0.
Code license: MIT.

SUBMITTED: [ ]
```


---

_Auto-generated from the workbook by `C:/E156/scripts/create_missing_protocols.py`. If something is wrong, edit `rewrite-workbook.txt` and re-run the script — it will overwrite this file via the GitHub API._