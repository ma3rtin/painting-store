export async function fetchPaintings() {
  const url = "https://684867a0ec44b9f34940cdd1.mockapi.io/api/painting";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
}

export async function fetchPaintingById(id) {
  const url = `https://684867a0ec44b9f34940cdd1.mockapi.io/api/painting/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch painting");
  }

  const data = await response.json();
  return data;
}


export async function createPainting(painting) {
  const response = await fetch('https://684867a0ec44b9f34940cdd1.mockapi.io/api/painting', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(painting),
  });

  return response;
}

export async function updatePainting(id, updatedData) {
  const response = await fetch(`https://684867a0ec44b9f34940cdd1.mockapi.io/api/painting/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error("Failed to update painting");
  }

  return response;
}

export async function deletePainting(id) {
  const response = await fetch(`https://684867a0ec44b9f34940cdd1.mockapi.io/api/painting/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error("Failed to delete painting");
  }

  return response;
}

