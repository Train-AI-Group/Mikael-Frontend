
import { SearchDatasets } from "@/features/SearchDatasets/SearchDatasets"
import { DatasetsHeading } from "@/components/DatasetsHeading/DatasetsHeading"
import { Dataset } from "@/components/Dataset/Dataset"

async function fetchDatasets() {
  //TODO: work on making the 
  // let data = await fetch("http://localhost:3000/auth/fetchAllDataset", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     "transactionIds": [
  //       "uElDx6rnRun9ZgxrxhE6DvNFNzY7zZeRMB1me8xSuHU"
  //     ],
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  //using json as it's simpler for me to move between pcs
  let data = await fetch("http://localhost/response.json");
  let response = await data.json();

  response.transactions[0].tags.forEach(tag => {
    tag.name = atob(tag.name);
    tag.value = atob(tag.value);
  });

  console.log("hi", response.transactions[0].tags[7].value);
  return response;
}

export default async function Dashboard() {
  const datasets = await fetchDatasets();
  return (
    <>
      <DatasetsHeading
        title="Explore Datasets"
        description="Explore and utilize a diverse range of machine learning models, from advanced diffusion models to cutting-edge large language models (LLMs), tailored to meet various needs and applications."
      />
      <SearchDatasets />
      {datasets.transactions.map((dataset) => (
        <Dataset
          title={'Dataset 1'}
          authorName={'john'}
          updatedTimeAgo={dataset.tags[0].updatedTimeAgo}
          authorProfileUrl={dataset.tags[0].authorProfileUrl}
          likesCount={dataset.tags[0].likesCount}
          usability={1}
          numberOfFiles={1}
          weightOfFiles={dataset.data_size}
        />
      ))}
    </>
  );
}
