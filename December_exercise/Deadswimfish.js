function parse( data )
{
  let array = new Array(0)
  let value = 0
  for( let i = 0; i < data.length ; i++){
    if(data[i] === 'i' ) value += 1
    if(data[i] === 'd') value --
    if(data[i] === 's') value = value * value
    if(data[i] === 'o') array.push(value)
    
  }
  return array
}

parse("iiisdoso")