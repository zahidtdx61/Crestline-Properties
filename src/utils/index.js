export const getRandomInteger = (l, r) => {
  // Ensure l and r are integers and swap if l > r
  l = Math.ceil(l); // Round l up to nearest integer
  r = Math.floor(r); // Round r down to nearest integer
  
  // Swap l and r if l is greater than r
  if (l > r) {
      let temp = l;
      l = r;
      r = temp;
  }

  // Calculate a random integer between l and r (inclusive)
  return Math.floor(Math.random() * (r - l + 1)) + l;
}