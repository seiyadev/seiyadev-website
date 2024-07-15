import GridLayout from "react-grid-layout";
import "../index.css";
import Card from "./Card";

interface ContentCardInterface {
  key: string;
  component: JSX.Element;
}

const cardKeys = {
  PERSONAL_INFO: "a",
  FEATURED: "b",
  SONG: "c",
  PROJECTS: "d",
  STACK: "e",
  EXPERIENCE: "f",
  HOW_STARTED: "g",
  ACADEMIC_TRAJECTORY: "h",
  CONTACT: "i",
};

const contentCards: ContentCardInterface[] = [
  {
    key: cardKeys.PERSONAL_INFO,
    component: <>Personal info</>,
  },
  {
    key: cardKeys.FEATURED,
    component: <>Featured</>,
  },
  {
    key: cardKeys.SONG,
    component: <>Song</>,
  },
  {
    key: cardKeys.PROJECTS,
    component: <>Projects</>,
  },
  {
    key: cardKeys.STACK,
    component: <>Stack</>,
  },
  {
    key: cardKeys.EXPERIENCE,
    component: <>Experience</>,
  },
  {
    key: cardKeys.HOW_STARTED,
    component: <>How it started vs. How it's going</>,
  },
  {
    key: cardKeys.ACADEMIC_TRAJECTORY,
    component: <>Academic trajectory</>,
  },
  {
    key: cardKeys.CONTACT,
    component: <>Contact</>,
  },
];

function GridDragLayout() {
  const layout = [
    { i: cardKeys.PERSONAL_INFO, x: 0, y: 0, w: 4, h: 7 },
    { i: cardKeys.FEATURED, x: 5, y: 0, w: 3, h: 7 },
    { i: cardKeys.SONG, x: 0, y: 2, w: 4, h: 3 },
    { i: cardKeys.PROJECTS, x: 0, y: 3, w: 4, h: 8 },
    { i: cardKeys.STACK, x: 5, y: 1, w: 3, h: 11 },
    { i: cardKeys.EXPERIENCE, x: 0, y: 4, w: 3, h: 7 },
    { i: cardKeys.ACADEMIC_TRAJECTORY, x: 3, y: 4, w: 4, h: 7 },
    { i: cardKeys.HOW_STARTED, x: 0, y: 5, w: 4, h: 6 },
    { i: cardKeys.CONTACT, x: 5, y: 5, w: 3, h: 6 },
  ];

  return (
    <GridLayout
      layout={layout}
      cols={7}
      rowHeight={32}
      width={768}
      style={{
        maxWidth: 768,
        margin: "auto",
      }}
      isResizable={false}
    >
      {contentCards.map((contentCard) => (
        <Card key={contentCard.key}>{contentCard.component}</Card>
      ))}
    </GridLayout>
  );
}

export default GridDragLayout;
