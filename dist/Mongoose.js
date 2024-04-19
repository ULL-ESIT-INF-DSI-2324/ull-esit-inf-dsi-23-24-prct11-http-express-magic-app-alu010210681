import { connect, model, Schema } from 'mongoose';
connect('mongodb://127.0.0.1:27017/notes-app').then(() => {
    console.log('Connected to the database');
}).catch(() => {
    console.log('Something went wrong when conecting to the database');
});
const NoteSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    color: {
        type: String,
    },
});
const Note = model('Note', NoteSchema);
const note = new Note({
    title: 'Red note',
    body: 'This is a red note',
    color: 'red',
});
note.save().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
