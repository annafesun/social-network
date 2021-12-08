export const required = value => Boolean(value) ? undefined : 'Field is required'

export const maxLenghtCreator = maxLenght => value => value.length > maxLenght
    ? `Max lenght is ${maxLenght} symbols`
    : undefined


