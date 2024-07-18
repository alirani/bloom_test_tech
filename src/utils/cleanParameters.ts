export const cleanEmptyParameters = (params: { [key: string]: string }) => {
  const isEmpty = (value: string) => value == null || (typeof value === 'string' && value.trim().length === 0)
  const filterEmpty = Object.entries(params).filter(([_, v]) => !isEmpty(v))

  return Object.fromEntries(filterEmpty)
}