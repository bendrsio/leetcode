function getHint(secret: string, guess: string): string {
  let usedSecret = new Set<number>();
  let usedGuess = new Set<number>();
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      usedSecret.add(i);
      usedGuess.add(i);
      bulls++;
      continue;
    }
  }
  for (let i = 0; i < secret.length; i++) {
    if (usedGuess.has(i)) continue;
    for (let j = 0; j < secret.length; j++) {
      if (usedSecret.has(j)) continue;
      if (secret[j] === guess[i]) {
        usedSecret.add(j);
        usedGuess.add(i);
        cows++;
        break;
      }
    }
  }
  return bulls.toString() + "A" + cows.toString() + "B";
}

// O(n^2) time complexity, CAN IMPROVE
