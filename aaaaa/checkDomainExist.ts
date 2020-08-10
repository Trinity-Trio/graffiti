const request = async (url:string) => {
  try{
    console.log(url)
    const res = await fetch(url)

    console.log(res.status)
    if (res.status === 200) {
      Deno.writeTextFile('./index.html', `<a href="${url}">${url}</a><br/>\n`, { append: true })
    } else {
      Deno.writeTextFile('./index.html', `${url}<br/>\n`, { append: true })
    }
  } catch (error) {
    console.log(error)
    Deno.writeTextFile('./index.html', `${url} <br/>\n`, { append: true })
  }
  
}

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'v', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']

const DEPTH = 5

let nowDepth = 0

Deno.writeTextFile('./index.html', '', {
  create: true
})

for (const a1 of alphabets) {
  for (const a2 of alphabets) {
    for (const a3 of alphabets) {
      for (const a4 of alphabets) {
        for (const a5 of alphabets) {
          await request(`http://${a1}${a2}${a3}${a4}${a5}.com`) 
        }
      }
    }
  }
}
