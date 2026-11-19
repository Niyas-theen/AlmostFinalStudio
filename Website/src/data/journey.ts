/**
 * Studio journey figures shown in the home-page "Success Since Our Establishment" section.
 * OWNER-SUPPLIED: these numbers were provided by the studio owner and have NOT been independently verified.
 * Edit here only; the component and styles do not need to change.
 * Note for the owner: the yearly figures add up to 75+ clients, while the summary below says 120+ clients served.
 */
export interface JourneyYear { year: number; clients: number; }
export interface JourneySummary { value: number; suffix: string; label: string; }

export const journeyHeading = 'Success Since Our Establishment';
export const journeyText = 'A growing creative journey built through design, development, and digital solutions for clients across multiple industries.';

export const journeyYears: JourneyYear[] = [
  { year: 2021, clients: 6 },
  { year: 2022, clients: 9 },
  { year: 2023, clients: 12 },
  { year: 2024, clients: 14 },
  { year: 2025, clients: 16 },
  { year: 2026, clients: 18 },
];

export const journeySummary: JourneySummary[] = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 120, suffix: '+', label: 'Clients Served' },
];
