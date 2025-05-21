const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchPaintings() {
  const url = `https://api.harvardartmuseums.org/object?apikey=${VITE_API_KEY}&q=paintings&size=20`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return (
    data.records
      .map((painting) => ({
        id: painting.id,
        title: painting.title,
        image: painting.primaryimageurl || null,
        price: Math.floor(Math.random() * 100) + 1,
        description: painting.description || "No description available",
        artist: painting.people
          ? painting.people.map((person) => person.displayname || "Unknown") : "Unknown",
      }))
      .filter((p) => p.image && !p.title.toLowerCase().includes("untitled"))
      .map((p) => ({
        ...p,
        title: p.title
          .replace(/\s*\(.*?\).*/, "")
          .trim(),
      }))
  );
}
