const express =require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 2500

mongoose.Promise = global.Promise
//mongoose.connect('mongodb://localhost:27017/thingsToDo', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb+srv://hola:hola@cluster0-im5lw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())

const thingsToDoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false,
    },
    gif: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false
    }
})

const ThingsToDoModel = mongoose.model('thingsToDo', thingsToDoSchema)

const getThingsToDo = async (request, response) => {
    try{
    console.log("GET THINGS TO DO BEFORE DIE")
    const thingsToDoInstance = await ThingsToDoModel.find({})
    console.log(thingsToDoInstance)
    response.send(thingsToDoInstance)

    } catch (error) {
        response.status (500).send(error)
    }

}
const postThingsToDo = async (request, response) => {
    try{
        console.log('POST THINGS TO DO BEFORE DIE')
        var thingsToDoInstance = new ThingsToDoModel(request.body)
        console.log(thingsToDoInstance)
        const created = await ThingsToDoModel.create(thingsToDoInstance)
        response.send(created)
    }catch(error) {
            response.status(500).send(error)
        }
    }
    const deleteThingsToDo = async (request,response) =>{
        try{
            console.log("DELETE THINGS TO DO BEFORE DIE")
            var thingsToDoInstance = await ThingsToDoModel.deleteOne({'_id':request.params.id})
            console.log(thingsToDoInstance)
            response.send(thingsToDoInstance)
        }catch(error){
            response.status(500).send(error)
        }
     }

     const getThingsToDoById = async (request,response) =>{
        try{
  
             console.log("GET THINGS TO DO BEFORE DIE BY ID")
             var thingsToDoInstance = await ThingsToDoModel.find({'_id':request.params.id})
             console.log(thingsToDoInstance)
             response.send(thingsToDoInstance)
        } catch(error){
            response.status(500).send(error)
        }
     }

     const updateThingsToDo = async (request,response) =>{

        try {
            console.log("EDIT THINGS TO DO BEFORE DIE")
            var thingsToDoInstance = new ThingsToDoModel(request.body)
            console.log(thingsToDoInstance)
            const created = await ThingsToDoModel.findOneAndUpdate({'_id':request.params.id},request.body)
            response.send(created)
        } catch (error) {
            response.status(500).send(error)
        }
    }

app.route('/thingsToDo')
.get(getThingsToDo)
.post(postThingsToDo)

app.route('/thingsToDo/:id')
.delete(deleteThingsToDo)
.get(getThingsToDoById)
.put(updateThingsToDo)

app.listen(PORT,()=> {
    console.log(`App running on ${PORT}`)
})