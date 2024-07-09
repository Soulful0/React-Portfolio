import React from "react";
import pfp from "../../img/userimg.png";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img class="usr-img" src={pfp} alt="Photo of Josh Gingold" />
      <p class="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        molestiae ratione voluptatibus, eligendi ea nobis cumque, quae itaque in
        corporis nemo eos veniam possimus? Vel soluta, optio, quia sit libero
        unde provident porro ipsam dolore, totam exercitationem voluptatibus!
        Tempore ad, alias similique molestiae animi pariatur facere corrupti
        eaque, nostrum quas dicta repudiandae! Fugiat minima accusantium
        repellendus. Fugiat perferendis ducimus eaque deserunt. Incidunt eveniet
        voluptatum quas ullam praesentium, harum esse fuga, magnam consequuntur
        hic ipsam voluptate laborum perspiciatis explicabo placeat? Explicabo
        minus quas ea quasi et consectetur voluptas cumque harum, dolorum magnam
        obcaecati hic modi animi eligendi eius sapiente! Doloremque, fugiat.
      </p>
    </section>
  );
}

export default About;
