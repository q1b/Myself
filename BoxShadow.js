/*
=> flattenColorPalette
{
  rose:{                     {
    100:'hsl(0,100%,90%)',      rose-100:'hsl(0,100%,90%)',
    200:'hsl(0,100%,80%)', =>   rose-200:'hsl(0,100%,80%)',
    300:'hsl(0,100%,70%)',      rose-300:'hsl(0,100%,70%)',
  }                          }
}                          
*/
const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    ...Object.entries(colors).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  )

// hsl(120,100%,10%)

function createBBoxShadow(color, colors) {
  let boxShadow = {}
  boxShadow[color] = {}
  for (let i = 0; i < 9; i++) {
    boxShadow[color][
      `${i + 1}00`
    ] = `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${
      colors[color][`${i}00`]
    }`
  }
  return flattenColorPalette({ ...boxShadow })
}
function createDBoxShadow(color, colors) {
  let boxShadow = {}
  boxShadow[color+'D'] = {}
  for (let i = 0; i < 9; i++) {
    boxShadow[color+'D'][
      `${i + 1}00`
    ] = `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${
      colors[color][`${i}00`]
    },0px 0px 10px 3px ${colors[color][`${i}00`]}44`
  }
  return flattenColorPalette({ ...boxShadow })
}
function createBoxShadowStorage(colors) {
  let boxShadowStorage = {}
  function createAllColorsBoxShadow(colors) {
    Object.keys(colors)
      .filter((e) => e !== 'lightBlue')
      .forEach((e) => {
        boxShadowStorage = {
          ...createBBoxShadow(e, colors),
          ...boxShadowStorage,
        }
      })
  }
  function createAllDColorsBoxShadow(colors) {
    Object.keys(colors)
      .filter((e) => e !== 'lightBlue')
      .forEach((e) => {
        boxShadowStorage = {
          ...createDBoxShadow(e, colors),
          ...boxShadowStorage,
        }
      })
  }
  createAllColorsBoxShadow(colors)
  createAllDColorsBoxShadow(colors)
  return boxShadowStorage
}
module.exports = createBoxShadowStorage
