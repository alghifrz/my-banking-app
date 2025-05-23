import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log('Logged in user data:', loggedIn);

  return ( 
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome,"
              user={loggedIn?.name || "Guest"}
              subtext="From pitih to power with full control in your hands."
            />
            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={434000000.00}
            />
          </header>
        
          RECENT TRANSACTIONS
        </div>
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 434000000.00}, {currentBalance: 2000000.00}]}
        />
      </section>
    </>
  );
}

export default Home;
