define(['fielddata','jquery','underscore','backbone'],function (fielddata,jquery,sample,underscore) {
    return {
        init: function () {
            //Filling the field

            var BoardModel=Backbone.Model.Extend(
                {
                   currentFields:null,
                   init:function()
                   {
                       this.currentFields=fielddata;
                   }
                   DrawBoard:function()
                   {
                       this.currentFields.forEach(function(index, element)
                       {


                       });

                   }
                }
            );



            var patterns = [];

            function MarkCell(el) {
                el.addClass('marked');
            }

            function MarkFields(fields) {
                fields.each()
                {
                    var fieldElement = $('tr:nth-child(' + (i) + ') td:nth-child(' + j + ')');
                    MarkCell(fieldElement);
                }
            }

            function ClearFields() {
                $('td').removeClass('marked');
            }

            function MarkPossibleMoves(figure, color, row, col, isInitial) {
                var oppColor = (color == 'black') ? 'white' : 'black';//opposite color
                var fields = [];
                //Moves for a pawn
                switch (figure) {
                    case 'pawn':
                        if (color == "black") {
                            //if a pawn can attack
                            var leftAttackField = $('tr:nth-child(' + (row + 1) + ') td:nth-child(' + col - 1 + ')');
                            var rightAttackField = $('tr:nth-child(' + (row + 1) + ') td:nth-child(' + col + 1 + ')');
                            if (leftAttackField && leftAttackField.hasClass(oppColor))
                                MarkCell(leftAttackField);
                            if (rightAttackField && rightAttackField.hasClass(oppColor))
                                MarkCell(leftAttackField);
                            //if it's a pawn's initial position
                            if (isInitial) {
                                var fwdOne = $('tr:nth-child(' + (row + 1) + ') td');
                                var fwdTwo = $('tr:nth-child(' + (row + 2) + ') td');
                                if (!fwdOne.hasClass(oppColor))
                                    MarkCell(fwdOne);
                                if (!fwdTwo.hasClass(oppColor))
                                    MarkCell(fwdOne);
                            }
                            else {
                                $('tr:nth-child(' + (row + 1) + ') td').addClass('marked');
                            }
                        }
                        else {
                            var leftAttackField = $('tr:nth-child(' + (row - 1) + ') td:nth-child(' + col - 1 + ')');
                            var rightAttackField = $('tr:nth-child(' + (row - 1) + ') td:nth-child(' + col + 1 + ')');
                            if (leftAttackField && leftAttackField.hasClass(oppColor))
                                MarkCell(leftAttackField);
                            if (rightAttackField && rightAttackField.hasClass(oppColor))
                                MarkCell(leftAttackField);
                            if (isInitial) {
                                var fwdOne = $('tr:nth-child(' + (row - 1) + ') td');
                                var fwdTwo = $('tr:nth-child(' + (row - 2) + ') td');
                                if (!fwdOne.hasClass(oppColor))
                                    MarkCell(fwdOne);
                                if (!fwdTwo.hasClass(oppColor))
                                    MarkCell(fwdOne);
                            }
                            else {
                                $('tr:nth-child(' + (row - 1) + ') td').addClass('marked');
                            }
                        }
                        break;

                    case 'knight':
                        var pattern = [2, 1];
                        //var allFields=[8][8];
                        for (var i = 1; i <= 8; i++) {
                            for (var j = 1; j <= 8; j++) {
                                var rowDifference = row - i;
                                var colDifference = col - j;
                                if (
                                    ((Math.abs(rowDifference) == pattern[0] && Math.abs(colDifference) == pattern[1] && i - rowDifference >= 0 && j - colDifference >= 0) ||
                                    (Math.abs(rowDifference) == pattern[1] && Math.abs(colDifference) == pattern[0] && i - rowDifference >= 0 && j - colDifference >= 0)) && !($('tr:nth-child(' + (i) + ') td:nth-child(' + j + ')').hasClass(color))
                                ) {
                                    fields.push([i, j]);
                                }
                            }

                        }
                        fields.each(index, field)
                    {
                        var fieldElement = $('tr:nth-child(' + (i) + ') td:nth-child(' + j + ')');
                        MarkCell(fieldElement);
                    }
                        break;

                    case 'king':
                        for (var i = 1; i <= 8; i++) {
                            for (var j = 1; j <= 8; j++) {
                                if (Math.abs(row - i) == 1 || Math.abs(col - j) == 1 && !($('tr:nth-child(' + (i) + ') td:nth-child(' + j + ')').hasClass(color))) {
                                    fields.push([i, j]);
                                }
                            }

                        }

                        break;

                    case 'rook':
                        for (var i = row; i <= 8; i++) {
                            if ($('tr:nth-child(' + (i) + ') td:nth-child(' + col + ')'));
                        }

                        break;

                }
                MarkFields(fields);//Marking all possible move fields
            }

            //Initial values
            var turn = 'white';
            var figureUp = null;

            function changeTurn() {
                if (turn == 'black')
                    turn = 'white';
                else
                    turn = 'black';
            }


        }
    }
});
/*var row=8;
var col=8;
var pattern=[2,1];
//var allFields=[8][8];
var fields=[];
for(var i=1;i<=8;i++)
{
	for(var j=1;j<=8;j++)
	{
		var rowDifference=row-i;
		var colDifference=col-j;
		if(
			(Math.abs(rowDifference)==pattern[0] && Math.abs(colDifference)==pattern[1] && i-rowDifference>=0 && j-colDifference>=0) ||
			(Math.abs(rowDifference)==pattern[1] && Math.abs(colDifference)==pattern[0] && i-rowDifference>=0 && j-colDifference>=0)
			
			
		)
		{
			fields.push([i,j]);
		}
	}
}
console.log(fields);*/
