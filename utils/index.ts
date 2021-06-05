export const getDate = (dateString: string) => {
  const year = dateString.substr(0, 4) + '/'
  const month = dateString.substr(4, 2) + '/'
  const day = dateString.substr(6)
  return year + month + day
}
