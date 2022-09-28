import ImageSlider from "./ImageSlider";
import images from "./BlogCoverCard";


const MehanBlog = () => {

return (
    <div>
	<div style={{
        height: "50vh",
        width: "100%",
    }}>
        <ImageSlider
        images={images} />
        </div>
        <div style={{
            height: "100vh",
        }}>
        <article>
    <h1>Heading . . .</h1>
     
{/* <p style={{
    textAlign: "justify"
}}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis itaque voluptatum ad, quis consectetur sunt corrupti eius tenetur ipsum tempora, repudiandae quos quia cupiditate sit animi vitae quod. Impedit cum amet, pariatur architecto sit iste incidunt obcaecati accusantium at similique natus nisi ab explicabo magnam voluptatibus fuga sunt autem dignissimos tempora ratione. Quia beatae consequuntur quibusdam alias porro, temporibus maxime eos rerum dolorem voluptatibus incidunt odio iure aut accusantium facilis esse provident deleniti enim officia itaque ipsa nulla! Corrupti rem a molestiae? Eum at nemo, maxime accusantium porro facere voluptatibus ipsum, asperiores deserunt quia fugit voluptatem aperiam debitis, fugiat molestiae inventore vel ad distinctio dolor eligendi? Illo quisquam, provident quos nulla iusto vitae minus alias consequatur numquam ex maxime repellendus aliquid, optio rerum officiis natus commodi expedita. Commodi perferendis quasi voluptates, aut excepturi, quia laudantium nisi velit dolore nobis, quae est dignissimos possimus sunt autem eum soluta molestias reiciendis ex fugit dolores? Beatae iusto impedit officia dolorum reprehenderit aliquam eligendi necessitatibus illo? Quis tenetur iste eveniet unde. Eligendi dolores nisi odit sequi quod, eum necessitatibus dolorem est magni cupiditate incidunt dolor explicabo tenetur repellat velit illo asperiores quisquam veniam possimus, nobis laboriosam nostrum. Perspiciatis natus minima illo fugit aspernatur laborum!
      
    </p> */}
 
  </article>
  {/* <aside>
    <h1 align="center">Latests</h1>
    <span><p>first article</p></span>
    <span><p>second article</p></span>
    <span><p>third article</p></span>
    <span><p>fourth article</p></span>
    <span><p>fifth article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
    <span><p>another article</p></span>
  </aside> */}
        </div>
    </div>
)
}
export default MehanBlog;
