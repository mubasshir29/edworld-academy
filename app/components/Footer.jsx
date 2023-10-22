import React from "react";

const Footer = () => {
  return (
    <div id="footer-row" className=" flex gap-12 py-6 justify-between text-sm text-slate-400">
      <div id="about-summary" className=" flex  w-[40%] pr-16">
        <div className="w-[70%] flex-col space-y-2">
        <h1 className="text-2xl font-bold text-myYellow">Ed-World Academy</h1>
        <p className="leading-loose">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur,
        </p>
        </div>
      </div>
      <div id="home-vertical" className="w-[20%]  flex-col space-y-2">
        <h2 className="text-2xl font-bold">Website</h2>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Blog</li>
          <li>Join Us</li>
        </ul>
      </div>
      <div id="contact" className="w-[20%]  flex-col space-y-2">
        <h3 className="text-2xl font-bold">Contact</h3>
        <ul>
          <li>
            Al Haifz Plaza, Shah Ali Banda New Rd
            <br /> Khilwat, Hyderabad, <br />
            Telangana 500002, India
          </li>
          <li>info@edworld.com</li>
          <li>+91-98490-12345</li>
        </ul>
      </div>
      <div id="courses" className="w-[20%]  flex-col space-y-2">
        <h3 className="text-2xl font-bold">Coachings</h3>
        <ul>
            <li>Engineering</li>
            <li>Polytechnic</li>
            <li>Intermediate</li>
            <li>Class I to X</li>
            <li>Tajweed Quran</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
