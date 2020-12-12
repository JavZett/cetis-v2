export function addOpacityColor(color, opacidad) {
  const opacityHex = Math.round(opacidad * 255).toString(16);
  return `${color}${opacityHex}`;
}
