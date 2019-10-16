$(() => {
  $("#choices").on("click", event => {
    const newGif = $(event.currentTarget).val();
    console.log(newGif);
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=OBitdmb0SaKAnBE6xlHlIFrUHJW6YfFU&q=${newGif}&limit=10&offset=25&rating=G&lang=en`;
    console.log(endpoint);

    const handleData = data => {
      const image0 = $("<img>").attr("src", data.data[0].images.downsized.url);
      $(".container").append(image0);
      const image1 = $("<img>").attr("src", data.data[1].images.downsized.url);
      $(".container").append(image1);
      const image2 = $("<img>").attr("src", data.data[2].images.downsized.url);
      $(".container").append(image2);
      const image3 = $("<img>").attr("src", data.data[3].images.downsized.url);
      $(".container").append(image3);
      const image4 = $("<img>").attr("src", data.data[4].images.downsized.url);
      $(".container").append(image4);
      const image5 = $("<img>").attr("src", data.data[5].images.downsized.url);
      $(".container").append(image5);
      const image6 = $("<img>").attr("src", data.data[6].images.downsized.url);
      $(".container").append(image6);
      const image7 = $("<img>").attr("src", data.data[7].images.downsized.url);
      $(".container").append(image7);
      const image8 = $("<img>").attr("src", data.data[8].images.downsized.url);
      $(".container").append(image8);
    };
    $.ajax({
      url: endpoint
    }).then(handleData);
  });
});

// /* $(()=> {
// const handleData = (data) => {
//   console.log(data.Title)

//   const $title = $('<h1>').text(data.Title) // create h1 and put the title inside
//   $('.container').append($title) // add the title to the container

//   const $director = $('<h2>').text(`Directed by the one and only ${data.Director}`) // create the h2 and put the director inside
//   $('.container').append($director) // add the director to the container

// }

// $.ajax({ url: endpoint }).then(handleData) */

// // const $gifDiv = $("<div>");
// // $gifDiv.attr('id', ``)
// // $gifDiv.on("click", event => {
// //   const $clickedTarget = $(event.currentTarget);
// //   console.log("You clicked: ", $clickedTarget);
// //   if ($clickedTarget.attr('id') === )
// // });

// // const randomIndex = Math.floor(Math.random() * arr.length);
// // arr[randomIndex]
