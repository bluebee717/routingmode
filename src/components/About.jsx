import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row h-5 my-5 scrollable">
        <div className="col-4">
          <div id="list-example" className="list-group">
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Item 1
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabindex="0"
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              beatae deleniti libero ratione ad laboriosam. Facere, sapiente,
              veniam velit error officiis harum dolore rem amet quas autem
              aliquid nesciunt quod!
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, dolor modi! Fugiat voluptas eum numquam sint
              praesentium perspiciatis incidunt soluta, iure facere quia
              molestiae veniam? Totam tempora culpa omnis! Nam.
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              velit molestiae voluptatum dolorem illum, numquam repudiandae
              voluptatem, delectus aliquid accusantium pariatur asperiores animi
              eveniet voluptate esse odit cupiditate aspernatur. Id.
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui
              explicabo atque. Minima, voluptates accusantium. Eius, qui
              voluptatibus non distinctio doloribus ratione expedita beatae
              impedit perferendis explicabo, aspernatur, culpa dicta?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
