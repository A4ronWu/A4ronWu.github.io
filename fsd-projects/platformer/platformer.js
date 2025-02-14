$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 700, 150, 20);
    createPlatform(175, 500, 125, 20);
    createPlatform(200, 300, 100, 20);

    createPlatform(400, 600, 100, 20);
    createPlatform(400, 400, 100, 20);
    createPlatform(400, 200, 100, 20);

    createPlatform(600, 700, 200, 20);
    createPlatform(600, 500, 200, 20);
    createPlatform(600, 300, 200, 20);
    createPlatform(600, 100, 200, 20);

    createPlatform(900, 600, 100, 20);
    createPlatform(900, 400, 100, 20);
    createPlatform(900, 200, 100, 20);

    createPlatform(1100, 700, 150, 20);
    createPlatform(1100, 500, 125, 20);
    createPlatform(1100, 300, 100, 20);

    // TODO 3 - Create Collectables
    createCollectable("database", 230, 650);
    createCollectable("database", 230, 450);
    createCollectable("database", 230, 250);

    createCollectable("database", 427.5, 550);
    createCollectable("database", 427.5, 350);
    createCollectable("database", 427.5, 150);

    createCollectable("database", 680, 650);
    createCollectable("database", 680, 450);
    createCollectable("database", 680, 250);
    createCollectable("database", 680, 50);

    createCollectable("database", 927.5, 550);
    createCollectable("database", 927.5, 350);
    createCollectable("database", 927.5, 150);

    createCollectable("database", 1130, 650);
    createCollectable("database", 1130, 450);
    createCollectable("database", 1130, 250);    
      
    // TODO 4 - Create Cannons
    createCannon("top", 310, 2000);
    createCannon("bottom", 390, 1500);
    createCannon("top", 760, 1000);
    createCannon("bottom", 890, 1500);
    createCannon("top", 1210, 2000);

    createCannon("left", 0, 2000);
    createCannon("right", 300, 2000);
    createCannon("left", 400, 2000);
    createCannon("right", 700, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
