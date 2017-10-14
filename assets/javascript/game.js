var jack = {
	name: "Jack Skelington",
	hp: 140,
	attack: 6,
	counterAttack: 11,
	pic: "assets/images/jack.jpg"
}

var oogie = {
	name: "Oogie Boogie",
	hp: 165,
	attack: 5,
	counterAttack: 10,
	pic: "assets/images/oogie.jpg",
}

var lock = {
	name: "Lock, Shock, Barrel",
	hp: 130,
	attack: 7,
	counterAttack: 12,
	pic: "assets/images/lock.jpg",
}

var doctor = {
	name: "Dr. Finkelstein",
	hp: 130,
	attack: 7,
	counterAttack: 12,
	pic: "assets/images/doctor.jpg",
}




$(document).ready(function(){


	$("#jack").on("click", function(){
		document.getElementById("click").play();
		
		$("#oogie").addClass("hidden");
		$("#lock").addClass("hidden");
		$("#doctor").addClass("hidden");
		
		$("#en1").removeClass("hidden");
		$("#en1Name").html(oogie.name);
		$("#enemie1").attr("src", oogie.pic);
		$("#en1Hp").html("HP: " + oogie.hp);

		$("#en2").removeClass("hidden");
		$("#en2Name").html(lock.name);
		$("#enemie2").attr("src", lock.pic);
		$("#en2Hp").html("HP: " + lock.hp);

		$("#en3").removeClass("hidden");
		$("#en3Name").html(doctor.name);
		$("#enemie3").attr("src", doctor.pic);
		$("#en3Hp").html("HP: " + doctor.hp);

	});

	$("#oogie").on("click", function(){
		document.getElementById("click").play();
		
		$("#jack").addClass("hidden");
		$("#lock").addClass("hidden");
		$("#doctor").addClass("hidden");
		
		$("#en1").removeClass("hidden");
		$("#en1Name").html(jack.name);
		$("#enemie1").attr("src", jack.pic);
		$("#en1Hp").html("HP: " + jack.hp);

		$("#en2").removeClass("hidden");
		$("#en2Name").html(lock.name);
		$("#enemie2").attr("src", lock.pic);
		$("#en2Hp").html("HP: " + lock.hp);

		$("#en3").removeClass("hidden");
		$("#en3Name").html(doctor.name);
		$("#enemie3").attr("src", doctor.pic);
		$("#en3Hp").html("HP: " + doctor.hp);

	});

	$("#lock").on("click", function(){
		document.getElementById("click").play();
		
		$("#oogie").addClass("hidden");
		$("#jack").addClass("hidden");
		$("#doctor").addClass("hidden");
		
		$("#en1").removeClass("hidden");
		$("#en1Name").html(oogie.name);
		$("#enemie1").attr("src", oogie.pic);
		$("#en1Hp").html("HP: " + oogie.hp);

		$("#en2").removeClass("hidden");
		$("#en2Name").html(jack.name);
		$("#enemie2").attr("src", jack.pic);
		$("#en2Hp").html("HP: " + jack.hp);

		$("#en3").removeClass("hidden");
		$("#en3Name").html(doctor.name);
		$("#enemie3").attr("src", doctor.pic);
		$("#en3Hp").html("HP: " + doctor.hp);

	});

	$("#doctor").on("click", function(){
		document.getElementById("click").play();
		
		$("#oogie").addClass("hidden");
		$("#lock").addClass("hidden");
		$("#jack").addClass("hidden");
		
		$("#en1").removeClass("hidden");
		$("#en1Name").html(oogie.name);
		$("#enemie1").attr("src", oogie.pic);
		$("#en1Hp").html("HP: " + oogie.hp);

		$("#en2").removeClass("hidden");
		$("#en2Name").html(lock.name);
		$("#enemie2").attr("src", lock.pic);
		$("#en2Hp").html("HP: " + lock.hp);

		$("#en3").removeClass("hidden");
		$("#en3Name").html(jack.name);
		$("#enemie3").attr("src", jack.pic);
		$("#en3Hp").html("HP: " + jack.hp);

	});

	$("#en1").on("click", function(){
		document.getElementById("click").play();
		
		$("#en1").addClass("hidden");
		$("#def").removeClass("hidden");

		if($("#en1Name").html() === oogie.name){
			$("#defName").html(oogie.name);
			$("#defender").attr("src", oogie.pic);
			$("#defHp").html(oogie.hp);
		}else if ($("#en1Name").html() === lock.name){
			$("#defName").html(lock.name);
			$("#defender").attr("src", lock.pic);
			$("#defHp").html(lock.hp);
		}else if ($("#en1Name").html() === doctor.name){
			$("#defName").html(doctor.name);
			$("#defender").attr("src", doctor.pic);
			$("#defHp").html(doctor.hp);
		}else if ($("#en1Name").html() === jack.name){
			$("#defName").html(jack.name);
			$("#defender").attr("src", jack.pic);
			$("#defHp").html(jack.hp);
		}else{

		};
		
	});

	$("#en2").on("click", function(){
		document.getElementById("click").play();
		
		$("#en2").addClass("hidden");
		$("#def").removeClass("hidden");

		if($("#en2Name").html() === oogie.name){
			$("#defName").html(oogie.name);
			$("#defender").attr("src", oogie.pic);
			$("#defHp").html(oogie.hp);
		}else if ($("#en2Name").html() === lock.name){
			$("#defName").html(lock.name);
			$("#defender").attr("src", lock.pic);
			$("#defHp").html(lock.hp);
		}else if ($("#en2Name").html() === doctor.name){
			$("#defName").html(doctor.name);
			$("#defender").attr("src", doctor.pic);
			$("#defHp").html(doctor.hp);
		}else if ($("#en2Name").html() === jack.name){
			$("#defName").html(jack.name);
			$("#defender").attr("src", jack.pic);
			$("#defHp").html(jack.hp);
		}else{

		};

	});

	$("#en3").on("click", function(){
		document.getElementById("click").play();
		
		$("#en3").addClass("hidden");
		$("#def").removeClass("hidden");

		if($("#en3Name").html() === oogie.name){
			$("#defName").html(oogie.name);
			$("#defender").attr("src", oogie.pic);
			$("#defHp").html(oogie.hp);
		}else if ($("#en3Name").html() === lock.name){
			$("#defName").html(lock.name);
			$("#defender").attr("src", lock.pic);
			$("#defHp").html(lock.hp);
		}else if ($("#en3Name").html() === doctor.name){
			$("#defName").html(doctor.name);
			$("#defender").attr("src", doctor.pic);
			$("#defHp").html(doctor.hp);
		}else if ($("#en3Name").html() === jack.name){
			$("#defName").html(jack.name);
			$("#defender").attr("src", jack.pic);
			$("#defHp").html(jack.hp);
		}else{

		};

	});

	



	$(".btn-danger").on("click", function(){

		document.getElementById("kick").play();


  	
  		$("#attacker, #counterAttacker").removeClass("hidden");
	

		if($("#jack").hasClass("hidden")){

		}else{
			var hp = jack.hp;
			var attack = jack.attack;
			
			console.log(hp, attack);
		};

		if($("#oogie").hasClass("hidden")){

		}else{
			var hp = oogie.hp;
			var attack = oogie.attack;
			
			console.log(hp, attack);
		};

		if($("#lock").hasClass("hidden")){

		}else{
			var hp = lock.hp;
			var attack = lock.attack;
			
			console.log(hp, attack);
		};

		if($("#doctor").hasClass("hidden")){

		}else{
			var hp = doctor.hp;
			var attack = doctor.attack;
			
			console.log(hp, attack);
		};

		if ($("#defName").html() === jack.name){
			var defHp = jack.hp;
			var counterAttack = jack.counterAttack;
			console.log(defHp, counterAttack);
		}else if ($("#defName").html() === oogie.name){
			var defHp = oogie.hp;
			var counterAttack = oogie.counterAttack;
			console.log(defHp, counterAttack);
		}else if ($("#defName").html() === lock.name){
			var defHp = lock.hp;
			var counterAttack = lock.counterAttack;
			console.log(defHp, counterAttack);
		}else if ($("#defName").html() === doctor.name){
			var defHp = doctor.hp;
			var counterAttack = doctor.counterAttack;
			console.log(defHp, counterAttack);
		}else{

		};

	  

	  

	  var fight = function(){

		if(hp === jack.hp && defHp === oogie.hp){
			hp = (hp - counterAttack);
			$("#ch1Hp").html("HP: " + hp);
			jack.hp = hp;
			$("#attacker").html(jack.name + " used a " + jack.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			oogie.hp = defHp;
			$("#counterAttacker").html(oogie.name + " used a " + oogie.counterAttack + " pt counter attack!");

			jack.attack = (jack.attack + 6);
		}else if (hp === jack.hp && defHp === lock.hp){
			hp = (hp - counterAttack);
			$("#ch1Hp").html("HP: " + hp);
			jack.hp = hp;
			$("#attacker").html(jack.name + " used a " + jack.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			lock.hp = defHp;
			$("#counterAttacker").html(lock.name + " used a " + lock.counterAttack + " pt counter attack!");

			jack.attack = (jack.attack + 6);
		}else if (hp === jack.hp && defHp === doctor.hp){
			hp = (hp - counterAttack);
			$("#ch1Hp").html("HP: " + hp);
			jack.hp = hp;
			$("#attacker").html(jack.name + " used a " + jack.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			doctor.hp = defHp;
			$("#counterAttacker").html(doctor.name + " used a " + doctor.counterAttack + " pt counter attack!");

			jack.attack = (jack.attack + 6);
		}else{

		};

		


		if(hp === oogie.hp && defHp === jack.hp){
			hp = (hp - counterAttack);
			$("#ch2Hp").html("HP: " + hp);
			oogie.hp = hp;
			$("#attacker").html(oogie.name + " used a " + oogie.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			jack.hp = defHp;
			$("#counterAttacker").html(jack.name + " used a " + jack.counterAttack + " pt counter attack!");

			oogie.attack = (oogie.attack + 5);
		}else if (hp === oogie.hp && defHp === lock.hp){
			hp = (hp - counterAttack);
			$("#ch2Hp").html("HP: " + hp);
			oogie.hp = hp;
			$("#attacker").html(oogie.name + " used a " + oogie.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			lock.hp = defHp;
			$("#counterAttacker").html(lock.name + " used a " + lock.counterAttack + " pt counter attack!");

			oogie.attack = (oogie.attack + 5);
		}else if (hp === oogie.hp && defHp === doctor.hp){
			hp = (hp - counterAttack);
			$("#ch2Hp").html("HP: " + hp);
			oogie.hp = hp;
			$("#attacker").html(oogie.name + " used a " + oogie.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			doctor.hp = defHp;
			$("#counterAttacker").html(doctor.name + " used a " + doctor.counterAttack + " pt counter attack!");

			oogie.attack = (oogie.attack + 5);
		}else{

		};

		if(hp === lock.hp && defHp === jack.hp){
			hp = (hp - counterAttack);
			$("#ch3Hp").html("HP: " + hp);
			lock.hp = hp;
			$("#attacker").html(lock.name + " used a " + lock.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			jack.hp = defHp;
			$("#counterAttacker").html(jack.name + " used a " + jack.counterAttack + " pt counter attack!");

			lock.attack = (lock.attack + 7);
		}else if (hp === lock.hp && defHp === oogie.hp){
			hp = (hp - counterAttack);
			$("#ch3Hp").html("HP: " + hp);
			lock.hp = hp;
			$("#attacker").html(lock.name + " used a " + lock.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			oogie.hp = defHp;
			$("#counterAttacker").html(oogie.name + " used a " + oogie.counterAttack + " pt counter attack!");

			lock.attack = (lock.attack + 7);
		}else if (hp === lock.hp && defHp === doctor.hp){
			hp = (hp - counterAttack);
			$("#ch3Hp").html("HP: " + hp);
			lock.hp = hp;
			$("#attacker").html(lock.name + " used a " + lock.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			doctor.hp = defHp;
			$("#counterAttacker").html(doctor.name + " used a " + doctor.counterAttack + " pt counter attack!");

			lock.attack = (lock.attack + 7);
		}else{

		};

		if(hp === doctor.hp && defHp === jack.hp){
			hp = (hp - counterAttack);
			$("#ch4Hp").html("HP: " + hp);
			doctor.hp = hp;
			$("#attacker").html(doctor.name + " used a " + doctor.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			jack.hp = defHp;
			$("#counterAttacker").html(jack.name + " used a " + jack.counterAttack + " pt counter attack!");

			doctor.attack = (doctor.attack + 7);
		}else if (hp === doctor.hp && defHp === oogie.hp){
			hp = (hp - counterAttack);
			$("#ch4Hp").html("HP: " + hp);
			doctor.hp = hp;
			$("#attacker").html(doctor.name + " used a " + doctor.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			oogie.hp = defHp;
			$("#counterAttacker").html(oogie.name + " used a " + oogie.counterAttack + " pt counter attack!");

			doctor.attack = (doctor.attack + 7);
		}else if (hp === doctor.hp && defHp === lock.hp){
			hp = (hp - counterAttack);
			$("#ch4Hp").html("HP: " + hp);
			doctor.hp = hp;
			$("#attacker").html(doctor.name + " used a " + doctor.attack + " pt attack!");

			defHp = (defHp - attack);
			$("#defHp").html("HP: " + defHp);
			lock.hp = defHp;
			$("#counterAttacker").html(lock.name + " used a " + lock.counterAttack + " pt counter attack!");

			doctor.attack = (doctor.attack + 7);
		}else{

		};
	  }

	  fight();


	  var winLose = function(){
		if(defHp <= 0){
			
			$("#def").addClass("hidden");
		}

		if (hp <= 0){
			document.getElementById("lose").play();
			document.getElementById("halloween").pause();
			document.getElementById("jackWin").pause();
			document.getElementById("oogieWin").pause();
			document.getElementById("lockWin").pause();
			document.getElementById("docWin").pause();
			
			$("#jack").addClass("hidden");
			$("#oogie").addClass("hidden");
			$("#lock").addClass("hidden");
			$("#doctor").addClass("hidden");

			$("#attacker").html("You");
			$("#counterAttacker").html("Lose!!!");
			$("#message").removeClass("pull-left");
			$("#message").addClass("text-center");
		}

	if (hp === jack.hp){
		if((oogie.hp <= 0) && (lock.hp <= 0) && (doctor.hp <=0)){
			$("#attacker").html("You");
			$("#counterAttacker").html("Win!!!");
			$("#message").removeClass("pull-left");
			$("#message").addClass("text-center");
			document.getElementById("jackWin").play();
			document.getElementById("halloween").pause();

			document.getElementById("oogieWin").pause();
			document.getElementById("lockWin").pause();
			document.getElementById("docWin").pause();
			document.getElementById("lose").pause();

		}
	}

	if (hp === oogie.hp){
		if((jack.hp <= 0) && (lock.hp <= 0) && (doctor.hp <=0)){
			$("#attacker").html("You");
			$("#counterAttacker").html("Win!!!");
			$("#message").removeClass("pull-left");
			$("#message").addClass("text-center");
			document.getElementById("oogieWin").play();
			document.getElementById("halloween").pause();
			document.getElementById("jackWin").pause();
			
			document.getElementById("lockWin").pause();
			document.getElementById("docWin").pause();
			document.getElementById("lose").pause();

		}
	}

	if (hp === lock.hp){
		if((oogie.hp <= 0) && (jack.hp <= 0) && (doctor.hp <=0)){
			$("#attacker").html("You");
			$("#counterAttacker").html("Win!!!");
			$("#message").removeClass("pull-left");
			$("#message").addClass("text-center");
			document.getElementById("lockWin").play();
			document.getElementById("halloween").pause();
			document.getElementById("jackWin").pause();
			document.getElementById("oogieWin").pause();
			
			document.getElementById("docWin").pause();
			document.getElementById("lose").pause();


		}
	}

	if (hp === doctor.hp){
		if((oogie.hp <= 0) && (lock.hp <= 0) && (jack.hp <=0)){
			$("#attacker").html("You");
			$("#counterAttacker").html("Win!!!");
			$("#message").removeClass("pull-left");
			$("#message").addClass("text-center");
			document.getElementById("docWin").play();
			document.getElementById("halloween").pause();
			document.getElementById("jackWin").pause();
			document.getElementById("oogieWin").pause();
			document.getElementById("lockWin").pause();
			
			document.getElementById("lose").pause();

		}
	}
  };

  winLose();








	});


		$(".btn-default").on("click", function(){
			document.getElementById("click").play();

			$("#jack, #oogie, #lock, #doctor").removeClass("hidden");
			$("#en1, #en2, #en3, #def, #attacker, #counterAttacker").addClass("hidden");
			jack.hp = 140;
			oogie.hp = 165;
			lock.hp = 130;
			doctor.hp = 120;
			jack.attack = 6;
			oogie.attack = 5;
			lock.attack = 7;
			doctor.attack = 7;
			$("#ch1Hp").html("HP: " + jack.hp);
			$("#ch2Hp").html("HP: " + oogie.hp);
			$("#ch3Hp").html("HP: " + lock.hp);
			$("#ch4Hp").html("HP: " + doctor.hp);
		});

		$(".stop").on("click", function(){
			document.getElementById("halloween").pause();
			document.getElementById("jackWin").pause();
			document.getElementById("oogieWin").pause();
			document.getElementById("lockWin").pause();
			document.getElementById("docWin").pause();
			document.getElementById("lose").pause();
		})

		document.getElementById("halloween").play();

	
	





});