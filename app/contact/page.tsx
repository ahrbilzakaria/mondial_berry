import { Contact } from "../global_components/contact";
import NavBar from "../global_components/navBar";
import { ContactSection } from "../sections/contact/Contact";

export default function page() {
  return (
    <div className="h-screen flex items-center flex-col relative border-[10px] border-white w-full">
      <div className="w-full absolute z-10">
        <NavBar />
      </div>
      <Contact version="page" />
    </div>
  );
}
