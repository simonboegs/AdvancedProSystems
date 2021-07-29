import * as React from "React";
//import "bootstrap";
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

export function FAQAccordian(props) {
  return (
    <div className="row align-items-center gy-2" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
      <div className="col-12">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="col-12">
        <div class="accordion" id="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by
                default, until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom
                CSS or overriding our default variables. It's also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default, until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom
                CSS or overriding our default variables. It's also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by
                default, until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom
                CSS or overriding our default variables. It's also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
