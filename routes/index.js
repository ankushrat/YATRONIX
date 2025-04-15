const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
// Home page
router.get('/', (req, res) => {
    res.render('pages/index', {  error: null }); // Updated path
});

//our services
router.get('/whatcloud', (req, res) => {
  res.render('pages/whatcloud', {  error: null }); // Updated path
});
router.get('/whatcyber', (req, res) => {
  res.render('pages/whatcyber', {  error: null }); // Updated path
});
router.get('/whatmobiledevelopment', (req, res) => {
  res.render('pages/whatmobiledevelopment', {  error: null }); // Updated path
});
router.get('/whatuiux', (req, res) => {
  res.render('pages/whatuiux', {  error: null }); // Updated path
});
router.get('/whatwebdevlopment', (req, res) => {
  res.render('pages/whatwebdevlopment', {  error: null }); // Updated path
});
router.get('/whatdigital', (req, res) => {
  res.render('pages/whatdigital', {  error: null }); // Updated path
});

// about page
router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About', error: null }); // Updated path
});

//contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact', error: null }); // Updated path
});


//our service 

router.get('/angular', (req, res) => {
  console.log(__dirname); // for debugging
  res.render('pages/angular', { error: null });
});

//node js developer page 
router.get('/node', (req, res) => {
  res.render('pages/node', {error: null });
});
//react js page

router.get('/react', (req, res) => {
  res.render('pages/react', { error: null });
});


//java page
router.get('/java', (req, res) => {
    res.render('pages/java', { title: 'java js developement', error: null}); // Adjust the path if necessary
});

//dotnet page
router.get('/dotnet', (req, res) => {
    res.render('pages/dotnet', { title: '.net js developement', error: null}); // Adjust the path if necessary
});

//php page
router.get('/php', (req, res) => {
    res.render('pages/php', { title: 'php developement', error: null}); // Adjust the path if necessary
});

//python page
router.get('/python', (req, res) => {
    res.render('pages/python', { title: 'python developement', error: null}); // Adjust the path if necessary
});

//wordpress page
router.get('/wordpress', (req, res) => {
    res.render('pages/wordpress', { title: 'wordpress', error: null}); // Adjust the path if necessary
});

//aws page 
router.get('/aws', (req, res) => {
    res.render('pages/aws', { title: 'Aws developement', error: null}); // Adjust the path if necessary
});

//codeigniter page 
router.get('/codeigniter', (req, res) => {
    res.render('pages/codeigniter', { title: 'codeigniter developement', error: null}); // Adjust the path if necessary
});

//shopify page
router.get('/shopify', (req, res)=>{
    res.render('pages/shopify', { title: 'Shopify development', error: null });
});

//woocommerce page
router.get('/woocommerce', (req, res)=>{
    res.render('pages/shopify', { title: 'woocommerce development', error: null });
});

//iosdevelopment page
router.get('/iosdevelopment', (req, res)=>{
    res.render('pages/shopify', { title: 'iosdevelopment', error: null });
});

//android page
router.get('/android', (req, res)=>{
    res.render('pages/android', { title: 'Android' , error: null});
});

//flutter page
router.get('/flutter', (req, res)=>{
    res.render('pages/flutter', { title: 'flutter', error: null });
});

router.get('/reactnative', (req, res)=>{
    res.render('pages/reactnative', { title: 'React Native ' , error: null});
});

router.get('/onoffpageseo', (req, res)=>{
    res.render('pages/onoffpageseo', { title: 'on/off pages seo' , error: null });
});

router.get('/googleadwords', (req, res)=>{
    res.render('pages/googleadwords', { title: 'googleadwords' , error: null });
});

router.get('/digitalmarketing', (req, res)=>{
    res.render('pages/digitalmarketing', { title: 'digitalmarketing', error: null });
});


router.get('/enterprisesolution', (req, res)=>{
    res.render('pages/enterprisesolution', { title: 'enterprisesolution' , error: null});
});

router.get('/hrm', (req, res)=>{
    res.render('pages/hrm', { title: 'human resource managment', error: null });
});

router.get('/crm', (req, res)=>{
    res.render('pages/crm', { title: 'cutomer relationship managment' , error: null});
});

  //Hire us pages
  router.get('/hireuiux', (req, res) => {
    res.render('pages/hireuiux', { title: 'hire ui/ux designer', error: null });
  });

  router.get('/hirefrontend', (req, res) => {
    res.render('pages/hirefrontend', { title: 'hire frontend developer', error: null });
  });

  router.get('/hirebackend', (req, res) => {
    res.render('pages/hirebackend', { title: 'hire backend developer', error: null });
  });

  router.get('/hireaws', (req, res) => {
    res.render('pages/hireaws', { title: 'hire aws', error: null });
  });

  router.get('/hirephp', (req, res) => {
    res.render('pages/hirephp', { title: 'hire php', error: null });
  });

  router.get('/hireangular', (req, res) => {
    res.render('pages/hireangular', { title: 'hire angular developer', error: null });
  });

  router.get('/hirecodeigniter', (req, res) => {
    res.render('pages/hirecodeogniter', { title: 'hire codeigniter', error: null });
  });

  router.get('/hireandroid', (req, res) => {
    res.render('pages/hireandroid', { title: 'hire android developer', error: null });
  });

  router.get('/hireflutter', (req, res) => {
    res.render('pages/hireflutter', { title: 'hire flutter developer', error: null });
  });


 
  router.get('/hirenode', (req, res) => {
    res.render('pages/hirenode', { title: 'hire node js developer', error: null });
  });



//blogs page

router.get('/blogs', (req, res)=>{
    res.render('pages/blogs', { title: 'blogs', error: null });
});


router.get('/fundamentals', (req, res) => {
    res.render('blogDetails/fundamentals', { title: 'blogs', error: null });
  });
  router.get('/ecommerce', (req, res) => {
    res.render('blogDetails/ecommerce', { title: 'blogs', error: null });
  });
  router.get('/mobileapp', (req, res) => {
    res.render('blogDetails/mobileapp', { title: 'blogs', error: null });
  });
  router.get('/uiux', (req, res) => {
    res.render('blogDetails/uiux', { title: 'blogDetails/uiux', error: null });
  });
  router.get('/marketing', (req, res) => {
    res.render('blogDetails/marketing', { title: 'marketing', error: null });
  });


  

  //portfolio page
  router.get("/portfolio" , (req, res) => {
    res.render('pages/portfolio', { title: 'portfolio', error: null });
});
  

  router.get("/portfolio1" , (req, res) => {
    res.render('pages/portfolio1', { title: 'portfolio', error: null })
  });
  router.get("/portfolio2" , (req, res) => {
    res.render('pages/portfolio2', { title: 'portfolio', error: null })
  });
  router.get("/portfolio3" , (req, res) => {
    res.render('pages/portfolio3', { title: 'portfolio', error: null })
  });
  router.get("/portfolio4" , (req, res) => {
    res.render('pages/portfolio4', { title: 'portfolio', error: null })
  });
  router.get("/portfolio5" , (req, res) => {
    res.render('pages/portfolio5', { title: 'portfolio', error: null })
  });


  router.get('/getintouch', (req, res) => {
    res.render('pages/getintouch', { title: 'getintouch', error: null });
  });

module.exports = router;
