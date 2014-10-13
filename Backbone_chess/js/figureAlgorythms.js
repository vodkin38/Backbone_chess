var FigureModel = Backbone.Model.extend(
    {

        possibleMoves:[],
        figure:null,//the figure we're holding
        color:null,
        isHold:false,
        getPossibleMoves(row,col,map)//map is full positions map of all figures on board
        {
            var oppositeColor=this.color=='white'?'black':'white';
            switch (figure) {
                case 'pawn':
                    var direction=color=='black'?1:-1;//Defining direction of our pawn
                    var attackFields=[];
                    attackfield[0]=[direction+row,col-1];
                    attackfield[1]=[direction+row,col+1];
                    if(map[attackfield[0][0]][attackfield[0][1]].color==oppositeColor)
                    {
                        this.possibleMoves.push([attackfield[0][0],attackfield[0][1]]);
                    }
                    if(map[attackfield[1][0]][attackfield[1][1]].color==oppositeColor)
                    {
                        this.possibleMoves.push([attackfield[1][0],attackfield[1][1]]);
                    }
                    //finished here!!!

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

        }
    }
);

