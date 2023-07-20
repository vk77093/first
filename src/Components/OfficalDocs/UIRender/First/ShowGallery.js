import Gallery from "./Gallery";
import { Profile } from "./Gallery";
export default function ShowGallery(){
    return(
        <>
        <h2>Profile Component with Named Export Function</h2>
        <Profile/>
        <h2>Gallery Component with Export default</h2>
        <Gallery/>
        </>
    )
}