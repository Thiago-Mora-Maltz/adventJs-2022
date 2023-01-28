// En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

// Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

// Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

function getGiftsToRefill(a1, a2, a3) {
  const gifts = () => {
    const gifts = []
    a1.map((gift) => {
      !a2.includes(gift) && !a3.includes(gift) && gifts.push(gift)
    })
    a2.map((gift) => {
      !a1.includes(gift) && !a3.includes(gift) && gifts.push(gift)
    })
    a3.map((gift) => {
      !a1.includes(gift) && !a2.includes(gift) && gifts.push(gift)
    })
    return gifts
  }
  const getGiftsToRefill = gifts()
  return getGiftsToRefill.filter(
    (gift, index) => getGiftsToRefill.indexOf(gift) === index
  )
}
