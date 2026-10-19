// Client reviews copied word for word from the Upwork profile (UPWORK_PROFILE_URL in src/lib/links.ts).
// Shown in their original language in every version of the site — do not translate or edit the text.
// Contract amounts, rates and hours are deliberately left out.
export interface UpworkReview {
  project: string; // contract title as shown on Upwork
  rating: number; // stars out of 5
  date: string; // review date, ISO
  text: string;
}

// Newest first.
export const UPWORK_REVIEWS: UpworkReview[] = [
  {
    project: "Full-Time Automation Developer",
    rating: 5,
    date: "2026-09-06",
    text: "Roman is great to work with! Good communication and is able to research and implement complex automations successfully",
  },
  {
    project: "Technical Specialist for Coding and Automation",
    rating: 5,
    date: "2026-04-21",
    text: "I really enjoy working with Roman. He is talented and communicates well, so I appreciate all the work we have done and hope we can work together for a long time.",
  },
];
