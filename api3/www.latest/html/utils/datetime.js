import { leftPad } from './str.js'

export const YEAR = 60 * 60 * 24 * 365

export const MONTH = 60 * 60 * 24 * 30

export const DAY = 60 * 60 * 24

export const HOUR = 60 * 60

export const MINUTE  = 60

export const getDate = (interval = 0, timestamp = Date.now()) => new Date(timestamp - (interval * 1000))

export const getTime = (interval = 0, timestamp = Date.now()) => {
  const d = getDate(interval, timestamp)
  return [
    `${d.getFullYear()}-${leftPad(d.getMonth() + 1, 2, '0')}-${leftPad(d.getDate(), 2, '0')}`,
    `${leftPad(d.getHours(), 2, '0')}:${leftPad(d.getMinutes(), 2, '0')}`,
  ].join('T')
}

export const getISO8601 = (interval = 0, timestamp = Date.now()) => getDate(interval, timestamp).toISOString()
