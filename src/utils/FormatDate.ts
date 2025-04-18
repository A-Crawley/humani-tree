const formatDate = (date: number) => {
    const lastDigit = date % 10
    switch (lastDigit) {
        case 1:
            return `${date}st`
        case 2:
            return `${date}nd`
        case 3:
            return `${date}rd`
        default:
            return `${date}th`
    }
}

export default formatDate