

  <script type="text/javascript">

//===============SET UP DATA ARRAY OF FRIENDS==================
// INITIALIZE WITH TEN PEOPLE FROM BEDROCK
// =============================================================
var friends = [
  {
    "name": "Fred Flintstone",
    "photo": "/images/fred_flintstone.jpg",
    "scores": [
        5,
        4,
        3,
        5,
        2,
        1,
        3,
        5,
        4,
        2
    ]
  },
  {
    "name": "Wilma Flintstone",
    "photo": "/images/wilma_flintstone.jpg",
    "scores": [
        2,
        4,
        3,
        5,
        2,
        1,
        3,
        2,
        4,
        2
    ]
  },
  {
    "name": "Barney Rubble",
    "photo": "/images/barney_rubble.jpg",
    "scores": [
        5,
        4,
        4,
        5,
        3,
        1,
        3,
        5,
        1,
        1
    ]
  },
      {
    "name": "Betty Rubble",
    "photo": "/images/betty_rubble.png",
    "scores": [
        3,
        3,
        2,
        2,
        3,
        5,
        3,
        1,
        2,
        3
    ]
  },
    {
    "name": "Bam-Bam Flintstone",
    "photo": "/images/bam_bam.png",
    "scores": [
        1,
        3,
        1,
        2,
        3,
        2,
        3,
        2,
        1,
        5
    ]
  },
      {
    "name": "Dino",
    "photo": "/images/dino.jpg",
    "scores": [
        2,
        4,
        5,
        2,
        3,
        5,
        5,
        4,
        2,
        3
    ]
  },
    {
    "name": "Mr Slate",
    "photo": "/images/mr_slate.jpg",
    "scores": [
        1,
        3,
        2,
        1,
        5,
        2,
        4,
        5,
        3,
        2
    ]
  },
    {
    "name": "Pebbles Flintstone",
    "photo": "/images/pebbles_flintstone.jpg",
    "scores": [
        1,
        2,
        1,
        5,
        4,
        3,
        2,
        1,
        3,
        4
    ]
  },
    {
    "name": "Wiggy Rockstone",
    "photo": "/images/wiggy_rockstone.png",
    "scores": [
        1,
        3,
        1,
        2,
        4,
        5,
        4,
        1,
        2,
        2
    ]
  },
    {
    "name": "Trump Stone",
    "photo": "/images/trump_stone.png",
    "scores": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ]
  },
      {
    "name": "Wine Stone",
    "photo": "/images/wine_stone.png",
    "scores": [
        1,
        1,
        1,
        1,
        1,
        5,
        5,
        5,
        5,
        5
    ]
  }

];


    // Chosen CSS
    var config = {
      ".chosen-select": {},
      ".chosen-select-deselect": {
        allow_single_deselect: true
      },
      ".chosen-select-no-single": {
        disable_search_threshold: 10
      },
      ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
      },
      ".chosen-select-width": {
        width: "95%"
      }
    };

    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };

	//=========ADD THE NEW FRIEND TO THE FRIENDS ARRAY =========
	friends.push(userData)


        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");

        });
      } else {
        alert("Please fill out all fields before submitting!");
      }
    });
  </script>