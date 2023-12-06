'use strict'
var Project = require('../models/project');
var controller = {
    home : function(req, res){
        return res.status(200).send({
            message: "Soy home"
        });
    },

    test: function(re, res){
        return res.status(200).send({
            message: "metodo test"
        });
    },

    saveProject:function(req, res){
        var project = new Project
        ();

        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.statys(500).send({message:"error al guardar documento"});
            if(!projectStored) return res.status(404).send({message:"No se pudo guardar el documento"});
            return res.status(200).send({project:projectStored});
        })
    },
}

module.exports = controller;