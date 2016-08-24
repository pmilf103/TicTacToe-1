$(document).ready(function(){

	$('td').addClass('empty')
	table= $('table')
	var player = 1;

	function setPattern(player){
		if(player==1){
			return 'cross';
		} else{
			return 'circle';
		};
	};

	function changeState(td,pattern){
		td.removeClass('empty').addClass(pattern)
	};

	function resetGame(table){
		table.find('td').each(function(){
			$(this).removeClass('circle').removeClass('cross').addClass('empty')
		})
	}
	function changePlayer(player){
		if(player===1){
			return 2;
		} else{
			return 1;
		};
	}
	function checkState(td){
		if (td.hasClass('empty')){
			return 1;
		} else	{
			return 0;
		}
	}
	function CheckForWin(){
		if ()
	}

	$('td').click(function() {
		td = $(this)
		var pattern = setPattern(player);

		state = checkState(td);

		if (state === 1){
			changeState(td,pattern);
		player = changePlayer(player);
	} else {
		alert("you cannot select this box");
	}
		
	});

	$("#btn").click(function() {
		resetGame()

	});


})