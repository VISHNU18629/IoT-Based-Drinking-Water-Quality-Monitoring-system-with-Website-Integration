const sampleListings = [
    {
      title: "Bellandur Lake",
      description: "Bellandur Lake in Bangalore is infamous for its pollution, with toxic foam and frequent fires due to industrial and sewage waste.",
      image: {
        filename: "bellandur_lake",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      },
      ph: "7.2",
      temperature: "29°C",
      tds: "800 mg/L",
      ec: "1100 μS/cm",
      location: "Bangalore, Karnataka",
      country: "India",
    },
    {
      title: "Yamuna River",
      description: "The Yamuna River is one of the most polluted rivers in India, with high levels of industrial waste and untreated sewage.",
      image: {
        filename: "yamuna_river",
        url: "https://media.istockphoto.com/id/2161304467/photo/yamuna-river-pollution.webp?a=1&b=1&s=612x612&w=0&k=20&c=XNwW43uLDzwXcV7FJZxhOfL8eEcDQoB4D1MGFyU59Ps="
      },
      ph: "7.3",
      temperature: "28°C",
      tds: "900 mg/L",
      ec: "1200 μS/cm",
      location: "Delhi",
      country: "India",
    },
    {
      title: "Saraswati River",
      description: "The Saraswati River, believed to be mythical, has seen massive contamination in some areas due to sewage and waste dumping.",
      image: {
        filename: "saraswati_river",
        url: "https://media.istockphoto.com/id/1134924763/photo/kumbh-mela-2019.jpg?s=612x612&w=0&k=20&c=RbdtrE2dqJAMw4RRiFUF1C4Bz_2tuquJ140fF-Tj9Xk="
      },
      ph: "6.8",
      temperature: "27°C",
      tds: "1000 mg/L",
      ec: "1700 μS/cm",
      location: "Haryana, India",
      country: "India",
    },
    {
      title: "Lower Lake",
      description: "The Lower Lake in Bhopal has been severely affected by untreated sewage, plastic waste, and chemical pollution.",
      image: {
        filename: "lower_lake",
        url: "https://cdn.pixabay.com/photo/2019/11/19/14/47/lake-4637617_1280.jpg"
      },
      ph: "6.9",
      temperature: "26°C",
      tds: "1000 mg/L",
      ec: "1400 μS/cm",
      location: "Bhopal, Madhya Pradesh",
      country: "India",
    },
    {
      title: "Pushkar Lake",
      description: "Pushkar Lake is a sacred Hindu site and hosts an annual camel fair.",
      image: {
        filename: "listingimage",
        url: "https://cdn.pixabay.com/photo/2019/11/19/14/47/lake-4637617_1280.jpg"
      },
      ph: "8.0", 
      temperature: "29°C", 
      tds: "220 mg/L", 
      ec: "400 μS/cm", 
      location: "Pushkar",
      country: "India",
    },
    {
      title: "Rajsamand Lake",
      description: "Rajsamand Lake, built in the 17th century, is known for its marble embankments.",
      image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/4957658/pexels-photo-4957658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      ph: "8.9", 
      temperature: "26°C", 
      tds: "460 mg/L", 
      ec: "600 μS/cm", 
      location: "Rajsamand",
      country: "India",
    },
     {
        title: "Siliserh Lake",
        description: "Siliserh Lake is a popular spot for boating and fishing in Alwar.",
        image: {
          filename: "listingimage",
          url: "https://cdn.pixabay.com/photo/2019/11/19/14/47/lake-4637617_1280.jpg"
        },
        ph: "8.9", 
        temperature: "20°C", 
        tds: "292 mg/L", 
        ec: "350 μS/cm", 
        location: "Alwar",
        country: "India",
      },
      {
        title: "Udaisagar Lake",
        description: "Udaisagar Lake serves as a primary water source for Udaipur city.",
        image: {
          filename: "listingimage",
          url: "https://cdn.pixabay.com/photo/2019/11/19/14/47/lake-4637617_1280.jpg"
        },
        ph: "7.3 - 8.5",
        temperature: "20°C - 28°C",
        tds: "1170 - 1963 mg/L",
        ec: "600 - 800 μS/cm",
        location: "Udaipur",
        country: "India",
      },
      {
        title: "Dal Lake",
        description: "Dal Lake is a renowned attraction in Srinagar, famous for its houseboats and shikaras.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1044781846/photo/dal-lake-in-srinagar-kashmir.webp?a=1&b=1&s=612x612&w=0&k=20&c=eL1sbAyTXbKncneN2kQRtqaeyBULUK-G5B4L7P0fEO0="
        },
        ph: "8.3",
        temperature: "26°C",
        tds: "250 mg/L",
        ec: "500 μS/cm",
        location: "Srinagar, Jammu and Kashmir",
        country: "India",
      },
      {
        title: "Lower Lake",
        description: "The Lower Lake in Bhopal has been severely affected by untreated sewage, plastic waste, and chemical pollution.",
        image: {
          filename: "lower_lake",
          url: "https://cdn.pixabay.com/photo/2019/11/19/14/47/lake-4637617_1280.jpg"
        },
        ph: "6.9",
        temperature: "26°C",
        tds: "1000 mg/L",
        ec: "1400 μS/cm",
        location: "Bhopal, Madhya Pradesh",
        country: "India",
      },
      {
        title: "Pushkar Lake",
        description: "Pushkar Lake is a sacred Hindu site and hosts an annual camel fair.",
        image: {
          filename: "listingimage",
          url: "https://cdn.pixabay.com/photo/2019/11/19/14/47/lake-4637617_1280.jpg"
        },
        ph: "8.0", 
        temperature: "29°C", 
        tds: "220 mg/L", 
        ec: "400 μS/cm", 
        location: "Pushkar",
        country: "India",
      },
      {
        title: "Gokuldham Society",
        description: "Bellandur Lake in Bangalore is infamous for its pollution, with toxic foam and frequent fires due to industrial and sewage waste.",
        image: {
          filename: "bellandur_lake",
          url: "https://media.gettyimages.com/id/907359274/photo/indian-firefighters-work-next-to-a-doused-fire-at-bellandur-lake-in-bangalore-on-january-20.jpg?s=612x612&w=0&k=20&c=_6r0sU2h6eB_3IJuSplVDiUnSJvjeA-bta_WbqfNbAw="
        },
        ph: "7.2",
        temperature: "29°C",
        tds: "800 mg/L",
        ec: "1100 μS/cm",
        location: "Bangalore, Karnataka",
        country: "India",
      },
      {
        title: "Yamuna River",
        description: "The Yamuna River is one of the most polluted rivers in India, with high levels of industrial waste and untreated sewage.",
        image: {
          filename: "yamuna_river",
          url: "https://media.istockphoto.com/id/2161304467/photo/yamuna-river-pollution.webp?a=1&b=1&s=612x612&w=0&k=20&c=XNwW43uLDzwXcV7FJZxhOfL8eEcDQoB4D1MGFyU59Ps="
        },
        ph: "7.3",
        temperature: "28°C",
        tds: "900 mg/L",
        ec: "1200 μS/cm",
        location: "Delhi",
        country: "India",
      },
      {
        title: "Rajsamand Lake",
        description: "Rajsamand Lake, built in the 17th century, is known for its marble embankments.",
        image: {
          filename: "listingimage",
          url: "https://images.pexels.com/photos/4957658/pexels-photo-4957658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        ph: "8.9", 
        temperature: "26°C", 
        tds: "460 mg/L", 
        ec: "600 μS/cm", 
        location: "Rajsamand",
        country: "India",
      },
      {
        title: "Saraswati River",
        description: "The Saraswati River, believed to be mythical, has seen massive contamination in some areas due to sewage and waste dumping.",
        image: {
          filename: "saraswati_river",
          url: "https://media.istockphoto.com/id/1134924763/photo/kumbh-mela-2019.jpg?s=612x612&w=0&k=20&c=RbdtrE2dqJAMw4RRiFUF1C4Bz_2tuquJ140fF-Tj9Xk="
        },
        ph: "6.8",
        temperature: "27°C",
        tds: "1000 mg/L",
        ec: "1700 μS/cm",
        location: "Haryana, India",
        country: "India",
      },
      {
        title: "Dal Lake",
        description: "Dal Lake is a renowned attraction in Srinagar, famous for its houseboats and shikaras.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1044781846/photo/dal-lake-in-srinagar-kashmir.webp?a=1&b=1&s=612x612&w=0&k=20&c=eL1sbAyTXbKncneN2kQRtqaeyBULUK-G5B4L7P0fEO0="
        },
        ph: "8.3",
        temperature: "26°C",
        tds: "250 mg/L",
        ec: "500 μS/cm",
        location: "Srinagar, Jammu and Kashmir",
        country: "India",
      }
    ];
    
    module.exports = { data: sampleListings };
    