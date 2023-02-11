export const isFormData = (data: any) => {
  return getType(data) === '[object FormData]'
}

export const getType = (data: any) => Object.prototype.toString.call(data)
