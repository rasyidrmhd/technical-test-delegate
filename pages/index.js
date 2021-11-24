import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { Row, Col, Button, Nav } from "react-bootstrap";

export default function Home({ data }) {
  let active = data.page;
  let items = [];
  for (let i = 1; i <= data.total_pages; i++) {
    items.push(
      <a
        href="#"
        className="text-decoration-none p-3 mx-1 rounded-circle"
        style={{ color: "#666666", fontSize: "11px" }}
        onClick={(e) => {
          e.preventDefault();
          Router.push(`/?page=${i}`);
        }}
      >
        {i}
      </a>
    );
  }

  return (
    <div className="p-5 m-0">
      <Head>
        <title>Technical Test from Delegate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="row">
          <div className="col-2 py-5 px-4" style={{ borderRadius: "40px", boxShadow: "10px 10px 24px rgba(166, 180, 200, 0.15)" }}>
            <Nav defaultActiveKey="/" className="flex-column">
              <div className="text-center mb-3">
                <Image src="/kinky_ostendorf.svg" height="114" width="164" />
              </div>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1">
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/overview.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      OVERVIEW
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1">
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/business.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      BUSINESS
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1">
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/inbox.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      INBOX
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1">
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/collaborators.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      COLLABORATORS
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1" style={{ background: "rgba(125, 183, 180, 0.15)", borderRadius: "10px" }}>
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/performance.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      PERFORMANCE
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1">
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/billing.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      BILLING
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/overview">
                <a className="text-decoration-none">
                  <div className="row d-flex align-items-center justify-content-center p-1">
                    <div className="col-3 bg-white d-flex align-items-center justify-content-center p-0" style={{ borderRadius: "10px", height: "50px" }}>
                      <Image src="/support.svg" width="27" height="20" />
                    </div>
                    <div className="col-9 fw-bolder" style={{ fontSize: "11px", color: "#666666" }}>
                      SUPPORT
                    </div>
                  </div>
                </a>
              </Link>
            </Nav>
          </div>

          <div className="col-10">
            <div className="container">
              <div className="row mb-3">
                <div className="col-1">
                  <Image src="/pencil.svg" height="50" width="50" />
                </div>
                <div className="col-11">
                  <span className="fw-bolder p-0" style={{ fontSize: "11px", color: "#666666" }}>
                    PERFORMANCE
                  </span>
                  <h3 style={{ color: "#666666" }}>Interested Users</h3>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="input-group input-group-sm">
                    <span className="input-group-text border-0" id="inputGroup-sizing-sm" style={{ backgroundColor: "rgba(102, 102, 102, 0.04)", borderRadius: "20px 0 0 20px" }}>
                      <Image src="/search.svg" height="13" width="13" />
                    </span>
                    <input type="text" className="form-control shadow-none border-0" placeholder="Search by email or name" style={{ backgroundColor: "rgba(102, 102, 102, 0.04)", borderRadius: "0 20px 20px 0" }} />
                  </div>
                </form>
              </div>
              <div className="d-flex flex-column">
                <h5 className="px-3 mb-3" style={{ color: "#666666" }}>
                  INTERESTED USERS
                </h5>
                <div className="row px-3 mb-3 fw-bolder" style={{ color: "#7983A5" }}>
                  <div className="col-2">ID</div>
                  <div className="col-5">EMAIL</div>
                  <div className="col-5">NAME</div>
                </div>
                {data.data.map((user) => {
                  return (
                    <div className="row p-3 fw-bolder mb-2" style={{ color: "#666666", boxSizing: "border-box", border: "1px solid rgba(102, 102, 102, 0.1)", boxShadow: "10px -6px 17px rgba(166, 180, 200, 0.15)", borderRadius: "12px" }}>
                      <div className="col-2">{user.id}</div>
                      <div className="col-5">{user.email}</div>
                      <div className="col-5">
                        {user.first_name} {user.last_name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <footer className="d-flex align-items-center justify-content-center">
              <button
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  Router.push(`/?page=${active - 1}`);
                }}
                disabled={active == 1}
              >
                <Image src="/arrow_back.svg" width="21px" height="20px" />
              </button>
              {items}
              <button
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  Router.push(`/?page=${active + 1}`);
                }}
                disabled={active == data.total_pages}
              >
                <Image src="/arrow_next.svg" width="21px" height="16px" />
              </button>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(`https://reqres.in/api/users?page=${page}}`);
  const data = await res.json();

  return { props: { data } };
}
