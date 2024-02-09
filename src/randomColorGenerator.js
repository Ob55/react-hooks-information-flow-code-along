export function getRandomColor() {
  const letters = "123456789AB";
  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)];
  }
  return color;
}
