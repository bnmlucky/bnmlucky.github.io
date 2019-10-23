$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    const newGif = $(".future-query").val();
    console.log(newGif);
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=OBitdmb0SaKAnBE6xlHlIFrUHJW6YfFU&q=${newGif}&limit=9&offset=0&rating=PG&lang=en`;
    console.log(endpoint);

    const handleData = data => {
      const $targetDiv = $(".giphyDiv").empty();
      const askUser = $("<p>")
        .text(
          "Where are you at in life right now?  Pick a giphy that feels right."
        )
        .addClass("giphychoice");
      $(".giphyDiv").append(askUser);
      for (let i = 0; i < 9; i++) {
        const image = $("<img>")
          .attr("src", data.data[i].images.downsized.url)
          .addClass("square");
        $targetDiv.append(image);
        givePrediction(image);
      }
    };
    $.ajax({
      url: endpoint
    }).then(handleData);
  });

  const givePrediction = clickedImg => {
    clickedImg.on("click", event => {
      showPrediction();
    });
  };

  const showPrediction = () => {
    $(".container")
      .hide("slow")
      .delay(1000);
    const $predictionDiv = $(".prediction");
    const $predictionTitle = $("<h1>").text("Here's what you need to know:");
    $predictionTitle.appendTo($predictionDiv);
    const $thisPrediction = $("<p>");
    $thisPrediction.text(assignRandomPrediction()).addClass("prediction-text");
    $thisPrediction.appendTo($predictionDiv);
    $predictionDiv.show().delay(7000);
  };

  const $reloadPage = () => {
    $(".prediction").on("click", event => {
      location.reload(true);
    });
  };

  $reloadPage();
});

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

const randomPredictionArray = [
  "Someone is looking up to you.  Don't let that person down.",
  "Run in the direction of your dreams.  They are closer than you think!",
  "Set your worries aside for a while and go to a party. The right path will emerge when you are more relaxed.",
  "You can't get what you want by sitting all by yourself in a corner.  Get out into the world, go for it, and you will get it!",
  "What you want to achieve lies outside of your comfort zone. Gear up and go get it! Take the plunge.",
  "Life has a great surprise in store for you, get ready.  Don't do anything stupid while you wait.",
  "You'll survive whatever you are going through, write a survival guide and get on New York Times Bestseller list with it",
  "There is logic in seemingly random events that happen in your life.  Trust the process and it'll take you where you want to be.",
  "There is no easy path to where you want to be, but you'll make a lot of friends along the way.",
  "Buy this lottery ticket and see what happens.",
  "Don't be afraid to take that big step forward.  Luck is on your side.",
  "A new romance will appear in your life when you least expect it.",
  "You will move to a wonderful new home within a year.",
  "All that you've been working towards will manifest itself in most glorious ways.",
  "Perhaps you've been focusing too much on spending.  There are many joys in life that don't require cash.",
  "Perhaps you've been focusing too much on saving.  Get yourself a little something and celebrate your victories!",
  "It seems you've been feeling a bit stuck in your life right now.  Help is on its way, but not in the shape and form you expect.",
  "It's not that you need to slow down.  In fact, your life is about to pick up the pace and get really exciting.",
  "I see money in your future.  But do you have a plan for that million dollars you are about to get?",
  "Your efforts to make this world a better place haven't gone unnoticed. Karma is keeping track of everything.",
  "Calculate your risks, but take that big step forward.",
  "The smart thing is to prepare for the unexpected.  Life is about to have a major plot twist.",
  "You will soon discover your hidden talent.  Yes, you can monetize it, too.",
  "You are about to unlock a major achievement in your life and see all your hard work paying off! Stay at it.",
  "It might have seemed that you can't control anything in your life currently, but there is your attitide and your effort that you can control. And they will turn it all around.",
  "Before I say anything else - just let that special person know how you feel.  And all the rest is already falling into place."
];

const assignRandomPrediction = () => {
  const randomPredictionIndex = Math.floor(
    Math.random() * randomPredictionArray.length
  );
  const randomPredictionValue = randomPredictionArray[randomPredictionIndex];
  return randomPredictionValue;
};
