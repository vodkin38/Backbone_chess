define(['fielddata', 'jquery', 'underscore', 'backbone'], function (fielddata, jquery, sample, underscore, backbone) {
    return {
        init: function () {
            //Filling the field
            var BoardModel=Backbone.Model.extend(
            {
                fieldData:[],
                initialize:function()
                {
                    //Filling figures positions on board depending on results saved in localStorage
                    //If there's nothing there, creating a new board with standard positions
                    this.fieldData.set(localStorage['fieldData']?localStorage['fieldData']:fieldData);
                }
            });

            var FiguresCollection = Backbone.Collection.extend(
                {
                    model: FigureModel,
                    initialize: function () {
                        this.add(fielddata);
                        //console.log(this);
                    },
                    parse: function(resp)
                    {
                        return resp.data;
                    }
                }
            );
            var BoardView = Backbone.View.extend(
                {
                    el: $('body'),

                    initialize: function () {

                    },
                    templates: {
                        "board": _.template($('#board').html())
                    },
                    events:
                    {
                    'click .figure':'HoldFigure',


                    },
                    DrawBoard: function () {
                        var _this = this;
                        $(this.el).html(_this.templates.board({'fields': this.model.get('currentFields')}));

                    },
                    HoldFigure:function(elem)
                    {

                    },
                    MoveFigure:function()
                    {


                    }

                }
            );
            var figuresCollection = new FiguresCollection();
            console.log(figuresCollection.models[0].toJSON()[0].color);
            var boardModel = new BoardModel();
            var boardView = new BoardView({model: FigureModel, board:boardModel});
            boardView.DrawBoard();

        }
    }
});
