import gettingSoberCover from "@/assets/getting-sober-cover.jpg.asset.json";
import play1 from "@/assets/book-1.jpg";
import meetingJesusPoster from "@/assets/meeting-jesus-poster.jpg.asset.json";
import play3 from "@/assets/book-3.jpg";
import tomorrowPlaybill from "@/assets/tomorrow-playbill.jpg.asset.json";
import hutchinsonPlaybill from "@/assets/hutchinson-playbill.jpg.asset.json";


export type Book = {
  id: string;
  title: string;
  genre: string;
  released: string;
  description: string;
  cover: string;
};

export const books: Book[] = [
  {
    id: "getting-sober-on-sibley-and-third",
    title: "Getting Sober on Sibley and Third",
    genre: "Fiction",
    released: "Out now",
    description:
      "On a rain-slicked corner where the liquor store light meets the church steeple, one woman's reckoning with addiction becomes a story about grace, memory, and the long walk back to herself.",
    cover: gettingSoberCover.url,
  },
  {
    id: "a-dream-that-never-sleeps",
    title: "A Dream That Never Sleeps",
    genre: "Stage Play",
    released: "Live stage production",
    description:
      "A stage work about ambition carried across generations — the dreams we inherit, the ones we refuse, and the ones that keep us awake until they are finally spoken aloud.",
    cover: play1,
  },
  {
    id: "meeting-jesus-at-3pm",
    title: "Meeting Jesus at 3pm",
    genre: "Stage Play",
    released: "CASOE Youth Theater",
    description:
      "A faith-rooted drama set in the ordinary afternoon hours, where an unremarkable appointment becomes the turning point of a life. Staged by CASOE Youth Theater at the Charles H. Wright Museum of African American History, Detroit.",
    cover: meetingJesusPoster.url,
  },
  {
    id: "aint-nobody-stoppin-this-train",
    title: "Ain't Nobody Stoppin' This Train",
    genre: "Stage Play",
    released: "Live stage production",
    description:
      "A rousing ensemble production about momentum, community, and the unstoppable pull forward when a people decide to move together.",
    cover: play3,
  },
  {
    id: "tomorrow-well-cross-the-ocean",
    title: "Tomorrow We'll Cross The Ocean",
    genre: "Stage Play",
    released: "CASOE Youth Theater, Detroit",
    description:
      "Written and directed by Janice Smith for CASOE Youth Theater — a story of young people standing at the water's edge of their own futures, and the crossing they make together.",
    cover: tomorrowPlaybill.url,
  },
  {
    id: "the-boy-from-hutchinson-street",
    title: "The Boy From Hutchinson Street",
    genre: "Stage Play",
    released: "CASOE Theater Company",
    description:
      "A Detroit coming-of-age story staged by CASOE Theater Company's Creative Performing Arts program, written by Janice Smith.",
    cover: hutchinsonPlaybill.url,
  },
];

export const featuredBook = books[0]!;


export const testimonials = [
  {
    quote:
      "Janice writes recovery the way it actually happens — in small hours, on ordinary street corners, one honest sentence at a time.",
    name: "Detroit Reader's Circle",
    role: "Community book club",
  },
  {
    quote:
      "I read it in one sitting and then called my sister. It named something I had never been able to say out loud.",
    name: "Marianne Ellis",
    role: "Reader, Michigan",
  },
  {
    quote:
      "Her stage work has the same heartbeat as her prose: faith, grit, and an ear for how people really talk.",
    name: "Julian Vance",
    role: "Theatre director",
  },
];

export const news = [
  {
    title: "Getting Sober on Sibley and Third is out now",
    date: "2026",
    excerpt:
      "Janice Smith's novel of addiction, faith and return is available in paperback and digital editions.",
    tag: "New release",
  },
  {
    title: "CASOE, Inc. announces a new season of training",
    date: "2026",
    excerpt:
      "The Creative Arts Spirit of Excellence performing arts center continues its youth and adult training programs.",
    tag: "CASOE",
  },
  {
    title: "Stage works return to the boards",
    date: "2026",
    excerpt:
      "A Dream That Never Sleeps and Ain't Nobody Stoppin' This Train are being staged for new live audiences.",
    tag: "Theatre",
  },
];

export const timeline = [
  {
    year: "Detroit",
    title: "Born and raised",
    text: "Born in Detroit, Michigan and raised by a single father — the city and that household shaped the voice in every page since.",
  },
  {
    year: "Undergrad",
    title: "University of Michigan",
    text: "A degree in Psychology, and a lasting curiosity about why people do what they do.",
  },
  {
    year: "Graduate",
    title: "University of Phoenix",
    text: "A Master's degree in Management, pairing the study of people with the discipline of leading them.",
  },
  {
    year: "2004",
    title: "CASOE, Inc. is founded",
    text: "Founder of Creative Arts Spirit of Excellence, a 501(c)(3) nonprofit performing arts organization and training center.",
  },
  {
    year: "Stage",
    title: "Plays for live production",
    text: "A Dream That Never Sleeps, Meeting Jesus at 3pm, and Ain't Nobody Stoppin' This Train are written for live stage audiences.",
  },
  {
    year: "Now",
    title: "Getting Sober on Sibley and Third",
    text: "A novel that carries the same honesty as the stage work, written for readers walking their own long road.",
  },
];

export const awards = [
  { year: "2004", name: "Founder, CASOE, Inc. — 501(c)(3) nonprofit" },
  { year: "Theatre", name: "Playwright, three produced live stage works" },
  { year: "Education", name: "B.A. Psychology, University of Michigan" },
  { year: "Education", name: "M.A. Management, University of Phoenix" },
];
