import Footer from "./Footer/footer";
import HandbookPage from "./Handbook/HandbookUnite";
import Header from "./Header/header";
export default function Home() {
  
  
  return (
    <div className="min-h-screen container gap-14">
          <Header></Header>
          <HandbookPage></HandbookPage>
          <Footer></Footer>
    </div>
  );
}
