export const colorCode = (resistor: string): number => {
  const resistanceValue = colorMap.get(resistor);
  if (resistanceValue === undefined) return -1;
  return resistanceValue;
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const colorMap = new Map<string, number>();
for (let i = 0; i < COLORS.length; i++) {
  colorMap.set(COLORS[i], i);
}
