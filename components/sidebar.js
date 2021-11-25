import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Accordion, useAccordionButton, Row, Col } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <span onClick={decoratedOnClick} style={{ cursor: "pointer" }} className="sidebar-item active">
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
        <a className="text-decoration-none sidebar-item my-1">
          <Row className="row d-flex align-items-center justify-content-center p-1">
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/overview.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              OVERVIEW
            </Col>
          </Row>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none sidebar-item my-1">
          <Row className="row d-flex align-items-center justify-content-center p-1">
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/business.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              BUSINESS
            </Col>
          </Row>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none sidebar-item my-1">
          <Row className="row d-flex align-items-center justify-content-center p-1">
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/inbox.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              INBOX
            </Col>
          </Row>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none sidebar-item my-1">
          <Row className="row d-flex align-items-center justify-content-center p-1">
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/collaborators.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              COLLABORATORS
            </Col>
          </Row>
        </a>
      </Link>
      <Accordion defaultActiveKey="0">
        <CustomToggle eventKey="0">
          <Row className="row d-flex align-items-center justify-content-center p-1" style={{ background: "rgba(125, 183, 180, 0.15)", borderRadius: "10px" }}>
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/performance.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              PERFORMANCE
            </Col>
          </Row>
        </CustomToggle>
        <Accordion.Collapse eventKey="0">
          <Row className="row">
            <Col xs={9} className="offset-3">
              <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
                <li className="my-1">
                  <Link href="/">
                    <a className="text-decoration-none" style={{ fontSize: "8px", color: "#666666" }}>
                      SUMMARY
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="text-decoration-none" style={{ fontSize: "8px", color: "#666666" }}>
                      CREDITS
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="text-decoration-none" style={{ fontSize: "8px", color: "#7DB7B4" }}>
                      INTERESTED USERS
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Accordion.Collapse>
      </Accordion>
      <Link href="/">
        <a className="text-decoration-none sidebar-item my-1">
          <Row className="row d-flex align-items-center justify-content-center p-1">
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/billing.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              BILLING
            </Col>
          </Row>
        </a>
      </Link>
      <Link href="/">
        <a className="text-decoration-none sidebar-item my-1">
          <Row className="row d-flex align-items-center justify-content-center p-1">
            <Col xs={3} className="bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "45px" }}>
              <Image src="/support.svg" width="27" height="20" />
            </Col>
            <Col xs={9} className="bg-transparent text-gray" style={{ fontSize: "11px" }}>
              SUPPORT
            </Col>
          </Row>
        </a>
      </Link>
    </Nav>
  );
}
