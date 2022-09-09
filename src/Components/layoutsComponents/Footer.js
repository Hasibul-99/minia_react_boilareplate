import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <script>document.write(new Date().getFullYear())</script> © BAT.
          </div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Design & Develop by <a href="#!" className="text-decoration-underline">SSL Wireless</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
