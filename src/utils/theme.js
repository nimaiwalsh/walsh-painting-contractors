export const COLOURS = {
  primary: '#3A73A5',
  primaryLight: '#8AB3D8',
  primaryLightRGB: '138, 179, 216',
  primaryDark: '#10487A',
  primaryDarkRGB: '16, 72, 122',
  greyLight1: '#faf9f9',
  greyLight2: '#f4f2f2',
  greyLight3: '#f0eeee',
  greyLight4: '#ccc',
  greyDark1: '#333',
  greyDark2: '#777',
  greyDark3: '#999',

  white: '#FFF',
  whiteRGB: '255, 255, 255',
  black: '#000',
  blackRGB: '0, 0, 0',

  shadowDark: '0 2rem 6rem rgba(0,0,0,0.3)',
  shadowLight: '0 2rem 5rem rgba(0,0,0,.06)',
}

export const CONTAINER = {
  //120 rem is 120 x 1200px
  maxWidth: '120rem',
}

export const LINE = `1px solid ${COLOURS.greyLight2}`

export const BREAKPOINTS = {
  largest: '75em', //1200px (1200 / 16)
  large: '68.75em', //1100px (1100 / 16)
  medium: '56.25em', //900px (900 / 16)
  small: '37.5em', //600px (600 / 16)
  smallest: '31.25em', //500px (500 / 16)
}
