import dragon1 from "./dragons/dragon1.png";
import dragon2 from "./dragons/dragon2.png";
import dragon3 from "./dragons/dragon3.png";
import dragon4 from "./dragons/dragon4.png";
import dragon5 from "./dragons/dragon5.png";
import dragon6 from "./dragons/dragon6.png";
import dragon7 from "./dragons/dragon7.png";
import dragon8 from "./dragons/dragon8.png";

import axolotl1 from "./axolotl/axolotl1.png";
import axolotl2 from "./axolotl/axolotl2.png";
import axolotl3 from "./axolotl/axolotl3.png";
import axolotl4 from "./axolotl/axolotl4.png";
import axolotl5 from "./axolotl/axolotl5.png";
import axolotl6 from "./axolotl/axolotl6.png";
import axolotl7 from "./axolotl/axolotl7.png";
import axolotl8 from "./axolotl/axolotl8.png";
import axolotl9 from "./axolotl/axolotl9.png";
import axolotl10 from "./axolotl/axolotl10.png";

export interface Images {
  id: number;
  source: string;
  title: string;
  description: string;
}

export const dragonImages: Images[] = [
  {
    id: 1,
    source: dragon1,
    title: "Dragon 1",
    description: "Fire",
  },
  {
    id: 2,
    source: dragon2,
    title: "Dragon 2",
    description: "Earth",
  },
  {
    id: 3,
    source: dragon3,
    title: "Dragon 3",
    description: "Water",
  },
  {
    id: 4,
    source: dragon4,
    title: "Dragon 4",
    description: "Fire",
  },
  {
    id: 5,
    source: dragon5,
    title: "Dragon 5",
    description: "Pain",
  },
  {
    id: 6,
    source: dragon6,
    title: "Dragon 6",
    description: "Kindness",
  },
  {
    id: 7,
    source: dragon7,
    title: "Dragon 7",
    description: "Existence",
  },
  {
    id: 8,
    source: dragon8,
    title: "Dragon 8",
    description: "Hope",
  },
];

export const images: Images[] = [
  {
    id: 1,
    source: axolotl1,
    title: "Axolotl 1",
    description: "Angry",
  },
  {
    id: 2,
    source: axolotl2,
    title: "Axolotl 2",
    description: "Boring",
  },
  {
    id: 3,
    source: axolotl3,
    title: "Axolotl 3",
    description: "Oblivious",
  },
  {
    id: 4,
    source: axolotl4,
    title: "Axolotl 4",
    description: "Eating",
  },
  {
    id: 5,
    source: axolotl5,
    title: "Axolotl 5",
    description: "Food Coma",
  },
  {
    id: 6,
    source: axolotl6,
    title: "Axolotl 6",
    description: "Happy",
  },
  {
    id: 7,
    source: axolotl7,
    title: "Axolotl 7",
    description: "Greeting",
  },
  {
    id: 8,
    source: axolotl8,
    title: "Axolotl 8",
    description: "Pillow",
  },
  {
    id: 9,
    source: axolotl9,
    title: "Axolotl 9",
    description: "Laughing",
  },
  {
    id: 10,
    source: axolotl10,
    title: "Axolotl 10",
    description: "Love",
  },
];
