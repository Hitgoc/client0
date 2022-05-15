import React from 'react'
import Gallery from 'react-grid-gallery';
import colors from "../../theme/colors"
import fonts from "../../theme/fonts"


const GalleryPage = () => {

      const IMAGES =
      [{
              src: "/assets/i1.jpg",
              thumbnail: "/assets/i1.jpg",
              thumbnailWidth: 250,
              thumbnailHeight: 180,
      },
      {
              src: "assets/i2.jpg",
              thumbnail: "assets/i2.jpg",
              thumbnailWidth: 250,
              thumbnailHeight: 212,
      },
      
      {
              src: "assets/i3.jpg",
              thumbnail: "assets/i3.jpg",
              thumbnailWidth: 250,
              thumbnailHeight: 212
      }, {
            src: "assets/i4.jpg",
            thumbnail: "assets/i4.jpg",
            thumbnailWidth: 380,
            thumbnailHeight: 212
    }, {
      src: "assets/i5.jpg",
      thumbnail: "assets/i5.jpg",
      thumbnailWidth: 220,
      thumbnailHeight: 212
}, {
      src: "assets/i6.jpg",
      thumbnail: "assets/i6.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212
}, {
      src: "assets/i7.jpg",
      thumbnail: "assets/i7.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 202
}, {
      src: "assets/i8.jpg",
      thumbnail: "assets/i8.jpg",
      thumbnailWidth: 180,
      thumbnailHeight: 212
}, {
      src: "assets/i9.jpg",
      thumbnail: "assets/i9.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212
}, {
      src: "assets/i10.jpg",
      thumbnail: "assets/i10.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212
}, {
      src: "assets/i11.jpg",
      thumbnail: "assets/i11.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212
}, {
      src: "assets/i12.jpg",
      thumbnail: "assets/i12.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212
}, {
      src: "assets/i13.jpg",
      thumbnail: "assets/i13.jpg",
      thumbnailWidth: 180,
      thumbnailHeight: 212
}, {
      src: "assets/i14.jpg",
      thumbnail: "assets/i14.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212
}



]

      
  return (
        //gallary
    <div  >
          <div 
                  style = {{fontSize : "45px",
                  margin:"50px auto",
                  width:"30%",
                  textAlign:"center",
                  fontWeight:"semi-bold",
                  color:"#DE3163" }}>
                 Gallery
                 <hr style={{ border:"0.5px solid #DE3163", }}/>
              </div>
          <Gallery rowHeight={350} rowWidth={400}  images={IMAGES}/>

    </div>
  )
}

export default GalleryPage;

