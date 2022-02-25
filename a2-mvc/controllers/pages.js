// Express framework will find the views files without having to specify the extension

exports.homepage = (req, res) => {
    //res.send('Hello from homepage');
    res.render('pages/homepage');
}


exports.about = (req, res) => {
    //res.send('Hello from about');
    res.render('pages/about');
}