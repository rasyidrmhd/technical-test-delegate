import Image from "next/image";
import Link from "next/link";
import { Accordion, Nav, useAccordionButton, Card } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <span onClick={decoratedOnClick} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}

export default function Sidebar() {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <div className="text-center mb-3">
        <Image src="/kinky_ostendorf.svg" height="114" width="164" />
      </div>
      <Link href="/">
        <a className="text-decoration-none">
          <div className="row d-flex align-items-center justify-content-center p-1">
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/overview.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              OVERVIEW
            </div>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none">
          <div className="row d-flex align-items-center justify-content-center p-1">
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/business.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              BUSINESS
            </div>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none">
          <div className="row d-flex align-items-center justify-content-center p-1">
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/inbox.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              INBOX
            </div>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none">
          <div className="row d-flex align-items-center justify-content-center p-1">
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/collaborators.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              COLLABORATORS
            </div>
          </div>
        </a>
      </Link>
      <Accordion defaultActiveKey="0">
        <CustomToggle eventKey="0">
          <div className="row d-flex align-items-center justify-content-center p-1" style={{ background: "rgba(125, 183, 180, 0.15)", borderRadius: "10px" }}>
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/performance.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              PERFORMANCE
            </div>
          </div>
        </CustomToggle>
        <Accordion.Collapse eventKey="0">
          <div className="row">
            <div className="col-9 offset-3">
              <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
                <li className="my-1">
                  <Link href="/">
                    <a className="text-decoration-none fw-bolder" style={{ fontSize: "8px", color: "#666666" }}>
                      SUMMARY
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="text-decoration-none fw-bolder" style={{ fontSize: "8px", color: "#666666" }}>
                      CREDITS
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="text-decoration-none fw-bolder" style={{ fontSize: "8px", color: "#7DB7B4" }}>
                      INTERESTED USERS
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Accordion.Collapse>
      </Accordion>
      <Link href="/">
        <a className="text-decoration-none">
          <div className="row d-flex align-items-center justify-content-center p-1">
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/billing.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              BILLING
            </div>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none">
          <div className="row d-flex align-items-center justify-content-center p-1">
            <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/support.svg" width="27" height="20" />
            </div>
            <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
              SUPPORT
            </div>
          </div>
        </a>
      </Link>
    </Nav>
  );
}
