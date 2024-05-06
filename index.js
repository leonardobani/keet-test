async function searchPressed(formData) {
  //  console.log("form data: " + formData[0].value);
  const datas = await fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" +
    formData[0].value
  )
    .then((data) => {
      return data;
    })
    const apiObj = await datas.json()
  
    console.log(apiObj)
    console.log("for");
    for (
      let index = 0;
      index < apiObj.total;
      index++
    ) {
      console.log("new div");
      const divindex = document.createElement("div");
      divindex.id = "div" + index;
      
      const singleData = await fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + apiObj.objectIDs[index])

        .then((data) => {
          data = data.json()
          return data;
        })


      let IdNewP = document.createElement("p");
      let IdNewPText = document.createTextNode(
        "Result ID:" + singleData.objectID);
      IdNewP.appendChild(IdNewPText);
      divindex.appendChild(IdNewP);

      let newImg = document.createElement("img");
      newImg.src = singleData.primaryImageSmall;
      divindex.appendChild(newImg);

      let departmentNewP = document.createElement("p");
      let departmentNewPText = document.createTextNode(
        "Department:" +
          singleData.department
      );
      departmentNewP.appendChild(departmentNewPText);
      divindex.appendChild(departmentNewP);

      let titleNewP = document.createElement("p");
      let titleNewPText = document.createTextNode(
        "Title:" +
          singleData.title
      );
      titleNewP.appendChild(titleNewPText);
      divindex.appendChild(titleNewP);

      let artistNewP = document.createElement("p");
      let artistNewPText = document.createTextNode(
        "Artist Display Name:" +
          singleData.artistDisplayName
      );
      artistNewP.appendChild(artistNewPText);

      divindex.appendChild(artistNewP);
      document.getElementById("start").appendChild(divindex)
    }}
