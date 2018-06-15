$(function() {
        console.log("Loading matrix");

        function loadStudents(){
			
				//Récupère le contenu dynamique de /api/students 
                $.getJSON( "/api/matrix/", function(students){
                        console.log(students);
						
						//Accumule les valeurs de la matrice version string
                        var matrix = "Matrix = {";
						for(var i = 0; i < students.length; ++i){
							matrix += '{';
							for(var j = 0; j < students.length; ++j){
								matrix += students[i][j];
							}
							matrix += '}';
							if(i < students.length - 1)
								matrix += ", ";
						}
				matrix += '}';
						
						//Change le contenu des balises ayant commme classe
						//"container" et le remplace par notre contenu dynamique
                        $(".intro-text").text(matrix);
                });
        };

        loadStudents();
        setInterval(loadStudents, 2000);
});