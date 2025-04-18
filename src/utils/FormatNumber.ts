const formatNumber = (number: number) => {
    if (number < 1000) return number.toFixed(2)
    if (number < 1000000) return (number / 1000).toFixed(1) + 'k'
    return (number / 1000000).toFixed(1) + 'm'
}

export default formatNumber


