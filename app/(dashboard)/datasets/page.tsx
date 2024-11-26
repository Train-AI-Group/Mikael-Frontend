import clientPromise from "@/lib/mongodb";
import { SearchDatasets } from "@/features/SearchDatasets/SearchDatasets"
import { DatasetsHeading } from "@/components/DatasetsHeading/DatasetsHeading"

async function fetchDatasets() {
  interface Transaction {
    _id: string;
    transaction_id: string;
    time: Date;
  }

  let txn_ids: Transaction[] = [];

  try {
    const client = await clientPromise;
    const db = client.db("arweave-hackathon-db");
    txn_ids = await db.collection("transactions").find({}).toArray();
  } catch (e) {
    console.error(e);
  }

  const txn_ids_array = txn_ids.map(item => item.transaction_id);
  let data = await fetch("http://localhost:3000/auth/fetchAllDataset", {
    method: "POST",
    body: JSON.stringify({
      "transactionIds": txn_ids_array,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let response = await data.json();
  console.log('res', response);

  // Decode the base64-encoded tags
  response.transactions.forEach(transaction => {
    transaction.tags.forEach(tag => {
      tag.name = atob(tag.name);
      tag.value = atob(tag.value);
    });
  });
  return response;
}

export default async function Dashboard() {
  const datasets = await fetchDatasets();
  function bytesToGB(bytes: number): string {
    // Convert bytes to gigabytes
    const gigabytes = bytes / (1024 ** 3); // or 1073741824
    // Convert the result to a string and slice the first 5 characters
    return gigabytes.toString().slice(0, 6);
  }

  return (
    <>
      <DatasetsHeading
        title="Explore Datasets"
        description="Explore and utilize a diverse range of machine learning models, from advanced diffusion models to cutting-edge large language models (LLMs), tailored to meet various needs and applications."
      />
      <SearchDatasets datasets={datasets.transactions} />
    </>
  )
}
