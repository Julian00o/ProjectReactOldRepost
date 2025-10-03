import Shop from "./Shop"
import './App.css'

function App() {
  const shop = [
    { 
      name: "Iphone 11 pro", 
      price: "27 000 сом", 
      image: "https://crdms.images.consumerreports.org/prod/products/cr/models/399694-smartphones-apple-iphone-11-10008711.png",
      add: "Iphone 11 pro, good phone for 2025 years, 128gb, 8gb"
    },
    { 
      name: "iPhone 16 Pro", 
      price: "110 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg" ,
      add: "Iphone 16 pro, good phone for 2025 years, 128gb, 16gb"
    },
    { 
      name: "Iphone 17 Pro Max", 
      price: "155 000 сом", 
      image: "https://images.vodafone.co.uk/gbnnsauqav4t/5CVJv4TvIpCVqZmYMZEpew/3bf8db1de1bc3bee47396c23060a58ca/iPhone-17-Pro-Product-Card-300x500.png?fm=webp",
      add: "Iphone 17 pro max, good phone for 2025 years, 2t, 16gb" 
    },
    { 
      name: "Xiaomi 14 Pro", 
      price: "68 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-1.jpg" ,
      add: "Xiaomi 14 Pro, good phone for 2025 years, 128gb, 8gb"
    },
    { 
      name: "Realme GT 6", 
      price: "39 500 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt6-1.jpg"  ,
      add: "Realme GT 6, good phone for 2025 years, 256gb, 8gb"
    },
    { 
      name: "Huawei P60 Pro", 
      price: "56 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p60-pro-1.jpg" ,
      add: "Huawei P60 Pro, good phone for 2025 years, 256gb, 8gb"
    },
    { 
      name: "OnePlus 12", 
      price: "47 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg"  ,
      add: "OnePlus 12, good phone for 2025 years, 256gb, 8gb"
    },
    { 
      name: "Honor Magic 6", 
      price: "41 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-magic6-1.jpg"  ,
      add: "Honor Magic 6, good phone for 2025 years, 256gb, 8gb"
    },
    { 
      name: "Vivo", 
      price: "82 000 сом", 
      image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1741157751159/3c4dd54fd2b122f2769b8877599f9886.png"  ,
      add: "Vivo, good phone for 2025 years, 256gb, 8gb"

      
    },
    { 
      name: "Asus ROG Phone 8", 
      price: "72 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-8-1.jpg"   ,
      add: "Asus ROG Phone 8, good phone for 2025 years, 256gb, 8gb"
    },
    { 
      name: "Sony Xperia 1 VI", 
      price: "64 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-vi-1.jpg"   ,
      add: "Sony Xperia 1 VI, good phone for 2025 years, 256gb, 8gb"
    },
    { 
      name: "Meizu 21 Pro", 
      price: "38 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/meizu/meizu-21-pro-1.jpg"   ,
      add: "Meizu 21 Pro, good phone for 2025 years, 256gb, 8gb"
    },
  ];

  return (
    <>
    <header style={{backgroundColor: "white", boxShadow: "2px", width: "full", height: "100px"}}>
      <div style={{display: "flex"}}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px", color: "black" }}>Shop</h1>
      <h3 style={{ fontSize: "40px", marginBottom: "20px", color: "black", marginLeft: "1000px" }}>Phone Shope №1
      </h3>
      </div>

      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "50px" }}>
        {shop.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              width: "250px", 
              height: "350px", 
              backgroundColor: "gray", 
              borderRadius: "20px", 
              padding: "10px" 
            }}
          >
            <Shop name={item.name} price={item.price} image={item.image} add={item.add} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
      
