import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Alghif" };

  return ( 
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn.firstName || "Guest"}
              subtext="From pitih to power with full control in your hands."
            />
            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1000000.00}
            />
          </header>
        </div>
      </section>
    </>
  );
}

export default Home;
