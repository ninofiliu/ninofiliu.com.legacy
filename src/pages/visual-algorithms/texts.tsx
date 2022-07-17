import AppLink from "../../components/AppLink";
import Nav from "../../components/Nav";

export default {
  home: (
    <>
      <h2>Visual algorithms</h2>
      <p>
        I make a lot of art with code but I don't wanna be like the other creative coders out there, keeping their programs
        secret and stuff :/
      </p>
      <p>That's why I expose most of my programs in this no code app that everybody can use for free without rate limit</p>
      <p>
        Have fun using feeding your own pics/vids to my little monsters, and please mention me if you post anything on social
        media
      </p>
      <p>(´｡•ᵕ•｡`)♡</p>
      <Nav />
    </>
  ),
  turbulenz: (
    <>
      <h2>Turbulenz</h2>
      <p>Takes an image and repeatedly warp it depending on a warp map image</p>
      <p>
        If a pixel at (x,y) is very red, it's gonna shift the pixel right, and if it's very green, it's gonna shift the pixel
        down
      </p>
      <p>
        <AppLink link="https://www.instagram.com/explore/tags/turbulenzalgorithm/">Examples</AppLink>
      </p>
    </>
  ),
  scratch: (
    <>
      <h2>Scratch</h2>
      <p>
        One of my first algorithm, originally created to draw the way humans draw: start the pen somewhere, and move
        continuously the pen in whichever direction has the most shadow.
      </p>
      <p>It turned out less human-like than I thought, but the produced textures and paths have a beauty of their own.</p>
      <p>
        <AppLink link="https://www.instagram.com/p/CRtYw1sCaoP/">Example 1</AppLink>
        {" / "}
        <AppLink link="https://www.instagram.com/p/CQ8YXHurWkj/">Example 2</AppLink>
        {" / "}
        <AppLink link="https://www.instagram.com/p/CPvu9KRCFaF/">also used in As If My Phone Cares About Museums</AppLink>
      </p>
    </>
  ),
  distortio: (
    <>
      <h2>Distortio</h2>
      <p>
        The algorithm behind{" "}
        <AppLink link="https://objkt.com/profile/tz1P4WFu3TojcvkiLdgRnsnf3jZ6F1DZzFtb/created">the "They" NFT serie</AppLink>
      </p>
      <p>Distorts a picture or video based on another picture or video</p>
      <p>Not yet ported here, but coming soon!</p>
    </>
  ),
  supermosh: (
    <>
      <h2>Supermosh</h2>
      <p>
        You got lost. Go to <AppLink link="//supermosh.github.io">supermosh.github.io</AppLink> {";)"}
      </p>
    </>
  ),
};
