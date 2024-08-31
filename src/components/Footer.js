
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import {  BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
  import foot from '../assets/foot.png'
  
function Foots() {
    return (
      <Footer container className="bg-slate-200 rounded-none">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
            <div>
                <img src={foot} className="w-40 h-40"></img>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="#">UrbanZ</FooterLink>
                  <FooterLink href="#">Tailwind CSS</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="https://github.com/20gaurav04">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="CopyRight UrbanZ™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="https://www.instagram.com/ig_myto/?hl=en" icon={BsInstagram} />
              <FooterIcon href="https://www.linkedin.com/in/gaurav-sharma-51515725a/" icon={BsLinkedin} />
              <FooterIcon href="https://github.com/20gaurav04" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }

  export default Foots
  