import CatalogItem from "./components/CatalogItem";
import { useState, useEffect } from "react";
import type Professional from "./models/Professional";
import background from "./assets/background.jpg"
import dudePNG from "./assets/image.png"

export default function Catalog() {
    const [collection, setCollection] = useState<Professional[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch ('http://localhost:5000/api/friendsandspoons')
            console.log(res);
            const data = await res.json();
            console.log(data);
            setCollection(data);
        };
        getData();
    }, []);

    return (
        <div style={{ 
            backgroundImage: `url(${background})`, 
            backgroundSize: "auto", 
            backgroundRepeat: "repeat",
            minHeight: "100vh",
            width: "100%",
            padding: "0",
            margin: "0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr))"
            }}>
            {collection.length > 0 ?
                collection.map((item, index) => {
                    return <CatalogItem 
                        type={item.type} 
                        name={item.name} 
                        age={item.age} 
                        email={item.email} 
                        photoLink="./assets/image.png"
                        location={item.location}
                        tags={item.tags}
                        description={item.description}
                    />
                }) : "No items found"}
        </div>
    )
}