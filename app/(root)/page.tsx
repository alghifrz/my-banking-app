import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    $id: "1",
    email: "alghifarirasyidzola@gmail.com",
    userId: "1",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    firstName: "Alghif",
    lastName: "Rz",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: ""
  };

  return ( 
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={`${loggedIn.firstName} ${loggedIn.lastName}`}
              subtext="From pitih to power with full control in your hands."
            />
            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1000000.00}
            />
          </header>
        
          RECENT TRANSACTIONS
        </div>
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 1000000.00}, {currentBalance: 2000000.00}]}
        />
      </section>
    </>
  );
}

export default Home;
