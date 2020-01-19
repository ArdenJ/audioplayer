const fontSizing = 1

export const theme = {
  // Defaults
  // Breakpoints
  small: {
    screenWidth: `(max-width: 699px)`,
    player: {
      box: '42px',
      height: '42px',
      width: '300px',
      fontSize: `${fontSizing * 0.6}rem`,
    },
  },
  medium: {
    screenWidth: `(min-width: 700px)`,
    player: {
      box: '50px',
      height: '50px',
      width: '360px',
      fontSize: `${fontSizing * 0.6}rem`,
    },
  },
  large: {
    screenWidth: `(min-width: 1200px)`,
    player: {
      box: '60px',
      height: '60px',
      width: '420px',
      fontSize: `${fontSizing}rem`,
    },
  },
}
