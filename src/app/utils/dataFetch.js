export const getFullProfile = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getprofile`)
  const profile = await response.json()
  return profile
  } catch (error) {
    console.log(error)
  }
}
