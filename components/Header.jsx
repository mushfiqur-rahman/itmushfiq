import {
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
  FaWhatsapp,
  FaMicrosoft,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <div>
          <div className="text-base font-medium mb-2">
            <h1 className="md:text-3xl text-xl font-semibold">
              Mushfiqur Rahman
            </h1>
            <h2 className="font-mono text-sm">
              IT Support Engineer. Microsoft 365, Entra ID, Intune,
              ExchangeOnline, Outlook, Google Workspace
            </h2>
          </div>
          <p>
            <a
              className="inline-flex gap-x-1.5 test-sm align-baseline leading-none hover:underline"
              href="https://www.google.com/maps/place/jashore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location: Jashore, Khulna, Bangladesh"
            >
              <FaMapMarkerAlt /> Jashore, Khulna, Bangladesh
            </a>
          </p>
          <div
            className="flex gap-x-2 pt-1 text-sm print:hidden"
            role="list"
            aria-label="Contact-links"
          >
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="mailto:victoriaeceku110922@gmail.com"
              rel="noreferrer"
              target="_blank"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/itmushfiq"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://github.com/mushfiqur-rahman"
              rel="noreferrer"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.youtube.com/@itmushfiq"
              rel="noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://wa.me/8801737760068"
              rel="noreferrer"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.upwork.com/freelancers/itmushfiq"
              rel="noreferrer"
              target="_blank"
              aria-label="Upwork"
            >
              <FaUpwork />
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://learn.microsoft.com/en-us/users/mushfiqurrahman-0871/training/modules"
              rel="noreferrer"
              target="_blank"
              aria-label="Microsoft Learn"
            >
              <FaMicrosoft />
            </a>
          </div>
        </div>
        <div
          className="relative flex shrink-0 overflow-hidden rounded-xl size-28 border-2 border-gray-300"
          aria-hidden="true"
        >
          <img
            src="../mushfiq.png"
            alt="Mushfiqur Rahman's Profile Picture"
            className="aspect-square h-full w-full bg-lime-500"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
