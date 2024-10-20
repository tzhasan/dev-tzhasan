export const getFullProfile = async (userEmail) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/${userEmail}`)
  const profile = await response.json()
  return profile
  } catch (error) {
    console.log(error)
  }
}
export const getDefaultProfile = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profile/${process.env.NEXT_PUBLIC_DEFAULT_MAIL}`
    );
  const profile = await response.json()
  return profile
  } catch (error) {
    console.log(error)
  }
}
export const getProjects = async (userEmail) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projectDetails/${userEmail}`)
  const projects = await response.json()
  return projects
  } catch (error) {
    console.log(error)
  }
}