const currentTime = document.querySelector('#currentUTCTime')
const currentDate = document.querySelector('#currentDayOfTheWeek')

function formartTime(date) {
  const milliSeconds = date.getMilliseconds()
   const isAm = date.getHours() < 12

  return `${milliSeconds.toString().padStart(8, '0')}. ${
       isAm ? 'AM' : 'PM'}`
}

function formartDate(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`
}

setInterval(() => {
  const now = new Date()

  currentTime.textContent = formartTime(now)
  currentDate.textContent = formartDate(now)
}, 1000)
