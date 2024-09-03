const searchUrl =
  "https://qbz.gov.al/alfresco/api/-default-/public/search/versions/1/search";
const contentBaseUrl =
  "https://qbz.gov.al/alfresco/api/-default-/public/alfresco/versions/1/nodes";

const headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
});

const body = {
  query: {
    // Query for items from 2000 to 2024
    query: "qbz:date:['2000-01-01T01:00:00Z' TO '2024-12-31T23:59:59Z']",
  },
  paging: {
    // Request up to 5000 items
    maxItems: 5000,
  },
};

async function downloadContentById(id: string) {
  const url = `${contentBaseUrl}/${id}/content`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Failed to fetch ${url}`);
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  await Deno.mkdir("./gazettes", { recursive: true });

  await Deno.writeFile(`./gazettes/${id}.pdf`, uint8Array);
  console.log(`File ${id}.pdf downloaded successfully`);
}

async function main() {
  const response = await fetch(searchUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error("Failed to perform search request");
    return;
  }

  const data = await response.json();

  for (const entry of data.list.entries) {
    const id = entry?.entry?.id;
    if (!id) return;

    await downloadContentById(id);
  }
}

main().catch(console.error);
