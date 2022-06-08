//
// Relative Time Ago
// ...
//

type TUnites = {
    label: string
    seconds: number
}

type TCalculateTimeDifference = {
    interval: number
    unit: string
}

const units: Array<TUnites> = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hours', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
]

function calculateTimeDifference(time: number): TCalculateTimeDifference {
    // eslint-disable-next-line no-restricted-syntax
    for (const { label, seconds } of units) {
        const interval = Math.floor(time / seconds)
        if (interval >= 1) {
            return {
                interval,
                unit: label,
            }
        }
    }
    return {
        interval: 0,
        unit: '',
    }
}

//
// timeAgo function takes only Date argument.
// Date argument can be in string, number or Date format.
// Example returns "12 hours ago & 2 year ago".
//

function timeAgo(date: string | number | Date): string {
    const current = new Date().valueOf()
    const then = new Date(date).valueOf()
    const time = Math.floor((current - then) / 1000)
    const { interval, unit } = calculateTimeDifference(time)
    const suffix = interval === 1 ? '' : 's'
    return `${interval} ${unit}${suffix} ago`
}

export default timeAgo

//
// END
//
