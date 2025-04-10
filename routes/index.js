const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
// होम पेज
router.get('/', (req, res) => {
    res.render('pages/index', { title: 'Home' }); // Updated path
});

// अबाउट पेज
router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' }); // Updated path
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' }); // Updated path
});



router.get('/angular', (req, res) => {
    res.render('pages/angular', { title: 'angular js developement'}); // Adjust the path if necessary
});

router.get('/node', (req, res) => {
    res.render('pages/node', { title: 'node js developement'}); // Adjust the path if necessary
});

router.get('/react', (req, res) => {
    res.render('pages/react', { title: 'react js developement'}); // Adjust the path if necessary
});

router.get('/java', (req, res) => {
    res.render('pages/java', { title: 'java js developement'}); // Adjust the path if necessary
});
router.get('/dotnet', (req, res) => {
    res.render('pages/dotnet', { title: '.net js developement'}); // Adjust the path if necessary
});
router.get('/php', (req, res) => {
    res.render('pages/php', { title: 'php developement'}); // Adjust the path if necessary
});
router.get('/python', (req, res) => {
    res.render('pages/python', { title: 'python developement'}); // Adjust the path if necessary
});
router.get('/wordpress', (req, res) => {
    res.render('pages/wordpress', { title: 'wordpress'}); // Adjust the path if necessary
});

router.get('/aws', (req, res) => {
    res.render('pages/aws', { title: 'Aws developement'}); // Adjust the path if necessary
});
router.get('/codeigniter', (req, res) => {
    res.render('pages/codeigniter', { title: 'codeigniter developement'}); // Adjust the path if necessary
});


router.get('/shopify', (req, res)=>{
    res.render('pages/shopify', { title: 'Shopify development' });
});

router.get('/woocommerce', (req, res)=>{
    res.render('pages/shopify', { title: 'woocommerce development' });
});

router.get('/iosdevelopment', (req, res)=>{
    res.render('pages/shopify', { title: 'iosdevelopment' });
});

router.get('/android', (req, res)=>{
    res.render('pages/android', { title: 'Android' });
});

router.get('/flutter', (req, res)=>{
    res.render('pages/flutter', { title: 'flutter' });
});

router.get('/reactnative', (req, res)=>{
    res.render('pages/reactnative', { title: 'React Native ' });
});

router.get('/onoffpageseo', (req, res)=>{
    res.render('pages/onoffpageseo', { title: 'on/off pages seo ' });
});

router.get('/googleadwords', (req, res)=>{
    res.render('pages/googleadwords', { title: 'googleadwords' });
});

router.get('/digitalmarketing', (req, res)=>{
    res.render('pages/digitalmarketing', { title: 'digitalmarketing' });
});


router.get('/enterprisesolution', (req, res)=>{
    res.render('pages/enterprisesolution', { title: 'enterprisesolution' });
});

router.get('/hrm', (req, res)=>{
    res.render('pages/hrm', { title: 'human resource managment' });
});

router.get('/crm', (req, res)=>{
    res.render('pages/crm', { title: 'cutomer relationship managment' });
});

//blogs page

router.get('/blogs', (req, res)=>{
    res.render('pages/blogs', { title: 'blogs' });
});


router.get('/fundamentals', (req, res) => {
    res.render('blogDetails/fundamentals');
  });
  router.get('/ecommerce', (req, res) => {
    res.render('blogDetails/ecommerce');
  });
  router.get('/mobileapp', (req, res) => {
    res.render('blogDetails/mobileapp');
  });
  router.get('/uiux', (req, res) => {
    res.render('blogDetails/uiux');
  });
  router.get('/marketing', (req, res) => {
    res.render('blogDetails/marketing', { title: "marketing"});
  });

  //portfolio page
  router.get("/portfolio" , (req, res) => {
    res.render('pages/portfolio', { title: 'portfolio'})
  });

  router.get("/portfolio1" , (req, res) => {
    res.render('pages/portfolio1', { title: 'portfolio'})
  });
  router.get("/portfolio2" , (req, res) => {
    res.render('pages/portfolio2', { title: 'portfolio'})
  });
  router.get("/portfolio3" , (req, res) => {
    res.render('pages/portfolio3', { title: 'portfolio'})
  });
  router.get("/portfolio4" , (req, res) => {
    res.render('pages/portfolio4', { title: 'portfolio'})
  });
  router.get("/portfolio5" , (req, res) => {
    res.render('pages/portfolio5', { title: 'portfolio'})
  });


  router.get('/getintouch', (req, res) => {
    res.render('pages/getintouch', { error: null });
  });

module.exports = router;
