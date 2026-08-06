export type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  alt: string;
};

// Screenshots of React previews generated and served by Anvil. Stored as
// local assets under public/showcase so the section stays static.
const showcaseItems: ShowcaseItem[] = [
  {
    id: "tame-impala",
    title: "Artist landing page",
    description:
      "A kaleidoscopic single-page fan experience with editorial typography and album artwork.",
    image: "/showcase/Tame_impala.png",
    width: 3024,
    height: 1656,
    alt: "Dark navy landing page for Tame Impala with large serif headline and glowing album art",
  },
  {
    id: "gravity-studio",
    title: "Creative studio site",
    description:
      "A dark studio homepage pairing oversized display type with 3D product art.",
    image: "/showcase/Orbit.png",
    width: 3024,
    height: 1658,
    alt: "Black studio homepage reading “Ideas with gravity” beside an orange 3D cube",
  },
  {
    id: "video-platform",
    title: "Video platform home",
    description:
      "A familiar video browsing interface with category chips, sidebar navigation, and a thumbnail grid.",
    image: "/showcase/Youtube.png",
    width: 3024,
    height: 1652,
    alt: "Video platform home page with search bar, sidebar, category chips, and a grid of video thumbnails",
  },
];

export function getShowcaseItems(): ShowcaseItem[] {
  return showcaseItems;
}
