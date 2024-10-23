export const getFullProfile = async (userEmail) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/profile/${userEmail}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }

    const profile = await response.json();
    return profile;
  } catch (error) {
    console.error("Error fetching full profile:", error);
  }
};
export const getDefaultProfile = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/profile/${process.env.NEXT_PUBLIC_DEFAULT_MAIL}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }

    const profile = await response.json();
    return profile;
  } catch (error) {
    console.error("Error fetching full profile:", error);
  }
};
export const getProjects = async (userEmail) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/projectDetails/${userEmail}`
    );
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.log(error);
  }
};
