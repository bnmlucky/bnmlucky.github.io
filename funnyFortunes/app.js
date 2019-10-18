$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    const newGif = $(".future-query").val();
    console.log(newGif);
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=OBitdmb0SaKAnBE6xlHlIFrUHJW6YfFU&q=${newGif}&limit=9&offset=0&rating=PG&lang=en`;
    console.log(endpoint);

    const askUser = $("<p>")
      .text(
        "Where are you at in life right now?  Pick a giphy that feels right."
      )
      .addClass("giphychoice");
    $(".container").append(askUser);

    const handleData = data => {
      for (let i = 0; i < 9; i++) {
        const image = $("<img>")
          .attr("src", data.data[i].images.downsized.url)
          .addClass("square")
          .addClass(assignRandomClass());
        $(".container").append(image);
        givePrediction(image);
        // image.on("click", () => {
        //   console.log(`clicked ${i}`);
        //   // if/else statement to check if it has super
      }
    };
    $.ajax({
      url: endpoint
    }).then(handleData);
  });

  const givePrediction = clickedImg => {
    clickedImg.on("click", event => {
      if ($(clickedImg).hasClass("good")) {
        $(".container")
          .hide("slow")
          .delay(4000);
        const $predictionDiv = $(".prediction");
        const $thisPrediction = $("<p>");
        $thisPrediction
          .text("Someone is looking up to you.  Don't let that person down.")
          .addClass("prediction-text");
        $thisPrediction.appendTo($predictionDiv);
        // $predictionDiv.show();
        console.log(
          "Someone is looking up to you.  Don't let that person down."
        );
      } else if ($(clickedImg).hasClass("awesome")) {
        console.log(
          "Run in the direction of your dreams.  They are closer than you think!"
        );
      } else if ($(clickedImg).hasClass("OK")) {
        console.log(
          "Set your worries aside for a while and go to a party. The right path will emerge when you are more relaxed."
        );
      } else if ($(clickedImg).hasClass("alright")) {
        console.log(
          "You can't get what you want by sitting all by yourself in a corner.  Get out into the world, go for it, and you will get it!"
        );
      } else if ($(clickedImg).hasClass("wow")) {
        console.log(
          "What you want to achieve lies outside of your comfort zone.  Gear up and go get it!"
        );
      } else if ($(clickedImg).hasClass("whatever")) {
        console.log(
          "Life has a great surprise in store for you, get ready.  Don't do anything stupid while you wait."
        );
      } else if ($(clickedImg).hasClass("cool")) {
        console.log(
          "You'll survive whatever you are going through, write a survival guide and get on New York Times Bestseller list with it"
        );
      } else if ($(clickedImg).hasClass("great")) {
        console.log(
          "There is logic in seemingly random events that happen in your life.  Trust the proces and it'll take you where you want to be.  Follow the white rabbit."
        );
      } else if ($(clickedImg).hasClass("super")) {
        console.log(
          "There is no easy path to where you want to be, but you'll make a lot of friends along the way"
        );
      } else {
        console.log("something");
      }
    });
  };
});
//$(".container").html("");

const randomClassArray = [
  "good",
  "awesome",
  "OK",
  "alright",
  "wow",
  "whatever",
  "cool",
  "great",
  "super"
];
const assignRandomClass = () => {
  const randomClassIndex = Math.floor(Math.random() * randomClassArray.length);
  const randomClassValue = randomClassArray[randomClassIndex];
  return randomClassValue;
};
assignRandomClass();
