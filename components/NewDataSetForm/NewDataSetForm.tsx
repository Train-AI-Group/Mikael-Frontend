import React, { useState } from "react"
import SimpleInput from "../Input/SimpleInput"

const NewDataSetForm = () => {
  const [newDataSet, setNewDataSet] = useState({
    name: "",
    visibility: false,
  })

  return (
    <SimpleInput
      label="Dataset Name"
      placeholder="Enter dataset title"
      value={newDataSet.name}
      onChange={(e) => setNewDataSet({ ...newDataSet, name: e.target.value })}
    />
  )
}

export default NewDataSetForm
