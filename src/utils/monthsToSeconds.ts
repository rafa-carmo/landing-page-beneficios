const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

export function countDown(year: number, month: number) {
  let count_down = new Date(year, month + 1, 0)

  let now = new Date(Date.now()).getTime()
  let diff = count_down.getTime() - now

  const days = String(Math.floor(diff / day))
  const hours = String(Math.floor((diff % day) / hour)).padStart(2, '0')
  const minutes = String(Math.floor((diff % hour) / minute)).padStart(2, '0')
  const seconds = String(Math.floor((diff % minute) / second)).padStart(2, '0')

  return {
    days,
    hours,
    minutes,
    seconds
  }
}
