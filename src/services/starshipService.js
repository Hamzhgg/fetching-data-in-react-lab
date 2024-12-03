const BASE_URL = "https://swapi.dev/api/starships/";

export async function fetchStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch starships.");
    return response.json();
  } catch (error) {
    console.error("Error fetching starships:", error);
    return { results: [] }; // Return an empty list in case of error
  }
}
