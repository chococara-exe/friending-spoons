export default interface Professional {
    type: "Friend" | "Spooner",
    name: string,
    age: number,
    email: string,
    photoLink: string,
    tags: string[],
    location: string,
    description: string
}