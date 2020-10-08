let baseUrl = '/otc-derivatif'


if (process.env.NODE_ENV === 'development') {
    baseUrl = process.env.REACT_APP_DEV_BASE_URL
}
if (process.env.NODE_ENV === 'production') {
    baseUrl = process.env.REACT_APP_PRO_BASE_URL
}

export { baseUrl };