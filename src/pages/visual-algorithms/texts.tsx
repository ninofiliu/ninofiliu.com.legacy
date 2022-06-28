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
        <a href="https://www.instagram.com/explore/tags/turbulenzalgorithm/">Examples</a>
      </p>
    </>
  ),
};
