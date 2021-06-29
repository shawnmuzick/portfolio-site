// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
function listAll() {
  const storageRef = firebase.storage().ref();
  storageRef
    .listAll()
    .then((res) => {
      console.log(res);
      res.items.forEach((i) => {
        console.log(i);
        // All the items under listRef.
      });
    })
    .catch((error) => {
      console.log(error);
      // Uh-oh, an error occurred!
    });
  // [END storage_list_all]
}

// function listPaginate() {
//   const storageRef = firebase.storage().ref();

//   // [START storage_list_paginate]
//   async function pageTokenExample() {
//     // Create a reference under which you want to list
//     var listRef = storageRef.child("files/uid");

//     // Fetch the first page of 100.
//     var firstPage = await listRef.list({ maxResults: 100 });

//     // Use the result.
//     // processItems(firstPage.items)
//     // processPrefixes(firstPage.prefixes)

//     // Fetch the second page if there are more elements.
//     if (firstPage.nextPageToken) {
//       var secondPage = await listRef.list({
//         maxResults: 100,
//         pageToken: firstPage.nextPageToken,
//       });
//       // processItems(secondPage.items)
//       // processPrefixes(secondPage.prefixes)
//     }
//   }
//   // [END storage_list_paginate]
// }
listAll();
