import CatalogItem from "./components/CatalogItem";
import { useState, useEffect } from "react";
import type Professional from "./models/Professional";
import background from "./assets/background.jpg"

export default function Catalog() {
    const [collection, setCollection] = useState<Professional[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch ('/api/friendsandspoons')
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
            width: "100%"
            }}>
            {collection.length > 0 ?
                collection.map((item, index) => {
                    return <CatalogItem 
                        type={item.type} 
                        name={item.name} 
                        age={item.age} 
                        email={item.email} 
                        photoLink={item.photoLink}
                        location={item.location}
                        tags={item.tags}
                        description={item.description}
                    />
                }) : "No items found"}
        </div>
    )
}