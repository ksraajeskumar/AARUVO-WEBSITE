export type Rgb = [number, number, number];

export type BackboneTheme = {
  id: string;
  label: string;
  icon: "predawn" | "sunrise" | "day" | "dusk" | "sunset" | "night";
  /** Radial wash painted behind the whole section. */
  bg: string;
  /** Strand colour ramp: near end of the strand → tip. */
  ramp: [Rgb, Rgb];
  dark: boolean;
};

/**
 * Times of day, in the order the picker lists them. Each one repaints the
 * wash, the strand ramp and the type, so the section reads as the same scene
 * under different light rather than as a recoloured chart.
 */
export const THEMES: BackboneTheme[] = [
  {
    id: "predawn",
    label: "Pre-dawn",
    icon: "predawn",
    bg: "radial-gradient(62% 56% at 50% 92%, #a5b0dd 0%, #d6dcee 44%, #f1f3f9 100%)",
    ramp: [
      [150, 160, 210],
      [46, 52, 116],
    ],
    dark: false,
  },
  {
    id: "sunrise",
    label: "Sunrise",
    icon: "sunrise",
    bg: "radial-gradient(62% 56% at 50% 92%, #ffc39c 0%, #ffe0d0 42%, #fdf5f0 100%)",
    ramp: [
      [252, 178, 138],
      [178, 60, 84],
    ],
    dark: false,
  },
  {
    id: "daytime",
    label: "Daytime",
    icon: "day",
    bg: "radial-gradient(62% 56% at 50% 92%, #9dc8fa 0%, #d8e8fc 44%, #f6f9fd 100%)",
    ramp: [
      [147, 197, 253],
      [26, 62, 200],
    ],
    dark: false,
  },
  {
    id: "dusk",
    label: "Dusk",
    icon: "dusk",
    bg: "radial-gradient(62% 56% at 50% 92%, #b7a9ef 0%, #ded6f6 44%, #f5f3fc 100%)",
    ramp: [
      [176, 158, 236],
      [72, 52, 158],
    ],
    dark: false,
  },
  {
    id: "sunset",
    label: "Sunset",
    icon: "sunset",
    bg: "radial-gradient(62% 56% at 50% 92%, #f5a6bb 0%, #fbd4cc 42%, #fdf3f0 100%)",
    ramp: [
      [250, 150, 116],
      [156, 48, 132],
    ],
    dark: false,
  },
  {
    id: "night",
    label: "Night",
    icon: "night",
    bg: "radial-gradient(60% 54% at 50% 94%, #8b7ef5 0%, #4b40b4 42%, #241f6b 100%)",
    ramp: [
      [255, 255, 255],
      [206, 214, 255],
    ],
    dark: true,
  },
];
