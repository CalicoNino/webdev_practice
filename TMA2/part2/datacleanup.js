function displayError(err) {
	$('#error').css('color', 'yellow');
	$('#error').text(err);
}

function displayInfo(msg) {
	$('#error').css('color', 'white');
	$('#error').text(msg);
}

function ParseAndDisplayUnit(id) {
	if(id == "")
		$("#selectionAndUpload").show();
	else
	{
		$("#unitSelected").show();
		$("#btnBackToSelection").show();
		$("#btnMark").show();
		DisplayUnit(id);
	}
}

function SanitizeString(str) {
	str = str.replace(/\r?\n|\r/g, "");
	str = str.replace(/<para>/g, "<p>");
	str = str.replace(/<\/para>/g, "</p><br/>");

	str = SanitizeDefinitions(str);

	var re = /<image src="(.+\.png)">([\w\s]+)<\/image>/g;
	str = str.replace(re, '<img src="$1" alt="$2">');

	re = /<conclusion>([\w\s\.]+)<\/conclusion>/g;
	str = str.replace(re, '<h6><font class="text-dark">$1<\/font></h6>');

	return str;
}

// sanitize to a proper html
function SanitizeDefinitions(str) {
	var re = /<definition term="([\w\s]+)">/g;
	var html = str.replace(re, '<p><font style="font-weight:bold">$1</font><font style="font-weight:bold">: </font><font><hr/>');

	re = /<\/definition>/g;
	return html.replace(re, '</font></p><br/>');
}

function addDiv(id, idToAddTo) {
	idToAddTo = "#" + idToAddTo;
	$(idToAddTo).append("<div id="+id+"></div>");
}

function addHeader(id, content, headerNum) {
	id = "#" + id;
	$(id).append("<h"+headerNum + ">" + content + "</h"+headerNum+">");
	if(headerNum == 1)
		$(id).append("<hr>");
}

function addOverview(id, content) {
	id = "#" + id;
	$(id).append("<h5>Overview</h5>");

	var sanitizedContent = SanitizeString(content);
	$(id).append(sanitizedContent);
}

function addContent(id, content) {
	id = "#" + id;
	var sanitizedContent = SanitizeString(content);
	$(id).append(sanitizedContent);
}

function DisplayUnit(id) {
	$.get('reader.php',
		{'getUnitById': id},
		function(unit) 
		{
			if(unit == null)
				displayError("Error: Unable get unit by id: " + id);
			else
			{
				addHeader("unitSelected", unit.Title, 3);
				addOverview("unitSelected", unit.Overview);
				displayChapters(unit.ID);
				displayQuiz(unit.ID);
			}
		}
	, "json");
}

function displayQuiz(unitId) {
	$.get('reader.php',
		{'getQuizByUnitId': unitId},
		function(quiz) 
		{
			if(quiz == null)
				displayError("Error: Unable get quiz by unit id: " + unitId);
			else
			{
				var id = "quiz"+quiz.ID;
				addDiv(id, "unitSelected");
				addHeader(id, quiz.Title, 4);
				displayQuizQuestions(quiz.ID, id);
			}
		}
	, "json");
}

function displayQuizQuestions(quizId, divId) {
	$.get('reader.php',
		{'getQuizQuesByQuizId': quizId},
		function(questions) 
		{
			if(questions.length == 0)
				displayError("Error: Unable get questions by quiz id: " + quizId);
			else
			{
				for(var i = 0; i < questions.length; i++)
				{
					var ques = questions[i];
					AddQuestion(ques, divId);
				}
			}
		}
	, "json");
}

function AddQuestion(ques, divId) {
	var quesId = "question" + ques.ID;
	$("#"+divId).append("<form id='"+quesId+"'><h4>"+ques.Question+"</h4></form><br/>");

	$.get('reader.php',
		{'getQuizAnsByQuesId': ques.ID},
		function(answers) 
		{
			if(answers.length == 0)
				displayError("Error: Unable get answers by question id: " + ques.ID);
			else
			{
				for(var i = 0; i < answers.length; i++)
				{
					var ans = answers[i];
					$("#"+quesId).append('<input type="radio" name="'+quesId+'" value="'+ans.Correct+'">'+ans.Answer+'<br>');
				}
			}
		}
	, "json");
}

function displayChapters(unitId) {
	$.get('reader.php',
		{'getChaptersByUnitId': unitId},
		function(chapters) 
		{
			if(chapters.length == 0)
				displayError("Error: Unable get chapters by unit id: " + unitId);
			else
			{
				for(var i = 0; i < chapters.length; i++)
				{
					var chapter = chapters[i];
					addChapter(chapter);
					displaySections(chapter.ID);
				}
			}
		}
	, "json");
}

function addChapter(chapter) {
	var id = "chapter" + chapter.ID
	addDiv(id, "unitSelected");
	addHeader(id, chapter.Title, 4);
	addOverview(id, chapter.Overview);
}

function displaySections(chapId) {
	$.get('reader.php',
		{'getSectionsByChapterId': chapId},
		function(sections) 
		{
			if(sections.length == 0)
				displayError("Error: Unable get sections by chapter id: " + chapId);
			else
			{
				for(var i = 0; i < sections.length; i++)
				{
					var sec = sections[i];
					addSection(sec, chapId);
				}
			}
		}
	, "json");
}

function addSection(sec, chapId) {
	var id = "section" + sec.ID
	addDiv(id, "chapter" + chapId);
	addHeader(id, sec.Title, 3);
	addContent(id, sec.Content);	
}

$("#btnMark").click(function() {
	var questions = document.getElementsByTagName("form");
	var total = questions.length;
	var correct = 0;
	for(var i = 0; i < questions.length; i++)
	{
   	var name = questions[i].id;
   	var checkedVal = $('input:radio[name='+name+']:checked').val();
   	var correctAns = $(':input:radio[name='+name+'][value=1]');
   	correctAns.after("<font class='text-success'>ANS</font>");

   	if(checkedVal == 1)
   		correct++;
	}
   
	$("#unitSelected").append("<h4>Grade:"+(correct/total*100).toFixed(2)+"%</h4>")
});