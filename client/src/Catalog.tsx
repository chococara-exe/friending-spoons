import CatalogItem from "./components/CatalogItem";
import { useState } from "react";
import type Professional from "./models/Professional";
import background from "./assets/background.jpg"

export default function Catalog() {
    const [collection, setCollection] = useState<Professional[]>([]);

    const getData = async () => {
        const res = await fetch ('/api/friendsandspoons')
        const data = await res.json();
        setCollection(data);
    }

    return (
        <div className="background-image-{background}">
            {collection.length > 0 ?
                collection.map((item, index) => {
                    return <CatalogItem 
                        type={item.type} 
                        name={item.name} 
                        age={item.age} 
                        email={item.email} 
                        image={item.image}
                        location={item.location}
                        tags={item.tags}
                        description={item.description}
                    />
                }) : "No items found"}
        </div>
    )
}