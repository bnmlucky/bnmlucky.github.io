$(() => {
  const newGif = "money";
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=OBitdmb0SaKAnBE6xlHlIFrUHJW6YfFU&q=${newGif}&limit=1&offset=0&rating=PG-13&lang=en`;
  console.log(endpoint);

  const handleData = data => {
    console.log(data.data[0].url);
    const image = $("<img>").attr("src", data.data[0].url);
    $("body").append(image);
  };
  $.ajax({
    url: endpoint
  }).then(handleData);
});

/* $(()=> {
const handleData = (data) => {
  console.log(data.Title)

  const $title = $('<h1>').text(data.Title) // create h1 and put the title inside
  $('.container').append($title) // add the title to the container

  const $director = $('<h2>').text(`Directed by the one and only ${data.Director}`) // create the h2 and put the director inside
  $('.container').append($director) // add the director to the container
  
}

$.ajax({ url: endpoint }).then(handleData) */
