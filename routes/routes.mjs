import express from 'express';
import articleSchema from '../models/articleSchema.mjs'
import videoSchema from '../models/videoSchema.mjs';
import bookSchema from '../models/bookSchema.mjs'
import homeSchema from '../models/homeSchema.mjs'
const router = express.Router();


// Home Routes
// Home Routes
router.get('/gethome',async(req,res)=>{
       homeSchema.find({},(err,result)=>{
              if(err){
                     res.send(err)
              }
              res.send(result)
       })
       
   })

router.put('/posthome',async(req,res)=>{
       const bioImgUrl= req.body.bioImgUrl
       const id    = req.body.id
       const title = req.body.title
       const shortBio = req.body.shortBio
       const socialContent = req.body.socialContent

       try {
             await homeSchema.findByIdAndUpdate(id,{
                    $set:{
                     title:title,
                     description:shortBio,
                     imgurl:bioImgUrl,
                     socialImgandLink:socialContent
                    }
             }) 
       } catch (error) {
              console.log(error)
       }
})



// Articles Routes
// Articles Routes
router.get('/getarticles',async(req,res)=>{
       articleSchema.find({},(err,result)=>{
              if(err){
                     res.send(err)
              }
              res.send(result)
       })
       
   })

router.post('/postarticle',async(req,res)=>{
    const tit = req.body.title
    const img = req.body.img
    const cat = req.body.cat
    const des = req.body.description
    const aut = req.body.aut
    const dl = req.body.dl
    const date = req.body.date


    const data = new articleSchema({
           title:tit,
           author:aut,
           imgurl:img,
           downloadLink:dl,
           category:cat,
           desc:des,
           date:date
    })
    try {
           await data.save()
    } catch (error) {
           console.log(error)
    }
    
})

router.put('/editarticle',async(req,res)=>{
       const title = req.body.ti
       const imag  = req.body.img
       const desc  = req.body.description
       const id    = req.body.id
       const category = req.body.cat
       const auth = req.body.aut
       const dlink = req.body.dl
       const dat = req.body.date
       try {
              await articleSchema.findByIdAndUpdate(id,{
                     $set:{
                            title:title,
                            author:auth,
                            imgurl:imag,
                            downloadLink:dlink,
                            desc:desc,
                            category:category,
                            date:dat
                     }
              })
       } catch (error) {
              console.log(error)
       }
   })

   router.delete('/deletearticle/:id',async(req,res)=>{
       const id = req.params.id
       try {
           await articleSchema.findByIdAndDelete(id).exec();
           res.send('deleted')
       } catch (error) {
           console.log(error)
       }
   })


// Video routes
// Video routes
router.get('/getvideos',async(req,res)=>{
       videoSchema.find({},(er,resu)=>{
              if(er){
                     res.send(er)
              }
              res.send(resu)
       })
   })
router.post('/postvideo',async(req,res)=>{
    const tit = req.body.title
    const url = req.body.url
    const imgurl = req.body.img
    const desc = req.body.description
    const cat = req.body.cat
    const data = new videoSchema({
           title:tit,
           imgurl:imgurl,
           url:url,
           description:desc,
           category:cat
    })
   
    try {
           await data.save()
    } catch (error) {
           console.log(error)
    }
    console.log(data) 
})

router.put('/editvideo',async(req,res)=>{
       const title = req.body.ti
       const imag  = req.body.img
       const desc  = req.body.description
       const id    = req.body.id
       const link   = req.body.link
       const category = req.body.cat
       const date = req.body.date
       try {
              await videoSchema.findByIdAndUpdate(id,{
                     $set:{
                            title:title, 
                            imgurl:imag,
                            url:link,
                            description:desc,
                            category:category
                     }
              })
       } catch (error) {
              console.log(error)
       }
   })
   router.delete('/deletevideo/:id',async(req,res)=>{
       const id = req.params.id
       try {
           await videoSchema.findByIdAndDelete(id).exec();
           res.send('deleted')
       } catch (error) {
           console.log(error)
       }
   })



//    Books routes
//    Books routes

   router.get('/getbooks',async(req,res)=>{
       bookSchema.find({},(er,resu)=>{
               if(er){
                      res.send(er)
               }
               res.send(resu)
        })
    })
router.post('/postbook',async(req,res)=>{
//     const title = req.body.title
//     const author = req.body.author
//     const translator = req.body.author
//     const editor = req.body.author
//     const publication = req.body.author
//     const imgurl = req.body.imgurl
//     const page = req.body.author
//     const volume = req.body.author
//     const size = req.body.author
//     const cat = req.body.cat
//     const slug = req.body.cat
//     const link = req.body.link
//     const description = req.body.author
    const{title,author,translator,editor,publication,imgurl,page,size,cat,volume,link,slug,description}=req.body 
    const book_data = new bookSchema({
           book_title:title,
           book_author:author,
           book_translator:translator,
           book_editor:editor,
           book_publication:publication,
           book_imgurl:imgurl,
           book_page:page,
           book_volume:volume,
           book_size:size,
           book_category:cat,
           book_slug:slug,
           download_link:link,
           book_description:description
    })
    try {
           await book_data.save()
    } catch (error) {
           console.log(error)
    }    
})


router.put('/editbook',async(req,res)=>{
    const title = req.body.ti
    const auth  = req.body.aut
    const imag  = req.body.img
    const link  = req.body.link
    const id  = req.body.id
    const category = req.body.cat
    try {
           await bookSchema.findByIdAndUpdate(id,{
                  $set:{
                         book_title:title,
                         book_author:auth, 
                         book_imgurl:imag,
                         download_link:link,
                         book_category:category
                  }
           })
    } catch (error) {
           console.log(error)
    }
})


router.delete('/deletebook/:id',async(req,res)=>{
    const id = req.params.id
    try {
        await bookSchema.findByIdAndDelete(id).exec();
        res.send('deleted')
    } catch (error) {
        console.log(error)
    }
})


export default router;



