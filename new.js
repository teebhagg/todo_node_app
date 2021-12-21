const news = require('http');

const real = news();

// real.createServer(function (req,res) {
//     console.log('Je suis a il Student');
// });

real.post('/todo',function (req,res) {
    res.status(200).json('All data have been updated');
});
real.put('/todo',function (req,res) {
    res.status(200).json('All data have been modified');
});
real.delete('/todo',function (req,res) {
    res.status(200).json('All data have been deleted');
});
real.get('/todo',function (req,res) {
    res.status(200).json('All data have been retrieved');
});

real.listen(4000,function () {
    console.log('Server has begun')
})