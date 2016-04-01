		$(document).ready(function() {
			//1. display the hero - done
			//2. make the hero move up/down/left/right - done
			//3.display all the enemies - 3 enemies displayed
			//4. make the enemies move - done
			//5. When spacebar is pressed, have the hero shoot a bullet

			var hero = {
				x: 300,
				y: 500

			}
			var enemies = [
				{x:50, y:50},
				{x:250, y:80},
				{x:350, y:100},
        {x:450, y:150},
        {x:650, y:150}
			];

			function displayEnemies() {
				var output='';
				for (var i = 0; i < enemies.length; i++) {
						output += "<div class='enemy1' style= ' top:" + enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>";

			}
				document.getElementById('enemies').innerHTML = output;
			}


			function displayHero() {
				document.getElementById('hero').style['top'] = hero.y + "px";
				document.getElementById('hero').style['left'] = hero.x + "px";
			}

			function gameLoop() {
				displayHero();
				moveEnemies();
				displayEnemies();
			}

			function moveEnemies() {
					for(var i = 0; i < enemies.length; i++) {
						enemies[i].y +=5;

          if(enemies[i].y > 540) {
                enemies[i].y = 0;
                enemies[i].x = Math.random()*500;
            }
					}
			}
			setInterval(gameLoop, 50);

			document.onkeydown = function(e) {
				if (e.keyCode == 37) {
					hero.x -= 10;
				}
				if (e.keyCode == 39) {
					hero.x += 10;
				}
				if (e.keyCode == 38) {
					hero.y -= 10;
				}
				if (e.keyCode == 40) {
					hero.y += 10;
				}
				displayHero();
			}

			gameLoop();

			// displayHero();
			// displayEnemies();

		}); //end of document.ready
