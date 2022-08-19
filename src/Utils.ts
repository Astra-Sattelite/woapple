export const range = (max: number) => [...Array((max + 1)).keys()].slice(1)

export const scrollR = (n: number, elemId: string) => {
  const elem = document.getElementById(elemId)!
  elem.scrollLeft = elem.scrollLeft + n;
}

export const formatDate = (date: Date): string => {
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format

  const month: string = monthName(date)

  const formatedDate = `${month} ${date.getDay()}, ${date.getFullYear()}`

  return formatedDate
}