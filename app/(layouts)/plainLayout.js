import NavBar from "../Components/navbar";
import Footer from "../Components/footer";


function Layout({ children, color}) {
    return (
    <div>
      <div className="bg-white min-h-screen flex flex-col">
        <NavBar  navColor={color}/>
        <div className=" mx-auto flex flex-col w-screen justify-center text-center">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;