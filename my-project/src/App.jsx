import Info from './products'
import './App.css'

function App() {
  const products = [
    { 
      name: "Iphone 11 pro", 
      price: "27 000 сом", 
      image: "https://crdms.images.consumerreports.org/prod/products/cr/models/399694-smartphones-apple-iphone-11-10008711.png" 
    },
    { 
      name: "iPhone 16 Pro", 
      price: "110 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg" 
    },
    { 
      name: "Iphone 17 Pro Max", 
      price: "155 000 сом", 
      image: "https://images.vodafone.co.uk/gbnnsauqav4t/5CVJv4TvIpCVqZmYMZEpew/3bf8db1de1bc3bee47396c23060a58ca/iPhone-17-Pro-Product-Card-300x500.png?fm=webp" 
    },
    { 
      name: "Xiaomi 14 Pro", 
      price: "68 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-1.jpg" 
    },
    { 
      name: "Realme GT 6", 
      price: "39 500 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt6-1.jpg" 
    },
    { 
      name: "Huawei P60 Pro", 
      price: "56 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p60-pro-1.jpg" 
    },
    { 
      name: "OnePlus 12", 
      price: "47 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg" 
    },
    { 
      name: "Honor Magic 6", 
      price: "41 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-magic6-1.jpg" 
    },
    { 
      name: "Google Pixel 9 Pro", 
      price: "82 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg" 
    },
    { 
      name: "Asus ROG Phone 8", 
      price: "72 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-8-1.jpg" 
    },
    { 
      name: "Sony Xperia 1 VI", 
      price: "64 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-vi-1.jpg" 
    },
    { 
      name: "Meizu 21 Pro", 
      price: "38 000 сом", 
      image: "https://fdn2.gsmarena.com/vv/pics/meizu/meizu-21-pro-1.jpg" 
    },
  ];

  return (
    <>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Shop</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((item, index) => (
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
            <Info name={item.name} price={item.price} image={item.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
