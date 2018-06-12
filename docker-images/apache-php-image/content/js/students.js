$(function() {
        console.log("Loading students");

        function loadStudents(){
                $.getJSON( "/api/students/", function(students){
                        console.log(students);
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
						
                $(".container").text(matrix);
                });
        };

        loadStudents();
        setInterval(loadStudents, 2000);
});